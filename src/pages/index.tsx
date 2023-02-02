import React from "react";
import MainController from "~/screens/main/MainController";
import { NextPage } from "next";
import { getNotice } from "~/libs/getNotice";
import { response } from "~/types/response";

const Home: NextPage<response> = (props) => <MainController props={props} />;

export default Home;

export const getStaticProps = async () => {
  const data = await getNotice({ pageParam: 1 });

  return {
    props: data,
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
