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
import { useState } from "react";
import Loading from "~/components/Loading/Loading";

const App = ({ Component, ...pageProps }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  const [queryClient] = useState(() => new QueryClient());
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={props.pageProps.dehydratedState}>
          <GlobalStyles />
          <Layout>
            <Component {...props.pageProps} />
          </Layout>
          <ReactQueryDevtools initialIsOpen={true} />
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
