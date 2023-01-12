import React from "react";
import NoticeIdView, { NoticeIdViewProps } from "./NoticeIdView";

interface NoticeIdControllerProps {
  title: string;
  content: string;
}

const NoticeIdController: React.FC<NoticeIdControllerProps> = ({
  title,
  content,
}) => {
  const viewProps: NoticeIdViewProps = {
    title,
    content,
  };
  return <NoticeIdView {...viewProps} />;
};

export default NoticeIdController;
