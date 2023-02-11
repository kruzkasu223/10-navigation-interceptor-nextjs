import { type NextPage } from "next"
import Link from "next/link"

const About: NextPage = () => {
  return (
    <>
      <div className="m-8 text-center text-2xl font-semibold">
        <h1 className="m-2">There&apos;s nothing to see here...</h1>
        <h2>
          Go to{" "}
          <Link href="/form" className="link-primary link">
            Form page
          </Link>
          , and try write something in any of input field
        </h2>
        <h2>
          then try to navigate to other page or try to reload or close the page
        </h2>
        <h2 className="m-2">You&apos;ll see it interrupted by browser 🙂</h2>
      </div>
    </>
  )
}

export default About
