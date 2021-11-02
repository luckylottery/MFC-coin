import { GrGamepad, GrHomeRounded, GrLaunch } from "react-icons/gr";
import { MdOutlineCasino } from "react-icons/md";
import { GiFactory, GiFarmTractor } from "react-icons/gi";
import { SiPlotly } from "react-icons/si";

export const routes = [
  {
    link: "/home",
    name: "Home",
    icon: GrHomeRounded,
  },
  {
    link: "/factory",
    name: "Factory",
    icon: GiFactory,
  },
  {
    link: "/launchpad",
    name: "Launchpad",
    icon: GrLaunch,
    children: [
      {
        link: "/dashboard",
        name: "Dashboard",
      },
      {
        link: "/manage",
        name: "Create & Manage",
      }
    ]
  },
  {
    link: "/lottery",
    name: "Lottery",
    icon: SiPlotly,
  },
  {
    link: "/casino",
    name: "Casino",
    icon: MdOutlineCasino,
  },
  {
    link: "/staking",
    name: "Staking/Farming",
    icon: GiFarmTractor
  },
  {
    link: "/arcade",
    name: "Arcade Games",
    icon: GrGamepad
  },
];