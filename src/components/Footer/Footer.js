import { AiFillFacebook, AiFillTwitterSquare, AiOutlineInstagram } from "react-icons/ai"
import { FaDiscord } from "react-icons/fa"
import { Image } from "../Image/Image"

const belt = require('../../assets/images/Belt.png').default;
const blueBlox = require('../../assets/images/boxes/box blue.png').default;
const originalBox = require('../../assets/images/boxes/box original.png').default;
const redBox = require('../../assets/images/boxes/box red.png').default;
const yellowBox = require('../../assets/images/boxes/box yellow.png').default;
const greenBox = require('../../assets/images/boxes/box green.png').default;

export const Footer = () => {
  return (
    <footer className="w-full bg-blue-3 box-content text-white mt-10">
      <div
        className="relative w-full h-7 bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url("${belt}")`
        }}
      >
        <div className="absolute w-full flex justify-evenly -top-10">
          <div
            className="w-10 h-10 bg-cover rounded-t"
            style={{
              backgroundImage: `url("${redBox}")`
            }}
          />
          <div
            className="w-10 h-10 bg-cover rounded-t"
            style={{
              backgroundImage: `url("${blueBlox}")`
            }}
          />
          <div
            className="w-10 h-10 bg-cover rounded-t"
            style={{
              backgroundImage: `url("${originalBox}")`
            }}
          />
          <div
            className="w-10 h-10 bg-cover rounded-t"
            style={{
              backgroundImage: `url("${yellowBox}")`
            }}
          />
          <div
            className="w-10 h-10 bg-cover rounded-t"
            style={{
              backgroundImage: `url("${greenBox}")`
            }}
          />
          <div
            className="w-10 h-10 bg-cover rounded-t hidden sm:block"
            style={{
              backgroundImage: `url("${redBox}")`
            }}
          />
          <div
            className="w-10 h-10 bg-cover rounded-t hidden sm:block"
            style={{
              backgroundImage: `url("${yellowBox}")`
            }}
          />
        </div>
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
