import { useEffect, useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsChevronLeft } from "react-icons/bs";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { upcomingPools } from "../data/upcomingPools"

export const VettedProjectPage = () => {

  const [vettedProjectData, setVettedProjectData] = useState();
  const { projectId } = useParams();

  useEffect(() => {
    if (projectId) {
      const selectedVettedProject = upcomingPools.find(project => project.projectId === projectId);

      if (selectedVettedProject) {
        setVettedProjectData(selectedVettedProject);
      }
    }
  }, [projectId]);

  console.log(vettedProjectData);

  return (
    <div>
      <div className="bg-gray-900 text-gray-300 py-5">
        <Link to="/vetted" className="flex items-center gap-2.5 text-xl w-11/12 mx-auto hover:text-white">
          <BsChevronLeft />
          <h1>GO BACK TO POOL LIST</h1>
        </Link>
      </div>
      {
        vettedProjectData && (
          <div className="flex flex-col gap-14 mx-auto my-10 w-11/12  lg:w-10/12">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="flex gap-5 mb-5 sm:mb-0 justify-center items-center">
                <img
                  className="h-20 max-w-full"
                  src={vettedProjectData.image}
                />
                <h1 className="text-xl font-bold text-center">{vettedProjectData.name}</h1>
              </div>
              <div className="flex gap-5 text-lg font-bold">
                <label className="rounded-full py-0.5 px-3 bg-gray-700 text-white">{vettedProjectData.chain}</label>
                <label className="rounded-full py-0.5 px-3 bg-yellow-400 text-yellow-700">{vettedProjectData.status}</label>
              </div>
            </div>
            {
              vettedProjectData.disclaimer && (
                <div className="border border-gray-900 rounded p-10 bg-gray-700 text-lg">
                  <h1 className="font-bold text-gray-300">
                    <span className="text-blue-200">ATTENTION: </span>
                    POOL USES BSC ({vettedProjectData.disclaimer.network}) FOR CONVENIENCE
                  </h1>
                  <p className="mt-3 text-base text-gray-200">{vettedProjectData.disclaimer.message}</p>
                </div>
              )
            }
            <div className="flex flex-col md:flex-row gap-10">
              <div className="border border-gray-900 rounded border p-10 bg-gray-700 w-full">
                <h2 className="text-lg font-bold text-gray-300">PROJECT DESCRIPTION</h2>
                <p className="mt-3 text-base text-gray-200">{vettedProjectData.description}</p>
                <div className="flex flex-col lg:flex-row justify-between">
                  <div className="text-gray-200 font-bold mt-3">
                    <label>WEBSITE</label>
                    <a
                      className="flex items-center gap-2.5 text-xl text-blue-400"
                      href={vettedProjectData.website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h5 className="mt-1">
                        GO TO WEBSITE
                      </h5>
                      <BiLinkExternal />
                    </a>
                  </div>
                  <div className="text-gray-200 font-bold mt-3">
                    <label>TOKEN ADDRESS</label>
                    <h5 className="mt-1 text-xl text-blue-400">{vettedProjectData.tokenAddress}</h5>
                  </div>
                </div>
                <button className="border-2 border-gray-300 cursor-not-allowed font-bold text-md text-gray-300 rounded-xl py-2 mt-4 w-full">CONNECT WALLET TO PARTICIPATE</button>
              </div>
              <div className="border border-gray-900 rounded border p-10 bg-gray-700 w-full">
                <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row lg:gap-5 md:gap-0 sm:gap-5">
                  <div className="flex-1 text-gray-200 font-bold mt-3">
                    <label>TOTAL RAISE / HARD CAP</label>
                    <h5 className="mt-1 text-xl text-blue-400">{vettedProjectData.totalRaise}</h5>
                  </div>
                  <div className="flex-1 text-gray-200 font-bold mt-3">
                    <label>SWAP RATE</label>
                    <h5 className="mt-1 text-xl text-blue-400">{vettedProjectData.swapRate}</h5>
                  </div>
                </div>
                <div className="flex-1 text-gray-200 font-bold mt-3">
                  <label>ROUND 1 OPENS</label>
                  <h5 className="mt-1 text-xl text-blue-400">{vettedProjectData.roundOpens}</h5>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row lg:gap-5 md:gap-0 sm:gap-5">
                  <div className="flex-1 text-gray-200 font-bold mt-3">
                    <label>PARTICIPANTS</label>
                    <h5 className="mt-1 text-xl text-blue-400">{vettedProjectData.participants}</h5>
                  </div>
                  <div className="flex-1 text-gray-200 font-bold mt-3">
                    <label>YOU PARTICIPATED WITH</label>
                    <h5 className="mt-1 text-xl text-blue-400">{vettedProjectData.yourParticipation}</h5>
                  </div>
                </div>
                <div className="flex-1 text-gray-200 font-bold mt-3">
                  <label>TOTAL PROGRESS</label>
                  <div className="flex items-center gap-5">
                    <h5 className="mt-1 text-xl text-blue-400">{vettedProjectData.totalProgress ? vettedProjectData.totalProgress.toFixed(1) : "0.0"}%</h5>
                    <div className="flex-1 bg-gray-500 h-3 rounded-full">
                      <div
                        className="bg-blue-400 h-full rounded-full"
                        style={{
                          width: `${vettedProjectData.totalProgress ? vettedProjectData.totalProgress : 0}%`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}
