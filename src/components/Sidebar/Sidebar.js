import { useState } from "react"
import { GrMenu } from "react-icons/gr";
import { Image } from "../Image/Image";
import { routes } from "../../routes";

export const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(true);

  const toggleState = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className={`hidden lg:flex flex-col items-center relative bg-blue-200 shadow-lg h-screen transition-all z-50 ${isOpen ? "w-60" : "w-16"}`} />
      <div className={`hidden lg:flex lg:fixed flex-col items-center relative bg-blue-200 shadow-lg h-screen transition-all z-50 ${isOpen ? "w-60" : "w-16"}`}>
        <div
          className={`${isOpen ? "block" : "hidden"} absolute -right-5 top-10 bg-blue-300 p-2.5 rounded cursor-pointer`}
          onClick={toggleState}
        >
          <GrMenu className="text-2xl font-bold" />
        </div>
        <div className="pt-5 h-full w-full flex justify-center w-full flex-col gap-10">
          {
            isOpen ? (
              <Image
                src="/assets/Logo Square BG White-01.png"
                className="self-center rounded-full h-16 w-16 lg:h-20 xl:w-24 xl:h-24"
              />
            ) : (
              <GrMenu
                className="font-bold block text-2xl cursor-pointer mx-auto"
                onClick={toggleState}
              />
            )
          }
          <div className={`${isOpen ? "" : "justify-center gap-10"} flex flex-col flex-1`}>
            {
              routes.map(({ link, name, children, icon: Icon }) => (
                <div
                  key={link}
                  className={`${isOpen ? "py-3 hover:bg-blue-100" : "py-1"} flex flex-col px-5 transition-all	duration-700 cursor-pointer`}
                >
                  <div className="flex gap-5 items-center">
                    <Icon className="text-xl" />
                    <h1 className={`${isOpen ? "block" : "hidden"} text-blue-900 font-bold text-xl`}>{name}</h1>
                  </div>
                  <div className={`${isOpen ? "block" : "hidden"}`}>
                    {
                      children && (
                        <div className="ml-10">
                          {
                            children.map(({ link, name }) => (
                              <h2
                                key={link}
                                className="rounded py-1 px-2 transition-all	duration-700 hover:bg-blue-700 hover:text-white"
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
            }
          </div>
        </div>
      </div>
    </>
  )
}
