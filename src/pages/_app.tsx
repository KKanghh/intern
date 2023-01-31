import "~/styles/globalStyles.ts";
import Layout from "~/components/Layout/Layout";
import type { AppProps } from "next/app";
import GlobalStyles from "~/styles/globalStyles";
import { Provider } from "react-redux";
import { wrapper } from "~/store";
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState, useEffect } from "react";
import Router from "next/router";
import Loading from "~/components/Loading/Loading";

const App = ({ Component, ...pageProps }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  const [queryClient] = useState(() => new QueryClient());
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const start = () => setIsLoading(true);
    const end = () => setIsLoading(false);
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeError", end);
    };
  });
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={props.pageProps.dehydratedState}>
          <GlobalStyles />
          {isLoading && <Loading />}
          <Layout>
            <Component {...props.pageProps} />
          </Layout>
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
