import { Disclaimer } from "../components/Disclaimer/Disclaimer"
import { Image } from "../components/Image/Image"

export const TokenContributionPage = () => {
  return (
    <>
      <Image
        src="https://static.vecteezy.com/system/resources/previews/003/321/399/original/axie-infinity-axs-token-symbol-with-crypto-currency-themed-banner-vector.jpg"
        className="mb-10 w-full h-96"
      />
      <div className="w-3/5 mx-auto">
        <Disclaimer />
        <Image
          src="https://static.vecteezy.com/system/resources/previews/003/321/399/original/axie-infinity-axs-token-symbol-with-crypto-currency-themed-banner-vector.jpg"
          className="mb-10 w-full h-72"
        />
      </div>
    </>
  )
}
