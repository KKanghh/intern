import React from "react";
import { Notice } from "../../../types/Notice";
import MainComponents from ".";

interface NoticeListItemProps {
  notice: Notice;
}

const NoticeListItem: React.FC<NoticeListItemProps> = ({
  notice: { id, title, date },
}) => {
  return (
    <>
      <MainComponents.ListItemDiv>
        <MainComponents.ListItemTitle>{title}</MainComponents.ListItemTitle>
        <MainComponents.ListItemDate>{date}</MainComponents.ListItemDate>
      </MainComponents.ListItemDiv>
      <MainComponents.Divider />
    </>
  );
};

export default NoticeListItem;
