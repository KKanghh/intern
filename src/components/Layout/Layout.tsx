import React from "react";
import styled from "styled-components";
import Header from "./Header";

const BackGround = styled.div`
  width: 100%;
  height: 100%;
  background-color: #444;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 375px;
  height: 812px;
  background-color: white;
  padding: 0 20px;
`;

const Layout = ({ children }) => (
  <BackGround>
    <Container>
      <Header />
      {children}
    </Container>
  </BackGround>
);

export default Layout;
