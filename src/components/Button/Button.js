export const Button = ({ color, text }) => {
  return (
    <button className={`${color === "red" ?
        "border-red bg-pink text-red hover:bg-red" :
        "border-blue-1 text-blue-1 hover:bg-blue-1"
      } border border-b-4 rounded-xl px-5 py-2.5 font-bold mx-auto transition duration-300 hover:text-white`}
    >
      {text}
    </button>
  );
}
