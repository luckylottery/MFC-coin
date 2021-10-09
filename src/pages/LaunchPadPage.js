import { Drawer } from "../components/Drawer/Drawer"
import { Header } from "../components/Header/Header"
import { LaunchpadContent } from "../components/LaunchpadContent/LaunchpadContent"
import { SearchUtility } from "../components/SearchUtility/SearchUtility"

export const LaunchPadPage = () => {
  return (
    <>
      <Header />
      <Drawer />
      <div className="flex gap-10 mx-auto mt-10 w-full md:w-11/12">
        <SearchUtility />
        <LaunchpadContent />
      </div>
    </>
  )
}
