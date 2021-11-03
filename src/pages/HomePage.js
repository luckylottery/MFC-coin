import "react-multi-carousel/lib/styles.css";
import { Carousel } from "../components/Carousel/Carousel";
import { Image } from "../components/Image/Image";

export const HomePage = () => {
  return (
    <div className="box-border">
      <Carousel />
      <main className="grid md:grid-cols-2 mx-auto w-11/12 gap-10 mb-10">
        <Image
          src="https://st.depositphotos.com/1006318/51653/v/600/depositphotos_516539424-stock-illustration-industrial-factory-bitcoin-mining-conveyor.jpg"
          className="h-60 rounded"
        />
        <Image
          src="https://public.bnbstatic.com/image/cms/blog/20210708/4386c9d0-6857-48c2-a502-01998860922f.png"
          className="h-60 rounded"
        />
        <Image
          src="https://cdn.statically.io/img/learn2.trade/f=auto%2Cq=10/wp-content/uploads/2020/02/4051b3e06c53d1bbaec47213c5a1ba23741d7195f5542d7b8a2460c2f84c6a07.jpeg"
          className="h-60 rounded"
        />
        <Image
          src="https://www.nerdynaut.com/wp-content/uploads/2021/03/Crypto-Casinos-on-the-Rise-With-3x-in-2020-950x500.png"
          className="h-60 rounded"
        />
        <Image
          src="https://media.coolwallet.io/wp-content/uploads/2021/02/staking-2.png"
          className="h-60 rounded"
        />
      </main>
    </div>
  )
}
