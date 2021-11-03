import RMCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "../Image/Image";

const responsive = {
  level1: {
    breakpoint: { max: 4000, min: 0 },
    items: 1
  },
};

export const Carousel = () => {
  return (
    <RMCarousel
      responsive={responsive}
      autoPlay={true}
      arrows={true}
      infinite={true}
      showDots={true}
      className="mx-auto my-10 w-11/12 h-72 rounded z-0"
    >
      <Image
        src="https://i2.wp.com/criptotendencia.com/wp-content/uploads/2019/09/Gods-Unchained-Crypto-Game.jpg?fit=1200%2C630&ssl=1"
        className="w-full h-72"
      />
      <Image
        src="https://www.esports.net/wp-content/uploads/2021/08/Crypto-Pop.jpg"
        className="w-full h-72"
      />
      <Image
        src="https://www.crypto-news-flash.com/wp-content/uploads/2020/01/cover_cryptogames.jpg"
        className="w-full h-72"
      />
    </RMCarousel>
  )
}
