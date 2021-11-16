export const UpcomingPool = ({ upcomingPoolData }) => {

  const { image, chain, name, status, totalRaise, roundOpens } = upcomingPoolData;

  return (
    <div className="font-bold cursor-pointer bg-indigo-900 rounded-xl w-full p-5 border border-indigo-900 transition duration-300 transform hover:scale-105 hover:border-white">
      <div className="flex justify-between items-center">
        <img
          alt="logo"
          src={image}
          className="h-10 max-w-full"
        />
        <div className="flex gap-2.5">
          <h5 className="uppercase rounded-full bg-gray-100 px-3 text-gray-700">{chain}</h5>
          <h5 className="rounded-full bg-yellow-300 px-3 text-yellow-900">{status}</h5>
        </div>
      </div>
      <h1 className="my-5 text-white text-xl uppercase">{name}</h1>
      <div className="flex flex-col gap-5 ">
        <div>
          <h2 className="text-md">TOTAL RAISE / HARD CAP</h2>
          <h3>{totalRaise}</h3>
        </div>
        <div>

        </div>
      </div>
      

    </div>
  )
}
