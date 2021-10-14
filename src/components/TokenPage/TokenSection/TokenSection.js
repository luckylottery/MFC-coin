import { Image } from "../../Image/Image"

export const TokenSection = () => {
  return (
    <div className="flex flex-wrap flex-col justify-center gap-10 my-10 mx-auto w-11/12 md:flex-row md:h-72 lg:w-9/12">
      <div className="flex justify-center items-center flex-1 bg-blue-300">
        <div className="flex flex-col gap-5 w-full h-full flex-1 p-5 sm:py-2">
          <div className="flex flex-col flex-1 gap-5 sm:flex-row">
            <Image
              src="https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjAtMTAvMmFhYWVmMjctYTQ2ZC00MzM5LWI1MzMtMzlkYzRhYTFiN2FkLmpwZw==.jpg"
              className="h-48 w-full sm:flex-1"
            />
            <div className="flex flex-col flex-1 gap-2">
              <label>Lorem: <span className="font-bold">lorem lorem lorem lorem lorem lorem</span></label>
              <label>Lorem: <span className="font-bold">lorem lorem lorem lorem lorem lorem</span></label>
              <label>Lorem: <span className="font-bold">lorem lorem lorem lorem lorem lorem</span></label>
            </div>
          </div>
          <button className="self-center bg-gray-500 py-1 px-10 rounded">
            Contribute
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center flex-1 bg-blue-300">
        hola
      </div>
    </div>
  )
}
