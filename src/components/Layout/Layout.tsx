import React, { PropsWithChildren, useRef, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";

const BackGround = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #444;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 375px;
  height: 812px;
  // width: 100%;
  // height: 100%;
  background-color: white;
  padding: 0 5px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <BackGround>
      <Container ref={containerRef}>
        <Header />
        {React.cloneElement(children as React.ReactElement, { containerRef })}
      </Container>
    </BackGround>
  );
};

export default Layout;
