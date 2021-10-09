import { useState } from "react"

export const Drawer = () => {

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`${isOpen ? "w-screen h-screen" : "w-0 h-0"} fixed transition top-0 left-0 z-0 drawer-container`}>
      <div className={`${isOpen ? "w-11/12" : "w-0"} fixed duration-300 top-0 left-0 h-full bg-white`}>
        hola?
      </div>
    </div>
  )
}
