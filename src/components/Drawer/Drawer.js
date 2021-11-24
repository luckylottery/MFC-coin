import { useState } from "react"
import { GrMenu } from "react-icons/gr";
import { routes } from "../../routes";
import { Image } from "../Image/Image";

export const Drawer = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <GrMenu
        className="text-3xl font-bold lg:hidden"
        onClick={() => setIsOpen(true)}
      />
      <div className={`${isOpen ? "w-screen h-screen" : "w-0 h-0"} fixed transition top-0 left-0 z-0 drawer-container z-10 lg:hidden`}>
        <div className={`${isOpen ? "w-11/12 sm:w-1/2 p-5 bg-red-300" : "w-0"} fixed duration-300 top-0 left-0 h-full bg-white`}>
          <div className={`${isOpen ? "flex" : "hidden"} flex-col justify-start gap-5 h-full`}>
            <div className="flex justify-between items-center">
              <Image
                src="/assets/Logo Square BG White-01.png"
                className="h-20 w-20 rounded"
              />
              <button
                className="text-xl bg-gray-300 rounded p-2 font-bold"
                onClick={() => setIsOpen(false)}
              >
                CLOSE
              </button>
            </div>
            <nav className="flex flex-col text-2xl">
              {/* {
                routes.map(({ link, name, children, icon: Icon }) => (
                  <div
                    key={`${link}_drawer`}
                    className={`${isOpen ? "py-3 hover:bg-blue-100" : "py-1"} flex flex-col px-5 transition-all	duration-700 cursor-pointer`}
                  >
                    <div className="flex gap-5 items-center">
                      <Icon className="text-3xl" />
                      <h1 className={`${isOpen ? "block" : "hidden"} text-blue-900 font-bold text-2xl`}>{name}</h1>
                    </div>
                    <div className={`${isOpen ? "block" : "hidden"}`}>
                      {
                        children && (
                          <div className="ml-10">
                            {
                              children.map(({ link, name }) => (
                                <h2
                                  key={link}
                                  className="rounded py-1 px-2 transition-all	duration-700 text-xl hover:bg-blue-700 hover:text-white"
                                >
                                  {name}
                                </h2>
                              ))
                            }
                          </div>
                        )
                      }
                    </div>
                  </div>
                ))
              } */}
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
