import Image from "next/image";
import { FadeLoader } from "react-spinners";
import styled from "styled-components";
import Spinner from "/public/assets/Spinner.gif";

const BackGround = styled.div`
  width: 100%;
  height: 100%;
  z-index: 10;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Loading = () => (
  <BackGround>
    {/* <Image src={Spinner} alt="로딩중" /> */}
    <FadeLoader color="#FFFFFF" />
  </BackGround>
);

export default Loading;
