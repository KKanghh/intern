import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { TfiAngleLeft } from "react-icons/tfi";

const Container = styled.div`
  min-height: 101px;
  padding: 0 0 0 16px;

  span {
    height: 17px;
    display: inline-block;
    margin: 58px 0 0 0;
  }

  span:hover {
    cursor: pointer;
  }
`;

const Header = () => {
  const router = useRouter();

  return (
    <Container>
      <span onClick={() => router.back()}>
        <TfiAngleLeft />
      </span>
    </Container>
  );
};

export default Header;
