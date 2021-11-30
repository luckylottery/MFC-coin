import "react-multi-carousel/lib/styles.css";
import { Carousel } from "../components/Carousel/Carousel";

const pattern = require('../assets/patterns/Pattern.png').default;
const launchpad = require('../assets/images/Launchpad_Rocket.png').default;
const scratchies = require('../assets/images/Scratchies Coupon.png').default;
const createAndManage = require('../assets/images/Control.png').default;
const coinCreation = require('../assets/images/Coin machine.png').default;
const coinMakerRobot = require('../assets/images/Coon Maker Robot.png').default;

export const HomePage = () => {
  return (
    <div className="box-border">
      <Carousel />
      <div className="relative h-11/12">
        <img src={pattern} className="pattern-1 w-full max-w-full" alt="pattern"/>
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-full">
          <div>
            <div className="flex flex-col gap-10 w-10/12 mx-auto font-bold">
              <div className="flex justify-center gap-10">
                <div className="flex w-full gap-5 justify-center items-center bg-white py-5 px-10 border-2 border-blue-4 rounded-3xl">
                  <label className="text-blue-1">Launchpad</label>
                  <div className="h-60 w-72 bg-center bg-contain bg-no-repeat"
                    style={{
                      backgroundImage: `url("${launchpad}")`
                    }}
                  />
                </div>
                <div className="w-full flex gap-5 justify-center items-center bg-white py-5 px-10 border-2 border-blue-4 rounded-3xl">
                  <label className="text-blue-1">Scratchies</label>
                  <div className="h-60 w-72 bg-center bg-contain bg-no-repeat"
                    style={{
                      backgroundImage: `url("${scratchies}")`
                    }}
                  />
                </div>
              </div>
              <div className="flex gap-10">
                <div className="flex w-1/2 flex-col gap-10">
                  <div className="flex gap-5 justify-center items-center bg-white py-5 px-10 border-2 border-blue-4 rounded-3xl">
                    <label className="text-blue-1">Create & Manage</label>
                    <div className="h-48 w-72 bg-center bg-contain bg-no-repeat"
                      style={{
                        backgroundImage: `url("${createAndManage}")`
                      }}
                    />
                  </div>
                  <div className="flex gap-5 justify-center items-center bg-white py-5 px-10 border-2 border-blue-4 rounded-3xl">
                    <label className="text-blue-1">Coin Creation</label>
                    <div className="h-48 w-72 bg-center bg-contain bg-no-repeat"
                      style={{
                        backgroundImage: `url("${coinCreation}")`
                      }}
                    />
                  </div>
                </div>
                <div className="w-1/2 bg-center bg-contain bg-no-repeat"
                  style={{
                    backgroundImage: `url("${coinMakerRobot}")`
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
