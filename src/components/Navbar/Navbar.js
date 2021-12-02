import { Drawer } from "../Drawer/Drawer";
import { Button } from "../Button/Button";

const MCFIcon = require('../../assets/Icons/LOGO MF_ICON.png').default;
const Avatar = require('../../assets/Icons/Avatar.png').default;
const HeaderBelt = require('../../assets/Icons/Header_Belt.png').default;
const Arrow = require('../../assets/Icons/Arrow down.png').default;


export const Navbar = () => {
  return (
    <>
      <div className="text-blue-1 my-2.5 flex justify-between items-center w-full py-2 px-2 lg:px-10">
        <div className="flex items-center gap-3">
          <Drawer />
          <Button
            color="blue"
            text="Buy"
            imageSRC={MCFIcon}
          />
          <label className="font-bold">$14.55</label>
        </div>
        <div className="flex gap-5 items-center">
          <button>Help</button>
          <Button
            color="red"
            text="Connect Wallet"
          />
          <div className="flex gap-2 items-center">
            <div
              className="h-10 w-10 bg-no-repeat bg-contain bg-center"
              style={{ backgroundImage: `url("${Avatar}")` }}
            />
            <div className="flex items-center gap-2.5">
              Verr Golden
              <div
                className="h-3 w-3 bg-no-repeat bg-contain bg-center transform rotate-180"
                style={{ backgroundImage: `url("${Arrow}")` }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-5 w-full bg-contain bg-center"
        style={{ backgroundImage: `url("${HeaderBelt}")` }}
      />
    </>
  )
}
