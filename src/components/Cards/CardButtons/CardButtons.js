export const CardButtons = ({ buttons = [] }) => {
  return (
    <div className="p-5 bg-gray-300 rounded">
      <div className="flex flex-wrap justify-center items-center gap-5 h-60 w-60">
        {
          buttons.map(button => (
            <button key={button} className="bg-gray-500 h-24 w-24 rounded font-bold">{button}</button>
          ))
        }
      </div>
    </div>
  )
}
