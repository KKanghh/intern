import styled from "styled-components";

const MainDiv = styled.div`
  font-family: "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
  font-size: 25px;
  font-weight: 900;
  letter-spacing: -1px;
  height: 31px;
  margin-bottom: 5px;
  margin-left: 15px;
`;

const ListItemDiv = styled.div`
  margin: 22px 15px 20px 15px;
  cursor: pointer;
`;

const ListItemTitle = styled.div`
  font-family: "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
  font-weight: 500;
  font-size: 16px;
  min-height: 25px;
  line-height: 25px;
  letter-spacing: -0.8px;
  word-break: break-all;
`;

const ListItemDate = styled.div`
  font-family: "SFUIDisplay", sans-serif;
  font-weight: 400;
  color: #717171;
  font-size: 13px;
  height: 22px;
`;

const MainComponents = {
  MainDiv,
  ListItemDiv,
  ListItemTitle,
  ListItemDate,
};

export default MainComponents;
