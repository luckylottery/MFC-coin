export const Button = ({ color, text }) => {
  return (
    <button className={`${color === "red" ?
        "border-red-600 bg-red-100 text-red-600 hover:bg-red-600" :
        "border-blue-600 bg-blue-100 text-blue-600 hover:bg-blue-600"
      } border border-b-4 rounded-xl px-5 py-2.5 font-bold mx-auto transition duration-300 hover:text-white`}
    >
      {text}
    </button>
  );
}
