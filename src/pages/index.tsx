import axios from "axios";
import React from "react";
import MainController from "~/screens/main/MainController";
import { Notice } from "~/types/Notice";
import { wrapper } from "~/store";
import { NextPage } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";

interface HomePageProps {
  containerRef: React.RefObject<HTMLDivElement>;
  last: boolean;
}

const Home: NextPage<HomePageProps> = ({ containerRef, ...props }) => (
  <MainController containerRef={containerRef} props={props} />
);

export default Home;

export const getStaticProps = async () => {
  try {
    const res = await axios.get(
      `https://dev-api.tdogtdog.com/post?sort=createdAt,desc&p=1`,
      // "https://dev-api.tdogtdog.com/post/backup?board=announcement",
      {
        headers: {
          "TT-OS": "IOS",
          "TT-Version": 999,
        },
      }
    );

    return {
      props: res.data,
    };

    return { props: { last: false } };
  } catch (err) {
    console.error(err);
    return { props: { last: true } };
  }
};
