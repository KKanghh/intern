import React from "react";
import MainComponents from "./components";
import { Notice } from "../../types/Notice";
import NoticeList from "./components/NoticesList";

export interface MainViewProps {
  notices: Notice[];
}

const MainView: React.FC<MainViewProps> = ({ notices }) => {
  return (
    <>
      <MainComponents.MainDiv>알려드려요</MainComponents.MainDiv>
      <NoticeList notices={notices} />
    </>
  );
};

export default MainView;
