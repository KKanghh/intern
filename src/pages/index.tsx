import axios from "axios";
import React from "react";
import MainController from "~/screens/main/MainController";
import { NextPage } from "next";
import request from "~/libs/getPost";

interface HomePageProps {
  last: boolean;
}

const Home: NextPage<HomePageProps> = ({ ...props }) => (
  <MainController props={props} />
);

export default Home;

export const getStaticProps = async () => {
  try {
    const res = await request.get(
      `/post?sort=createdAt,desc&p=1`
      // "/post/backup?board=announcement",
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
