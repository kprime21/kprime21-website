import {GlobalStyles} from '../styles/globals'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <GlobalStyles/>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp
