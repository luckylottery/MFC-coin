import { useRef, useState } from "react"
import { Link } from 'react-router-dom';
import { routes } from "../../routes";

const burgerMenuIcon = require('../../assets/Icons/Burger Menu.png').default;
const MCFIcon = require('../../assets/Icons/LOGO MF_ICON.png').default;
const MCFIconText = require('../../assets/Icons/Memefactory Logo L.png').default;

export const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(true);

  const toggleState = () => {
    setIsOpen(!isOpen);
  }

  const collapsableItems = useRef({});

  function toggleCollapsableItems(refName) {
    collapsableItems.current[refName].style.transition = "max-height 0.2s ease-out 0.2s"
    if (!collapsableItems.current[refName].style.maxHeight || collapsableItems.current[refName].style.maxHeight === '0px') {
      collapsableItems.current[refName].style.maxHeight = '100%';
    } else {
      collapsableItems.current[refName].style.maxHeight = "0"
    }
  }

  return (
    <>
      <div
        className={`hidden lg:flex flex-col items-center relative bg-blue-4 h-screen ${isOpen ? "lg:w-3/12 xl:w-2/12" : "w-16"}`} />
      <div
        className={`hidden lg:flex lg:fixed flex-col items-center relative bg-blue-4 shadow-lg h-screen transition-all z-50 ${isOpen ? "lg:w-3/12 xl:w-2/12" : "w-16"}`}>
        <div
          className={`${isOpen ? "block" : "hidden"} absolute -right-11 top-10 p-2.5 rounded cursor-pointer`}
          onClick={toggleState}
        >
          <div
            className="h-14 w-14 bg-no-repeat bg-contain bg-center"
            style={{
              backgroundImage: `url("${burgerMenuIcon}")`
            }}
          />
        </div>
        <div className="pt-5 h-full w-full flex justify-center w-full flex-col gap-10">
          {
            isOpen ? (
              <div className="self-center items-center flex flex-col gap-3">
                <div
                  className="h-20 w-20 bg-no-repeat bg-contain bg-center"
                  style={{ backgroundImage: `url("${MCFIcon}")` }}
                />
                <div
                  className="h-20 w-40 bg-no-repeat bg-contain bg-center"
                  style={{ backgroundImage: `url("${MCFIconText}")` }}
                />
              </div>
            ) : (
              <div
                className="cursor-pointer self-center h-10 w-10 bg-no-repeat bg-contain bg-center"
                style={{
                  backgroundImage: `url("${burgerMenuIcon}")`
                }}
                onClick={toggleState}
              />
            )
          }
          <div className={`${isOpen ? "" : "justify-center gap-10"} flex flex-col flex-1`}>
            {
              routes.map(({ link, name, children, icon, collapsable }) => (
                <div
                  key={name}
                  className={`${isOpen ? "py-3" : "py-1"} text-blue-1 flex flex-col px-5 transition-all	duration-700 cursor-pointer`}
                >
                  {
                    !collapsable ? (
                      <Link
                        to={link}
                        className="flex gap-5 items-center"
                      >
                        <div
                          className="h-5 w-5 bg-no-repeat bg-center bg-contain"
                          style={{
                            backgroundImage: `url("${icon}")`
                          }}
                        />
                        <h1 className={`${isOpen ? "block" : "hidden"} text-xl`}>{name}</h1>
                      </Link>
                    ) : (
                      <div
                        className="flex gap-5 items-center"
                        onClick={() => toggleCollapsableItems(name)}
                      >
                        <div
                          className="h-5 w-5 bg-no-repeat bg-center bg-contain"
                          style={{
                            backgroundImage: `url("${icon}")`
                          }}
                        />
                        <h1 className={`${isOpen ? "block" : "hidden"} text-xl`}>{name}</h1>
                      </div>
                    )}
                  {
                    children && (
                      <div
                        className={`${isOpen ? "flex flex-col ml-10" : "hidden"} ${collapsable ? "max-h-0" : "max-h-full"} overflow-hidden h-auto`}
                        ref={collapsable ? ref => collapsableItems.current[name] = ref : null}>
                        {
                          children.map(({ link, name }) => (
                            <Link
                              key={`${link}_child`}
                              to={link}
                              className="rounded py-1 px-2 transition-all	duration-700"
                            >
                              {name}
                            </Link>
                          ))
                        }
                      </div>
                    )
                  }
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
