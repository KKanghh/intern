import "../styles/globalStyles.ts";
import Layout from "../components/Layout/Layout";
import type { AppProps } from "next/app";
import GlobalStyles from "../styles/globalStyles";
import { Provider } from "react-redux";
import { wrapper } from "~/store";

const App = ({ Component, ...pageProps }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <Layout>
        <GlobalStyles />
        <Component {...props.pageProps} />
      </Layout>
    </Provider>
  );
};

export default App;
