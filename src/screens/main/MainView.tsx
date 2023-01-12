import React, { MouseEventHandler } from "react";
import MainComponents from "./components";
import { Notice } from "../../types/Notice";
import NoticeList from "./components/NoticesList";

export interface MainViewProps {
  notices: Notice[];
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
