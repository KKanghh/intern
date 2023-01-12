import axios from "axios";
import React, { useCallback, useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/store/modules";
import { noticeActions } from "~/store/modules/notice";
import { Notice } from "../../types/Notice";
import MainView from "./MainView";
import { MainViewProps } from "./MainView";

interface MainControllerProps {
  last: boolean;
}

const MainController: React.FC<MainControllerProps> = ({ last }) => {
  const notices = useSelector<RootState, Notice[]>(
    (state) => state.notice.notices
  );
  const [page, setPage] = useState<number>(2);
  const isLast = useRef<boolean>(last);
  const divRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const onScroll = useCallback(async () => {
    try {
      const res = await axios.get(
        `https://dev-api.tdogtdog.com/post?sort=createdAt,desc&p=${page}`,
        {
          headers: {
            "TT-OS": "IOS",
            "TT-Version": 999,
          },
        }
      );
      const { content } = res.data;
      setPage((page) => page + 1);
      isLast.current = res.data.last;
      dispatch(noticeActions.concat(content));
    } catch {
      return;
    }
  }, [page, dispatch]);

  useEffect(() => {
    if (!divRef.current) return;

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isLast.current) {
        onScroll();
      }
    });

    io.observe(divRef.current);

    return () => {
      io.disconnect();
    };
  }, [onScroll]);

  const viewProps: MainViewProps = { notices, divRef };
  return <MainView {...viewProps} />;
};

export default MainController;
