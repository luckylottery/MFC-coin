import { AiFillFacebook, AiFillTwitterSquare, AiOutlineInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { BiHelpCircle } from "react-icons/bi";
import { Image } from "../Image/Image";
import { Drawer } from "../Drawer/Drawer";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-blue-500 w-full py-2 px-2 lg:px-10">
      <div className="flex items-center gap-3 flex-1">
        <Drawer />
        <Image
          src="/assets/Logo Square BG White-01.png"
          className="self-center rounded-full h-12 w-12"
        />
        <BiHelpCircle className="cursor-pointer text-3xl text-blue-100" />
      </div>
      <div className="hidden sm:flex text-4xl gap-5 text-blue-100 flex-1">
        <AiFillFacebook className="cursor-pointer" />
        <AiFillTwitterSquare className="cursor-pointer" />
        <FaDiscord className="cursor-pointer" />
        <AiOutlineInstagram className="cursor-pointer" />
      </div>
      <div className="flex gap-5 items-center">
        <div className="hidden md:flex items-center gap-2">
        <button className="hidden lg:block border-2 px-3 py-1 rounded text-white font-bold">BUY</button>
          <Image
            src="/assets/Logo Square BG White-01.png"
            className="self-center rounded h-7 w-7"
          />
          <label className="text-xs text-white font-bold">$14.55</label>
        </div>
        <div className="flex gap-2 items-center">
          <button className="bg-blue-900 p-2 lg:py-1 lg:px-2 rounded-full text-white font-bold">Connect Wallet</button>
          <label className="hidden font-bold text-white lg:block">Mr. Kevin</label>
        </div>
      </div>
    </div>
  )
}
