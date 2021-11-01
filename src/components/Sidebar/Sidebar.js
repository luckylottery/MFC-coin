import { useState } from "react"
import { GrHomeRounded, GrMenu } from "react-icons/gr";
import { FaChevronDown } from "react-icons/fa";

const routes = [
  {
    link: "/home",
    name: "Home",
  },
  {
    link: "/factory",
    name: "Home",
  },
  {
    link: "/launchpad",
    name: "Home",
    children: [
      {
        link: "/dashboard",
        name: "dashboard"
      },
      {
        link: "/manage",
        name: "Create & Manage"
      }
    ]
  },
  {
    link: "/lottery",
    name: "Lottery",
  },
  {
    link: "/casino",
    name: "Casino",
  },
  {
    link: "/staking",
    name: "Staking/Farming",
  },
  {
    link: "/arcade",
    name: "Arcade Games",
  },
];

export const Sidebar = () => {

  const [state, setState] = useState(true);

  const toggleState = () => {
    setState(!state);
  }



  return (
    <div className={`flex flex-col items-center relative bg-gray-200 shadow-lg h-screen transition-all ${state ? "w-60" : "w-16"}`}>
      <div
        className={`${state ? "block" : "hidden"} absolute -right-5 top-10 bg-blue-300 p-2.5 rounded cursor-pointer`}
        onClick={toggleState}
      >
        <GrMenu className="text-2xl font-bold" />
      </div>
      <div className="pt-5 h-full w-full flex justify-center w-full flex-col gap-10">
        <GrMenu
          className={`${state ? "hidden" : "block"} text-2xl font-bold cursor-pointer mx-auto`}
          onClick={toggleState}
        />
        <div className="flex flex-col justify-center px-5 flex-1 gap-10">
          {
            routes.map(({ link, name, children }) => (
              <div
                key={link}
                className="flex items-center gap-2"
              >
                <GrHomeRounded className="text-xl" />
                <div className={`${state ? "flex" : "hidden"} items-center flex-col bg-red-300 flex-1 gap-5`}>
                  <h1 className="text-xl">{name}</h1>
                  {
                    children && (
                      <div>holiwi</div>
                    )
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
