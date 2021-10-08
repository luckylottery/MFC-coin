import RMCarousel from "react-multi-carousel";
import { Image } from "../Image/Image";

export const Banner = () => {

  const responsive = {
    level: {
      breakpoint: { max: 5000, min: 0 },
      items: 1
    }
  }

  return (
    <RMCarousel
      responsive={responsive}
      arrows={true}
      infinite={true}
    >
      <Image
        src="https://img.freepik.com/vector-gratis/banner-negro-formas-geometricas-amarillas_1017-32327.jpg?size=626&ext=jpg"
        className="w-screen h-40"
      />
    </RMCarousel>
  )
}
