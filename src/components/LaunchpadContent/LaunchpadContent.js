import { CardImage } from "../Cards/CardImage/CardImage"
import { Footer } from "../Footer/Footer"

export const LaunchpadContent = () => {
  return (
    <div className="md:w-9/12 md:mb-5">
      <div className="flex flex-wrap gap-5 items-center justify-center">
        <CardImage
          image="https://i.redd.it/qggwem5ziws31.jpg"
          buttonText="Details"
        />
        <CardImage
          image="https://i.redd.it/qggwem5ziws31.jpg"
          buttonText="Details"
        />
        <CardImage
          image="https://i.redd.it/qggwem5ziws31.jpg"
          buttonText="Details"
        />
        <CardImage
          image="https://i.redd.it/qggwem5ziws31.jpg"
          buttonText="Details"
        />
        <CardImage
          image="https://i.redd.it/qggwem5ziws31.jpg"
          buttonText="Details"
        />
        <CardImage
          image="https://i.redd.it/qggwem5ziws31.jpg"
          buttonText="Details"
        />
        <CardImage
          image="https://i.redd.it/qggwem5ziws31.jpg"
          buttonText="Details"
        />
        <CardImage
          image="https://i.redd.it/qggwem5ziws31.jpg"
          buttonText="Details"
        />
        <CardImage
          image="https://i.redd.it/qggwem5ziws31.jpg"
          buttonText="Details"
        />
      </div>
      <div className="flex justify-center items-center gap-10 text-center my-5">
        <i className="fas fa-chevron-left text-3xl" />
        <p>1/5</p>
        <i className="fas fa-chevron-right text-3xl" />
      </div>
      <Footer />
    </div>
  )
}
