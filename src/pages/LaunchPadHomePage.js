import { Banner } from "../components/Banner/Banner"
import { CardImage } from "../components/Cards/CardImage/CardImage"
import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"

export const LaunchPadHomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <div className="flex flex-wrap gap-5 items-center justify-center my-10">
        <CardImage image="https://i.redd.it/qggwem5ziws31.jpg" size={60} />
        <CardImage image="https://i.redd.it/qggwem5ziws31.jpg" size={60} />
        <CardImage image="https://i.redd.it/qggwem5ziws31.jpg" size={60} />
      </div>
      <Footer />
    </>
  )
}
