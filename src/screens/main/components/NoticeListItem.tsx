import React from "react";
import { Notice } from "~/types/Notice";
import MainComponents from ".";
import dayjs from "dayjs";
import Divider from "~/components/Divider/Divider";
import { useRouter } from "next/router";
import { scrollActions } from "~/store/modules/scroll";
import { useDispatch } from "react-redux";

interface NoticeListItemProps {
  notice: Notice;
  lastRef: React.RefObject<HTMLDivElement> | null;
}

const NoticeListItem: React.FC<NoticeListItemProps> = ({
  notice: { id, title, createdAt },
  lastRef,
}) => {
  const date = new Date(createdAt);
  const display = dayjs(date).format("YYYY.MM.DD");
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <>
      <MainComponents.ListItemDiv
        ref={lastRef}
        onClick={() => {
          dispatch(scrollActions.setScroll(window.scrollY));
          router.push(`/${id}`);
        }}
      >
        <MainComponents.ListItemTitle>
          {title.replace("<br>", " ")}
        </MainComponents.ListItemTitle>
        <MainComponents.ListItemDate>{display}</MainComponents.ListItemDate>
      </MainComponents.ListItemDiv>
      <Divider />
    </>
  );
};

export default NoticeListItem;
