import React from "react";
import { Notice } from "../../../types/Notice";
import NoticeListItem from "./NoticeListItem";

interface NoticeListProps {
  notices: Notice[];
}

const NoticeList: React.FC<NoticeListProps> = ({ notices }) => {
  return (
    <>
      {notices.map((notice) => {
        return <NoticeListItem notice={notice} key={notice.id} />;
      })}
    </>
  );
};

export default NoticeList;
