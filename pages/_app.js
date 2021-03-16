import Layout from '../components/layout/Layout'
import Meta from '../components/Meta'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Meta />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
