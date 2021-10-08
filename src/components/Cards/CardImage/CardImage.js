import { Image } from '../../Image/Image'

export const CardImage = ({ image, buttonText }) => {
  return (
    <div className="p-5 bg-gray-300 rounded">
      <div className="flex flex-col justify-center items-center gap-5 h-60 w-60">
        <Image
          src={image}
          className="h-full w-full"
        />
        {
          buttonText && (
            <button className="bg-gray-500 py-1 px-5 rounded">{buttonText}</button>
          )
        }
      </div>
    </div>
  )
}
