import React from "react";
import MainComponents from ".";
import { dayFormat } from "~/libs/dayFormat";
import Divider from "~/components/Divider/Divider";
import { useRouter } from "next/router";
import { scrollActions } from "~/store/modules/scroll";
import { useDispatch } from "react-redux";
import { post } from "~/types/post";

interface NoticeListItemProps {
  notice: post;
  lastRef: React.RefObject<HTMLDivElement> | null;
}

const NoticeListItem: React.FC<NoticeListItemProps> = ({
  notice: { id, title, createdAt },
  lastRef,
}) => {
  const display = dayFormat(new Date(createdAt));
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

export default React.memo(NoticeListItem);
