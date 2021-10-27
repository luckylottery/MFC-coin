import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"
import { Image } from "../components/Image/Image"
import { TokenSection } from "../components/TokenPage/TokenSection/TokenSection"

export const TokenCreationPage = () => {
  return (
    <>
      <Header />
      <Image
        src="https://static.vecteezy.com/system/resources/previews/003/321/399/original/axie-infinity-axs-token-symbol-with-crypto-currency-themed-banner-vector.jpg"
        className="my-10 w-full h-96"
      />
      <TokenSection />
      <Footer />
    </>
  )
}
