import { wrapper } from "../redux/store";
import Head from "next/head";
import { GlobalStyle } from "../theme";

import axios from "axios";
axios.defaults.baseURL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default wrapper.withRedux(MyApp);
