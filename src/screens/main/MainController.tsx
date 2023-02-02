import { useInfiniteQuery } from "@tanstack/react-query";
import { getNotice } from "~/libs/getNotice";
import React, { useRef, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/store/modules";
import { scrollActions } from "~/store/modules/scroll";
import MainView from "./MainView";
import { MainViewProps } from "./MainView";
import { response } from "~/types/response";
import { post } from "~/types/post";

interface MainControllerProps {
  props: response;
}

const MainController: React.FC<MainControllerProps> = ({ props }) => {
  const scroll = useSelector<RootState, number>((state) => state.scroll.scroll);
  const dispatch = useDispatch();
  const divRef = useRef<HTMLDivElement>(null);

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery<
    response,
    Error
  >(["notice"], getNotice, {
    getNextPageParam: (lastPage, page) => {
      if (lastPage?.last) return false;
      return page.length + 1;
    },
    initialData: { pages: [props], pageParams: [1] },
  });

  // let notices: post[] = [];
  let notices = useMemo(() => {
    let notices: post[] = [];
    const responses = data?.pages.map((page) => page.content);
    responses?.forEach((res) => {
      notices = notices.concat(res);
    });
    return notices;
  }, [data]);

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

  useEffect(() => {
    if (scroll > 0) {
      window.scrollTo(0, scroll);
      dispatch(scrollActions.resetScroll());
    } else {
      window.scrollTo(0, 0);
    }
  }, [dispatch]);

  const viewProps: MainViewProps = { notices, divRef };
  return <MainView {...viewProps} />;
};

export default MainController;
