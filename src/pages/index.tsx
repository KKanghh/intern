import axios from "axios";
import React from "react";
import MainController from "~/screens/main/MainController";
import { Notice } from "~/types/Notice";
import { wrapper } from "~/store";
import { noticeActions } from "~/store/modules/notice";
import { NextPage } from "next";

interface HomePageProps {
  last: boolean;
}

const Home: NextPage<HomePageProps> = ({ last }) => (
  <MainController last={last} />
);

export default Home;

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
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

    const { content, last } = res.data;
    store.dispatch(noticeActions.set(content));

    return {
      props: { last },
    };
  } catch (err) {
    console.error(err);
    return { props: { last: true } };
  }
});
