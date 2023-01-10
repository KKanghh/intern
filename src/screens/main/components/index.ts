import styled from "styled-components";

const MainDiv = styled.div`
  font-family: "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
  font-size: 25px;
  font-weight: 900;
  letter-spacing: -1px;
  height: 31px;
  margin-bottom: 5px;
`;

const Divider = styled.div`
  background-color: #f4f4f4;
  height: 1px;
`;

const ListItemDiv = styled.div`
  margin: 22px 0 20px 0;
`;

const ListItemTitle = styled.div`
  font-family: "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
  font-weight: 400;
  font-size: 16px;
  height: 25px;
  letter-spacing: -0.8px;
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
  Divider,
  ListItemDiv,
  ListItemTitle,
  ListItemDate,
};

export default MainComponents;
