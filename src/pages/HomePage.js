import RMCarousel from "react-multi-carousel";
import { Image } from "../components/Image/Image";
import "react-multi-carousel/lib/styles.css";

export const HomePage = () => {
  const responsive = {
    level1: {
      breakpoint: { max: 4000, min: 0 },
      items: 1
    },
  };

  return (
    <div className="box-border">
      <RMCarousel
        responsive={responsive}
        autoPlay={true}
        arrows={false}
        infinite={true}
        className="bg-red-500 mx-auto my-10 w-11/12"
      >
        <div>
          1
        </div>
        <div>
          2
        </div>
        <div>
          3
        </div>
      </RMCarousel>

    </div>
  )
}
