import { SessionProvider } from "next-auth/react"
import { GlobalStyles } from "../styles/theme.config"
import Layout from "../components/Layout/Layout"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
