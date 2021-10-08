import { Banner } from "../components/Banner/Banner"
import { CardButtons } from "../components/Cards/CardButtons/CardButtons"
import { CardImage } from "../components/Cards/CardImage/CardImage"
import { Carousel } from "../components/Carousel/Carousel"
import { Header } from "../components/Header/Header"
import { Image } from "../components/Image/Image"

export const HomePage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Banner />
      <div className="flex flex-wrap justify-center gap-10 my-5 max-w-6xl mx-auto">
        <CardButtons buttons={["Launch", "Mint", "Lock"]} />
        <CardImage image="http://www.gamengadgets.com/wp-content/uploads/2019/03/lottery.jpg" buttonText="PLAY NOW" />
        <CardButtons buttons={["Slots", "Poker", "Roulette", "Blackjack"]} />
        <CardImage image="http://www.gamengadgets.com/wp-content/uploads/2019/03/lottery.jpg" buttonText="Get Started" />
        <CardImage image="http://www.gamengadgets.com/wp-content/uploads/2019/03/lottery.jpg" buttonText="Factory Swap DEX" />
        <CardImage image="http://www.gamengadgets.com/wp-content/uploads/2019/03/lottery.jpg" />
      </div>
    </>
  )
}
