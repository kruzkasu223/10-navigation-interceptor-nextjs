import Link from "next/link"
import { useRouter } from "next/router"

const ROUTES = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "FORM",
    path: "/form",
  },
  {
    name: "ABOUT",
    path: "/about",
  },
]

export const Header = () => {
  const router = useRouter()
  const routeName = ROUTES.find((route) => route.path === router.route)?.name

  return (
    <>
      <div className="navbar bg-primary p-4">
        <div className="navbar-start">
          <Link href="/" className="btn-ghost btn text-xl font-extrabold">
            10/27 - Navigation Interceptor Next.js
          </Link>
        </div>
        <div className="navbar-center">
          <h1 className="text-2xl font-extrabold uppercase">
            {routeName ? routeName : ""} Page
          </h1>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal gap-6 px-1">
            {ROUTES.map((route) => (
              <li key={route.name}>
                <Link
                  className={`btn-outline btn ${
                    route.path === router.route ? "btn-active" : ""
                  }`}
                  href={route.path}
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
