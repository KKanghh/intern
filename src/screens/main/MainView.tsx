import React, { MouseEventHandler } from "react";
import MainComponents from "./components";
import NoticeList from "./components/NoticesList";
import { post } from "~/types/post";

export interface MainViewProps {
  notices: post[];
  divRef: React.RefObject<HTMLDivElement>;
}

const MainView: React.FC<MainViewProps> = ({ notices, divRef }) => {
  return (
    <>
      <MainComponents.MainDiv>알려드려요</MainComponents.MainDiv>
      <NoticeList notices={notices} lastRef={divRef} />
    </>
  );
};

export default MainView;
