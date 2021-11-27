import RMCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "../Image/Image";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export const Carousel = () => {
  return (
    <RMCarousel
      responsive={responsive}
      autoPlay={true}
      arrows={true}
      infinite={true}
      className="mx-auto my-10 w-full md:w-11/12 text-center bg-red h-72 rounded z-0"
    >
      <Image
        src="https://i2.wp.com/criptotendencia.com/wp-content/uploads/2019/09/Gods-Unchained-Crypto-Game.jpg?fit=1200%2C630&ssl=1"
        className="w-11/12 h-72 mx-auto"
      />
      <Image
        src="https://www.esports.net/wp-content/uploads/2021/08/Crypto-Pop.jpg"
        className="w-11/12 h-72 mx-auto"
      />
      <Image
        src="https://www.crypto-news-flash.com/wp-content/uploads/2020/01/cover_cryptogames.jpg"
        className="w-11/12 h-72 mx-auto"
      />
      <Image
        src="https://i2.wp.com/criptotendencia.com/wp-content/uploads/2019/09/Gods-Unchained-Crypto-Game.jpg?fit=1200%2C630&ssl=1"
        className="w-11/12 h-72 mx-auto"
      />
      <Image
        src="https://www.esports.net/wp-content/uploads/2021/08/Crypto-Pop.jpg"
        className="w-11/12 h-72 mx-auto"
      />
      <Image
        src="https://www.crypto-news-flash.com/wp-content/uploads/2020/01/cover_cryptogames.jpg"
        className="w-11/12 h-72 mx-auto"
      />
      <Image
        src="https://i2.wp.com/criptotendencia.com/wp-content/uploads/2019/09/Gods-Unchained-Crypto-Game.jpg?fit=1200%2C630&ssl=1"
        className="w-11/12 h-72 mx-auto"
      />
      <Image
        src="https://www.esports.net/wp-content/uploads/2021/08/Crypto-Pop.jpg"
        className="w-11/12 h-72 mx-auto"
      />
      <Image
        src="https://www.crypto-news-flash.com/wp-content/uploads/2020/01/cover_cryptogames.jpg"
        className="w-11/12 h-72 mx-auto"
      />
    </RMCarousel>
  )
}
