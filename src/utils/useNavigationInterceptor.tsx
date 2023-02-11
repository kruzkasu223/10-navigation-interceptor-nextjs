import { useRouter } from "next/router"
import { useEffect } from "react"

export const useNavigationInterceptor = (
  isEnabled = false,
  warningText = "are you sure you wish to leave this page?"
) => {
  const router = useRouter()

  useEffect(() => {
    const handleWindowClose = (e: BeforeUnloadEvent) => {
      if (!isEnabled) return
      e.preventDefault()
      return (e.returnValue = warningText)
    }

    const handleBrowseAway = () => {
      if (!isEnabled) return
      if (window.confirm(warningText)) return
      router.events.emit("routeChangeError")
      if (router.asPath !== window.location.pathname) {
        window.history.pushState("", "", router.asPath)
      }
      throw "route change aborted"
    }

    window.addEventListener("beforeunload", handleWindowClose)
    router.events.on("routeChangeStart", handleBrowseAway)

    return () => {
      window.removeEventListener("beforeunload", handleWindowClose)
      router.events.off("routeChangeStart", handleBrowseAway)
    }
  }, [isEnabled, router.asPath, router.events, warningText])
}
