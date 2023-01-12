import React from "react";
import { Notice } from "~/types/Notice";
import MainComponents from ".";
import dayjs from "dayjs";
import Link from "next/link";
import Divider from "~/components/Divider/Divider";

interface NoticeListItemProps {
  notice: Notice;
  lastRef: React.RefObject<HTMLDivElement> | null;
}

const NoticeListItem: React.FC<NoticeListItemProps> = ({
  notice: { id, title, createdAt },
  lastRef,
}) => {
  const date = new Date(createdAt);
  const now = dayjs();
  // console.log(now);
  return (
    <>
      <MainComponents.ListItemDiv ref={lastRef}>
        <Link href={`/${id}`}>
          <MainComponents.ListItemTitle>
            {title.replace("<br>", " ")}
          </MainComponents.ListItemTitle>
          <MainComponents.ListItemDate>
            {date.toLocaleDateString()}
          </MainComponents.ListItemDate>
        </Link>
      </MainComponents.ListItemDiv>
      <Divider />
    </>
  );
};

export default NoticeListItem;
