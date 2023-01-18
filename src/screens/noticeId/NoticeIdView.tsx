import React from "react";
import NoticeIdTitle from "./components/NoticeIdTitle";
import NoticeIdContent from "./components/NoticeIdContent";

export interface NoticeIdViewProps {
  title: string;
  content: string;
}

const NoticeIdView: React.FC<NoticeIdViewProps> = ({ title, content }) => {
  return (
    <>
      <NoticeIdTitle title={title} />
      <NoticeIdContent content={content} />
    </>
  );
};

export default NoticeIdView;
