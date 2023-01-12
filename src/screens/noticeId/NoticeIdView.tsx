import React from "react";
import NoticeIdTitle from "./components/NoticeIdTitle";
import NoticeIDComponents from "./components";
import Divider from "~/components/Divider/Divider";
import NoticeIdContent from "./components/NoticeIdContent";

export interface NoticeIdViewProps {
  title: string;
  content: string;
}

const NoticeIdView: React.FC<NoticeIdViewProps> = ({ title, content }) => {
  return (
    <>
      <NoticeIdTitle title={title} />
      {/* <Divider /> */}
      <NoticeIdContent content={content} />
      {/* <div>{content}</div> */}
    </>
  );
};

export default NoticeIdView;
