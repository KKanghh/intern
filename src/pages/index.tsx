import axios from "axios";
import React from "react";
import MainController from "~/screens/main/MainController";
import { NextPage } from "next";
import request from "~/libs/axios";
import { getNotice } from "~/libs/getNotice";
import { QueryClient, dehydrate } from "@tanstack/react-query";

interface HomePageProps {
  last: boolean;
}

const Home: NextPage = ({ ...props }) => <MainController props={props} />;

export default Home;

export const getStaticProps = async () => {
  const res = await request.get(
    `/post?sort=createdAt,desc&p=1`
    // "/post/backup?board=announcement",
  );

  return {
    props: res.data,
  };

};

// export const getStaticProps = async () => {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchInfiniteQuery(["notice"], getNotice);

//   return {
//     props: {
//       dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
//     },
//   };
// };
