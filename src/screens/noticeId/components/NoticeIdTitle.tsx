import React from "react";
import NoticeIDComponents from ".";

interface NoticeIdTitleProps {
  title: string;
}

const NoticeIdTitle: React.FC<NoticeIdTitleProps> = ({ title }) => {
  return (
    <NoticeIDComponents.Title>
      {title.split("<br>").map((line) => (
        <React.Fragment key={line}>
          <span>{line}</span>
          <br />
        </React.Fragment>
      ))}
    </NoticeIDComponents.Title>
  );
};

export default NoticeIdTitle;
