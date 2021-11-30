import "react-multi-carousel/lib/styles.css";
import { Carousel } from "../components/Carousel/Carousel";

const pattern = require('../assets/patterns/Pattern.png').default;
const launchpad = require('../assets/images/Launchpad_Rocket.png').default;
const scratchies = require('../assets/images/Scratchies Coupon.png').default;
const createAndManage = require('../assets/images/Control.png').default;
const coinCreation = require('../assets/images/Coin machine.png').default;
const coinMakerRobot = require('../assets/images/Coon Maker Robot.png').default;
const flappyDevs = require('../assets/images/Flappy Devs.png').default;
const kekman = require('../assets/images/Kekman.png').default;
const spaceInvaders = require('../assets/images/Space Invaders.png').default;

export const HomePage = () => {
  return (
    <div className="box-border">
      <Carousel />
      <div className="relative h-11/12">
        <img src={pattern} className="pattern-1 w-full max-w-full" alt="pattern" />
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-full py-10 bg-red">
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
            <div className="mx-auto w-full">
              <h1 className="text-center text-blue-1 text-4xl">Arcade</h1>
              <div className="flex justify-between flex-wrap mt-10 text-white">
                <div className="cursor-pointer transition duration-300 border border-pink relative h-40 w-72 bg-center bg-contain bg-no-repeat rounded-3xl overflow-hidden transform hover:scale-105"
                  style={{
                    backgroundImage: `url("${flappyDevs}")`
                  }}
                >
                  <div className="z-10 absolute bottom-0 w-full h-12 blur transition duration-300 rounded-3xl bg-blue-3" />
                  <label className="z-20 absolute bottom-2.5 text-center w-full">Flappy Devs</label>
                </div>
                <div className="cursor-pointer transition duration-300 border border-pink relative h-40 w-72 bg-center bg-contain bg-no-repeat rounded-3xl overflow-hidden transform hover:scale-105"
                  style={{
                    backgroundImage: `url("${kekman}")`
                  }}
                >
                  <div className="z-10 absolute bottom-0 w-full h-12 blur transition duration-300 rounded-3xl bg-blue-3" />
                  <label className="z-20 absolute bottom-2.5 text-center w-full">Kekman</label>
                </div>
                <div className="cursor-pointer transition duration-300 border border-pink relative h-40 w-72 bg-center bg-contain bg-no-repeat rounded-3xl overflow-hidden transform hover:scale-105"
                  style={{
                    backgroundImage: `url("${spaceInvaders}")`
                  }}
                >
                  <div className="z-10 absolute bottom-0 w-full h-12 blur transition duration-300 rounded-3xl bg-blue-3" />
                  <label className="z-20 absolute bottom-2.5 text-center w-full">Personal Space Invaders</label>
                </div>
              </div>
            </div>
            <div className="flex">
              hola
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
