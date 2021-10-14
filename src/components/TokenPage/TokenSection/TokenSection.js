import { Image } from "../../Image/Image"

export const TokenSection = () => {
  return (
    <div className="flex flex-wrap flex-col justify-center gap-10 my-10 mx-auto w-11/12 md:flex-row lg:w-9/12">
      <div className="flex justify-center items-center flex-1 bg-blue-300">
        <div className="flex flex-col gap-5 w-full h-full flex-1 p-5 sm:py-2">
          <div className="flex flex-col h-72 justify-center gap-5 lg:flex-row">
            <Image
              src="https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjAtMTAvMmFhYWVmMjctYTQ2ZC00MzM5LWI1MzMtMzlkYzRhYTFiN2FkLmpwZw==.jpg"
              className="flex-1"
            />
            <div className="flex flex-col lg:flex-1 gap-2">
              <label>Lorem: <span className="font-bold">lorem lorem lorem lorem lorem lorem</span></label>
              <label>Lorem: <span className="font-bold">lorem lorem lorem lorem lorem lorem</span></label>
              <label>Lorem: <span className="font-bold">lorem lorem lorem lorem lorem lorem</span></label>
            </div>
          </div>
          <button className="flex-1 self-center bg-gray-500 py-1 px-10 rounded">
            Contribute
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center flex-1 bg-blue-300 p-5 gap-10">
        <div className="flex flex-col w-full gap-5">
          <Image
            src="https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjAtMTAvMmFhYWVmMjctYTQ2ZC00MzM5LWI1MzMtMzlkYzRhYTFiN2FkLmpwZw==.jpg"
            className="h-32 w-full"
          />
          <div className="bg-gray-300 w-full h-8">
            <div className="bg-gray-700 h-full w-1/2 "/>
          </div>
        </div>
        <div className="flex justify-center items-center h-24 w-full bg-blue-500 font-bold text-xl">
          Ongoing Sale info HC/SC
        </div>
      </div>
    </div>
  )
}
