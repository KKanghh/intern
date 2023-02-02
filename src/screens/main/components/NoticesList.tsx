import React from "react";
import { Notice } from "~/types/Notice";
import NoticeListItem from "./NoticeListItem";
import styled from "styled-components";
import { post } from "~/types/post";

interface NoticeListProps {
  notices: post[];
  lastRef: React.RefObject<HTMLDivElement>;
}

const Empty = styled.span`
  font-family: "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
  font-weight: 400;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  // position: absolute;
  // left: 50%;
  // top: 50%;
  // transform: translate(-50%, -50%);
`;

const NoticeList: React.FC<NoticeListProps> = ({ notices, lastRef }) => {
  const length = notices.length;
  // const length = 0;
  if (length === 0) {
    return <Empty>아직 게시물이 없습니다.</Empty>;
  }

  return (
    <>
      {notices.map((notice, i) => {
        return (
          <NoticeListItem
            key={notice.id}
            notice={notice}
            lastRef={i === length - 1 ? lastRef : null}
          />
        );
      })}
    </>
  );
};

export default NoticeList;
