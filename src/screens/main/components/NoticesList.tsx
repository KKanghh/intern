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
  const length = notices.length;
  return (
    <>
      {notices.map((notice, i) => {
        return (
          <NoticeListItem
            key={notice.id}
            notice={notice}
            lastRef={i === length - 1 ? lastRef : null}
            containerRef={containerRef}
          />
        );
      })}
    </>
  );
};

export default NoticeList;
