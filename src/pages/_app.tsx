import React from "react";
import "../styles/globalStyles.ts";
import Layout from "../components/Layout/Layout";
import type { AppProps } from "next/app";
import GlobalStyles from "../styles/globalStyles";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
