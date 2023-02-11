import { type NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center">
        <h1 className="m-8 text-4xl font-extrabold tracking-tight">
          10/27 - Navigation Interceptor Next.js
        </h1>
      </main>
    </>
  )
}

export default Home
