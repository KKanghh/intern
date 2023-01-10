import React from "react";
import MainView from "./MainView";
import { MainViewProps } from "./MainView";

const Notices = [
  { id: 1, title: "티티케어와 함께하는 슬기로운 반려생활", date: "2020.04.30" },
  {
    id: 2,
    title: "시원한 여름과 함께 찾아온 3.0 업데이트 안내",
    date: "2020.04.30",
  },
];

const MainController = () => {
  const viewProps: MainViewProps = { notices: Notices };
  return <MainView {...viewProps} />;
};

export default MainController;
