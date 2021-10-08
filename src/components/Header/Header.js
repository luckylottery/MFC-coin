import { Link } from "react-router-dom"
import { Image } from "../Image/Image"

export const Header = () => {
  return (
    <header className="flex items-center px-5 py-2 gap-5 md:w-5/6 mx-auto">
      <Link to="/home">
        <Image
          src="/assets/Logo Square BG White-01.png"
          className="rounded-full h-16 w-16 lg:h-20 xl:w-24 xl:h-24"
        />
      </Link>
      <Image
        src="https://www.publicdomainpictures.net/pictures/150000/velka/banner-header-tapete-1450520058Odj.jpg"
        className="w-full h-20 rounded"
      />
    </header>
  )
}
