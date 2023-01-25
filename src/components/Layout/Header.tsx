import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { BsChevronLeft } from "react-icons/bs";

const Container = styled.div`
  min-height: 109px;
  padding: 0 0 0 16px;

  span {
    display: inline-block;
    margin: 58px 0 0 -5.905px;
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
        <BsChevronLeft size="21" />
      </span>
    </Container>
  );
};

export default Header;
