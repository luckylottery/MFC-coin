import { Header } from "../components/Header/Header"

export const LiquidityLockPage = () => {
  return (
    <>
      <Header />
      <div className="mx-auto my-10 flex flex-col gap-7 w-10/12">
        <div className="flex items-center justify-center w-full h-60 bg-blue-300 rounded">
          <label>For how long</label>
        </div>
        <div className="flex items-center justify-center w-full h-60 bg-blue-300 rounded">
          <label>For how long</label>
        </div>
      </div>
      <div className="mx-auto my-10 flex flex-col gap-7 w-64">
        <label className="bg-red-500 text-center rounded py-2">Withdraw Tokens</label>
        <label className="bg-red-500 text-center rounded py-2">Fees</label>
        <label className="bg-red-500 text-center rounded py-2">Lock</label>
      </div>
    </>
  )
}
