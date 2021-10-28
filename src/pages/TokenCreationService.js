import { FormInput } from "../components/FormInput/FormInput"
import { Header } from "../components/Header/Header"
import { Image } from "../components/Image/Image"

export const TokenCreationService = () => {
  return (
    <>
      <Header />
      <div className="w-9/12 h-60 bg-red-500 my-10 mx-auto rounded" />
      <div className="w-9/12 mx-auto">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac sollicitudin eros. Pellentesque vulputate, lectus eget cursus finibus, ex urna bibendum ex, at accumsan nisl ligula eget massa.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac sollicitudin eros. Pellentesque vulputate, lectus eget cursus finibus, ex urna bibendum ex, at accumsan nisl ligula eget massa.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac sollicitudin eros. Pellentesque vulputate, lectus eget cursus finibus, ex urna bibendum ex, at accumsan nisl ligula eget massa.</p>

        <form className="flex flex-col gap-5 my-5 p-2.5 bg-blue-300">
          <FormInput placeholder="Form Input" />
          <FormInput placeholder="Form Input" />
          <FormInput type="textarea" placeholder="Form Input" />
          <FormInput placeholder="Form Input" />
          <FormInput placeholder="Form Input" />
          <FormInput type="textarea" placeholder="Form Input" />
          <button className="bg-red-500 w-60 py-2 rounded self-center">
            CONFIRM
          </button>
        </form>
        <Image
          className="w-full h-60 mb-10"
          src="https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-simple-gradient-technology-banner-background-material-backgroundsimplegeneral-backgroundtechnology-background-image_85451.jpg"
        />
      </div>
    </>
  )
}
