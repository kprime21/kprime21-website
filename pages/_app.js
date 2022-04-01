import { GlobalStyles } from '../styles/globals'
import Layout from '../components/Layout'

//Global styles holds CSS for HTML and Body , Layout is the Navbar, Main Content and Navbar
function MyApp({ Component, pageProps }) {

  return (
    <>
      <GlobalStyles /> 
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp
