import { useState } from "react"

export const Drawer = () => {

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-blue-500 z-0">
      hola?
    </div>
  )
}
