import RMCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "../Image/Image";
import aboutmcf from "../../assets/caroussel/aboutmcf.png";
import medium from "../../assets/caroussel/launchpadmedium.png";
import youtube from "../../assets/caroussel/mcfonyoutube.png";
import refer from "../../assets/caroussel/referralmedium.png";
import weekly from "../../assets/caroussel/weeklyyoutube.png";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const Carousel = () => {
  return (
    <div className="overflow-hidden mx-auto my-10 h-72 w-full md:w-11/12 text-center">
      <RMCarousel
        responsive={responsive}
        autoPlay={true}
        arrows={true}
        infinite={true}
        className="rounded z-0 overflow-visible"
      >
        <div className="relative">
          <a href="https://www.memecoinfactory.com/" rel="noreferrer">
            <Image
              src={aboutmcf}
              className="w-11/12 h-40 mx-auto rounded-3xl"
            />
          </a>
          <div className="absolute -bottom-24 text-left px-5 h-20 text-blue-1 w-full">
            <h1 className="font-bold">About Memecoin Factory</h1>
            <p className="text-sm">
              {" "}
              Read the origin story of Memecoin Factory and the people behinds
              it{" "}
            </p>
          </div>
        </div>
        <div className="relative">
          <a
            href="https://medium.com/@memecoinfactory/meme-coin-factory-launchpad-9ea34a886d"
            rel="noreferrer"
          >
            <Image src={medium} className="w-11/12 h-40 mx-auto rounded-3xl" />
          </a>
          <div className="absolute -bottom-24 text-left px-5 h-20 text-blue-1 w-full">
            <h1 className="font-bold">The Meme Launchpad</h1>
            <p className="text-sm">
              {" "}
              The very first utility of Memecoin Factory is going live!
            </p>
          </div>
        </div>
        <div className="relative">
          <a
            href="https://www.youtube.com/watch?v=Re6vMvaYamk&t=9s&ab_channel=Goalorious"
            rel="noreferrer"
          >
            <Image src={youtube} className="w-11/12 h-40 mx-auto rounded-3xl" />
          </a>
          <div className="absolute -bottom-24 text-left px-5 h-20 text-blue-1 w-full">
            <h1 className="font-bold">Reaching Youtube</h1>
            <p className="text-sm">
              {" "}
              The very first utility of Memecoin Factory is going live!
            </p>
          </div>
        </div>
        <div className="relative">
          <a
            href="https://medium.com/@memecoinfactory/memecoin-factory-lareferral-program-3146552a0d75"
            rel="noreferrer"
          >
            <Image src={refer} className="w-11/12 h-40 mx-auto rounded-3xl" />
          </a>
          <div className="absolute -bottom-24 text-left px-5 h-20 text-blue-1 w-full">
            <h1 className="font-bold">Refer The Launchpad</h1>
            <p className="text-sm"> Do this and you will get benefits!</p>
          </div>
        </div>
        <div className="relative">
          <a
            href="https://www.youtube.com/watch?v=pXwm3KwPv5c&t=36s&ab_channel=MemecoinFactory"
            rel="noreferrer"
          >
            <Image src={weekly} className="w-11/12 h-40 mx-auto rounded-3xl" />
          </a>
          <div className="absolute -bottom-24 text-left px-5 h-20 text-blue-1 w-full">
            <h1 className="font-bold">Weekly Prize Draw</h1>
            <p className="text-sm">
              {" "}
              Watch our biggest Prize Draw till this date!
            </p>
          </div>
        </div>
      </RMCarousel>
    </div>
  );
};
