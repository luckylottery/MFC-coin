import { CardImage } from "../components/Cards/CardImage/CardImage"
import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"

export const TokenCreationPage = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <div className="flex justify-between items-center gap-10 flex-col mx-auto w-9/12 md:flex-row lg:w-1/2">
        <CardImage
          buttonText="Create your Own"
          image="https://i.redd.it/qggwem5ziws31.jpg"
          size={60}
        />
        <CardImage
          buttonText="Get Help"
          image="https://i.redd.it/qggwem5ziws31.jpg"
          size={60}
        />
      </div>
      <Footer />
    </div>
  )
}
