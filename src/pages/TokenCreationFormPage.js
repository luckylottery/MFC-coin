import { Carousel } from "../components/Carousel/Carousel"
import { FormInput } from "../components/FormInput/FormInput"
import { Header } from "../components/Header/Header"
import { Image } from "../components/Image/Image"

export const TokenCreationFormPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col my-10 box-content	overflow-hidden items-center gap-5 md:flex-row md:gap-0">
        <div className="px-5 flex gap-12 md:border-t-2 md:border-b-2">
          <button className="px-5 bg-gray-100">
            Home
          </button>
          <button className="px-5 bg-gray-100">
            Help
          </button>
        </div>
        <Carousel />
      </div>
      <div className="flex flex-col mx-auto gap-10 w-11/12 my-5 items-center p-2 md:flex-row lg:w-9/12">
        <div className="flex flex-col items-center w-full gap-5 md:w-2/12">
          <Image
            src="https://media.istockphoto.com/vectors/golden-token-vector-id508105588?k=20&m=508105588&s=612x612&w=0&h=k20euhvIOwf6WAZkHV27jpBDX7vQnvUVcYwWBiJl4eY="
            className="h-40 w-40"
          />
          <p className="text-sm">Curabitur eget ornare nunc. Sed sed lectus justo. Nam pellentesque dui in placerat dapibus. Nunc suscipit rutrum eros quis venenatis. Duis accumsan nunc in elit fermentum luctus. Pellentesque nec feugiat arcu. Integer diam metus, scelerisque sit amet dolor in, dapibus convallis urna. Curabitur a dignissim odio. Proin eleifend vulputate nulla a mollis.</p>
        </div>
        <form className="flex flex-col gap-5 w-full md:w-10/12">
          <FormInput type="input" placeholder="Form Input"/>
          <FormInput type="input" placeholder="Form Input"/>
          <FormInput type="textarea" placeholder="Form Input"/>
          <FormInput type="input" placeholder="Form Input"/>
          <FormInput type="input" placeholder="Form Input"/>
          <FormInput type="textarea" placeholder="Form Input"/>
          <button className="mt-10 bg-gray-300 rounded px-2 py-2 w-28  mx-auto">Create</button>
        </form>
      </div>
    </>
  )
}
