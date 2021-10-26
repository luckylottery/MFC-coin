import { Banner } from "../components/Banner/Banner"
import { CardButtons } from "../components/Cards/CardButtons/CardButtons"
import { CardImage } from "../components/Cards/CardImage/CardImage"
import { Carousel } from "../components/Carousel/Carousel"
import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"

export const HomePage = () => {
  return (
    <>
      <Header />
      <div className="my-5">
      <Carousel />
      </div>
      <Banner />
      <div className="flex flex-wrap justify-center gap-10 my-16 max-w-6xl mx-auto">
        <CardButtons buttons={["Launch", "Mint", "Lock"]} />
        <CardImage image="https://i.redd.it/qggwem5ziws31.jpg" buttonText="PLAY NOW" />
        <CardButtons buttons={["Slots", "Poker", "Roulette", "Blackjack"]} />
        <CardImage image="https://i.redd.it/qggwem5ziws31.jpg" buttonText="Get Started" />
        <CardImage image="https://i.redd.it/qggwem5ziws31.jpg" buttonText="Factory Swap DEX" />
        <CardImage image="https://i.redd.it/qggwem5ziws31.jpg" />
      </div>
      <Footer />
    </>
  )
}
