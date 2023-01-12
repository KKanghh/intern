import React from "react";
import styled from "styled-components";

interface NoticeIdContentProps {
  content: string;
}

const ContentDiv = styled.div`
  font-family: "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
  font-weight: 400;
`;

const NoticeIdContent: React.FC<NoticeIdContentProps> = ({ content }) => {
  return <ContentDiv dangerouslySetInnerHTML={{ __html: content }} />;
};

export default NoticeIdContent;
