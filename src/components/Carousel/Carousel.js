import RMCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Carousel = () => {
  const responsive = {    
    level1: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    },
    level2: {
      breakpoint: { max: 768, min: 464 },
      items: 2
    },
    level3: {
      breakpoint: { max: 1024, min: 768 },
      items: 3
    },
    level4: {
      breakpoint: { max: 1200, min: 1024 },
      items: 4
    },
    level5: {
      breakpoint: { max: 4000, min: 1200 },
      items: 5
    },
  };

  return (
    <div className="w-full border-b-2 border-t-2 px-5 my-5">
      <RMCarousel
        responsive={responsive}
        autoPlay={true}
        arrows={false}
        infinite={true}
      >
        <div className="text-center">Memecoin: <span>10.51 USD</span></div>
        <div className="text-center">Memecoin: <span>10.51 USD</span></div>
        <div className="text-center">Memecoin: <span>10.51 USD</span></div>
        <div className="text-center">Memecoin: <span>10.51 USD</span></div>
        <div className="text-center">Memecoin: <span>10.51 USD</span></div>
        <div className="text-center">Memecoin: <span>10.51 USD</span></div>
        <div className="text-center">Memecoin: <span>10.51 USD</span></div>
        <div className="text-center">Memecoin: <span>10.51 USD</span></div>
        <div className="text-center">Memecoin: <span>10.51 USD</span></div>
        <div className="text-center">Memecoin: <span>10.51 USD</span></div>
        <div className="text-center">Memecoin: <span>10.51 USD</span></div>
      </RMCarousel>
    </div>
  )
}
