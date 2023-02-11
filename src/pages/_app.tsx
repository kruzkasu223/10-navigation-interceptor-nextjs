import { type AppType } from "next/dist/shared/lib/utils"
import Head from "next/head"
import { Header } from "../components"
import "../styles/globals.css"

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>10/27 - Navigation Interceptor Next.js</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center">
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
