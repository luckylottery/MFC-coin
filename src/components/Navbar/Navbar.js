import { AiFillFacebook, AiFillTwitterSquare, AiOutlineInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { BiHelpCircle } from "react-icons/bi";
import { Image } from "../Image/Image";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-blue-500 w-full py-2 px-10">
      <div className="flex items-center gap-3">
        <Image
          src="/assets/Logo Square BG White-01.png"
          className="self-center rounded-full h-12 w-12"
        />
        <BiHelpCircle className="cursor-pointer text-3xl text-blue-100" />
      </div>
      <div className="flex text-4xl gap-5 text-blue-100">
        <AiFillFacebook className="cursor-pointer" />
        <AiFillTwitterSquare className="cursor-pointer" />
        <FaDiscord className="cursor-pointer" />
        <AiOutlineInstagram className="cursor-pointer" />
      </div>
      <div className="flex gap-5 items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/Logo Square BG White-01.png"
            className="self-center rounded h-7 w-7"
          />
          <label className="text-xs text-white font-bold">$14.55</label>
        </div>
        <div className="flex gap-2 items-center">
          <button className="bg-blue-900 p-1 rounded-full text-white font-bold">Connect Wallet</button>
          <label>Mr. Kevin</label>
          <button className="bg-blue-900 px-3 py-1 rounded-full text-white font-bold">BUY</button>
        </div>
      </div>
    </div>
  )
}
