import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import Header from "./Header";

const BackGround = styled.div`
  width: 100%;
  background-color: Antiquewhite;
`;

const Container = styled.div`
  width: 375px;
  min-height: 100vh;
  background-color: white;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <BackGround>
      <Container>
        <Header />
        {children}
      </Container>
    </BackGround>
  );
};

export default Layout;
