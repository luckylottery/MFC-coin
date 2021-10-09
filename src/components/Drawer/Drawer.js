import { useState } from "react"
import { Image } from "../Image/Image";

export const Drawer = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="w-full font-bold py-3 text-center bg-gray-500 block md:hidden"
        onClick={() => setIsOpen(true)}
      >
        Open Menu
      </button>
      <div className={`${isOpen ? "w-screen h-screen" : "w-0 h-0"} fixed transition top-0 left-0 z-0 drawer-container`}>
        <div className={`${isOpen ? "w-11/12 p-5" : "w-0"} fixed duration-300 top-0 left-0 h-full bg-white`}>
          <div className={`${isOpen ? "flex" : "hidden"} flex-col justify-start gap-5 h-full`}>
            <div className="flex justify-between items-center">
              <Image
                src="/assets/Logo Square BG White-01.png"
                className="h-20 w-20"
              />
              <button
                className="text-xl bg-gray-300 rounded p-2 font-bold"
                onClick={() => setIsOpen(false)}
              >
                CLOSE
              </button>
            </div>
            <nav className="flex flex-col gap-5 text-2xl">
              <label>KYC</label>
              <label>Network</label>
              <label>HC/SC</label>
              <label>Starting Soon (Next 1 Hour)</label>
              <label>Audit</label>
              <label>Others</label>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
