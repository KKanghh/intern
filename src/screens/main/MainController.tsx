import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useCallback, useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/store/modules";
import { scrollActions } from "~/store/modules/scroll";
import { Notice } from "~/types/Notice";
import MainView from "./MainView";
import { MainViewProps } from "./MainView";

interface MainControllerProps {
  props: any;
  containerRef: React.RefObject<HTMLDivElement>;
}

const MainController: React.FC<MainControllerProps> = ({
  containerRef,
  props,
}) => {
  const scroll = useSelector<RootState, number>((state) => state.scroll.scroll);
  const dispatch = useDispatch();
  const divRef = useRef<HTMLDivElement>(null);
  const fetchData = async ({ pageParam = 1 }) => {
    const res = await axios.get(`https://dev-api.tdogtdog.com/post`, {
      params: {
        sort: "createdAt,desc",
        p: pageParam,
      },
      headers: {
        "TT-OS": "IOS",
        "TT-Version": 999,
      },
    });
    return res.data;
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(["notice"], fetchData, {
    getNextPageParam: (lastPage, page) => {
      if (lastPage.last) return false;
      return page.length + 1;
    },
    initialData: { pages: [props], pageParams: [1] },
    // placeholderData: { pages: [props], pageParams: [2] },
  });
  let notices: Notice[] = [];
  const responses = data?.pages.map((page) => page.content);
  responses?.forEach((response) => {
    notices = notices.concat(response);
  });

  useEffect(() => {
    if (scroll > 0) {
      containerRef.current!.scrollTop = scroll;
      dispatch(scrollActions.resetScroll());
    }
  }, []);

  useEffect(() => {
    if (!divRef.current) return;

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });
    io.observe(divRef.current);

    return () => {
      io.disconnect();
    };
  }, [fetchNextPage, hasNextPage, data]);

  const viewProps: MainViewProps = { notices, divRef, containerRef };
  return (
    <>
      <MainView {...viewProps} />
      {/* <button onClick={() => fetchNextPage()} disabled={!hasNextPage}>
        가져오기
      </button> */}
    </>
  );
};

export default MainController;
