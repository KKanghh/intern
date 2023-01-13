import React from "react";
import { Notice } from "~/types/Notice";
import NoticeListItem from "./NoticeListItem";

interface NoticeListProps {
  notices: Notice[];
  lastRef: React.RefObject<HTMLDivElement>;
  containerRef: React.RefObject<HTMLDivElement>;
}

const NoticeList: React.FC<NoticeListProps> = ({
  notices,
  lastRef,
  containerRef,
}) => {
  return (
    <>
      {notices.map((notice, i) => {
        return (
          <NoticeListItem
            notice={notice}
            key={notice.id}
            lastRef={i === notices.length - 1 ? lastRef : null}
            containerRef={containerRef}
          />
        );
      })}
    </>
  );
};

export default NoticeList;
