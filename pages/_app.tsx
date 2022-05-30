import { GlobalStyles } from "../styles/globals";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";

//Global styles holds CSS for HTML and Body , Layout is the Navbar, Main Content and Navbar
function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <AnimatePresence>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
