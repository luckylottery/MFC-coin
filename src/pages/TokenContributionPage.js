import { useForm } from "react-hook-form"
import { Disclaimer } from "../components/Disclaimer/Disclaimer"
import { Image } from "../components/Image/Image"

export const TokenContributionPage = () => {

  const { register } = useForm();

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
      <div className="w-3/5 mx-auto my-10 py-10 flex flex-col items-center gap-5 bg-gray-300">
        <input
        className="py-1.5 px-2.5 outline-none"
          type="number"
          placeholder="Amount"
          {...register("amountValue")}
          />
          <button className="bg-gray-500 rounded py-1.5 px-3">Contribute</button>
      </div>
    </>
  )
}
