import { Image } from '../../Image/Image'

export const CardImage = ({ image, buttonText, size = "60" }) => {
  return (
    <div className="p-5 bg-gray-300 rounded">
      <div className={`flex flex-col justify-center items-center gap-5 h-${size} w-${size}`}>
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
