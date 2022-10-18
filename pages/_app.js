import { ThemeProvider } from "styled-components";

import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/reset.css";

const theme = {
    colors: {},
};

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}
