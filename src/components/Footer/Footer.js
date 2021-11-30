import { AiFillFacebook, AiFillTwitterSquare, AiOutlineInstagram } from "react-icons/ai"
import { FaDiscord } from "react-icons/fa"
import { Image } from "../Image/Image"

const belt = require('../../assets/images/Belt.png').default;

export const Footer = () => {
  return (
    <footer className="w-full bg-blue-3 box-content text-white mt-10">
      <div
        className="relative w-full h-7 bg-contain"
        style={{
          backgroundImage: `url("${belt}")`
        }}
      >
        
      </div>
      <div className="flex flex-col sm:flex-row gap-10 p-10">
        <div>
          <Image
            src="/assets/Logo Square BG White-01.png"
            className="rounded h-16 w-16 "
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-wrap gap-4 font-black">
            <p>Link</p>
            <p>Link</p>
            <p>Link</p>
            <p>Link</p>
            <p>Link</p>
          </div>
          <p className="text-sm my-5">Fusce molestie congue nibh, eu aliquet eros auctor quis. Etiam at leo nec enim ullamcorper suscipit. Donec vitae nibh venenatis, efficitur est elementum, pretium velit. Nunc congue blandit est, vitae semper dolor rutrum quis. Aliquam porta imperdiet lacinia. Sed ornare scelerisque fringilla. Duis quis sem lacus.</p>
          <div className="flex flex-col md:flex-row text-3xl gap-5 text-blue-100 flex-1">
            <div className="flex gap-5">
              <AiFillFacebook className="cursor-pointer" />
              <AiFillTwitterSquare className="cursor-pointer" />
              <FaDiscord className="cursor-pointer" />
              <AiOutlineInstagram className="cursor-pointer" />
            </div>
            <div className="flex gap-2.5 font-bold md:ml-20 text-xl">
              <p>LINK</p> /
              <p>LINK</p> /
              <p>LINK</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
