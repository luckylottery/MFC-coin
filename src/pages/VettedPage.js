import { UpcomingPools } from "../components/Vetted/UpcomingPools/UpcomingPools"
import { VettedHeader } from "../components/Vetted/VettedHeader/VettedHeader"

export const VettedPage = () => {
  return (
    <div className="w-11/12 mx-auto my-10 bg-red-500">
      <VettedHeader />
      <UpcomingPools />
    </div>
  )
}
