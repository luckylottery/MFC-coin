import { upcomingPools } from '../../../data/upcomingPools';
import { UpcomingPool } from '../UpcomingPool/UpcomingPool';

export const UpcomingPools = () => {

  return (
    <div>
      <h1 className="text-3xl my-3 font-bold">Upcoming Pools</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center	gap-10">
        {
          upcomingPools.map((upcomingPool) => (
            <UpcomingPool
              key={upcomingPool.name}
              upcomingPoolData={upcomingPool}
            />
          ))
        }
      </div>
    </div>
  )
}
