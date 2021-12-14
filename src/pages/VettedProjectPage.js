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

  return (
    <div className="mt-10 mb-20">
      {
        vettedProjectData && (
          <div className="flex flex-col gap-10 mx-auto w-11/12  lg:w-10/12">
            <div className="bg-gray-900 text-gray-300">
              <Link to="/vetted" className="flex items-center gap-2.5 text-base font-bold w-max py-2.5 px-1.5 bg-blue-3 text-white rounded-sm">
                <BsChevronLeft />
                <h1>GO BACK TO POOL LIST</h1>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="flex gap-5 mb-5 sm:mb-0 justify-center items-center">
                <img
                  className="h-20 max-w-full"
                  alt="logo"
                  src={vettedProjectData.image}
                />
                <h1 className="text-xl font-bold text-center">{vettedProjectData.name}</h1>
              </div>
              <div className="flex gap-5 text-lg font-bold">
                <label className="rounded-coin-form-border py-0.5 px-3 bg-blue-3 text-white">{vettedProjectData.chain}</label>
                <label className="rounded-coin-form-border py-0.5 px-3 bg-blue-1 text-white">{vettedProjectData.status}</label>
              </div>
            </div>
            {
              vettedProjectData.disclaimer && (
                <div className="border-2 border-blue-3 rounded-sm p-10 bg-blue-4 text-lg">
                  <h1 className="font-bold text-blue-3">
                    <span className="text-blue-1">ATTENTION: </span>
                    POOL USES BSC ({vettedProjectData.disclaimer.network}) FOR CONVENIENCE
                  </h1>
                  <p className="mt-3 text-base text-blue-3">{vettedProjectData.disclaimer.message}</p>
                </div>
              )
            }
            <div className="flex flex-col md:flex-row gap-10">
              <div className="border-2 border-blue-3 rounded-sm border-2 p-10 bg-blue-4 w-full">
                <h2 className="text-lg font-bold text-blue-1">PROJECT DESCRIPTION</h2>
                <p className="mt-3 text-base text-blue-3">{vettedProjectData.description}</p>
                <div className="flex flex-col lg:flex-row justify-between">
                  <div className="text-blue-1 font-bold mt-3">
                    <label>WEBSITE</label>
                    <a
                      className="flex items-center gap-2.5 text-xl text-blue-3"
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
                  <div className="text-blue-1 font-bold mt-3">
                    <label>TOKEN ADDRESS</label>
                    <h5 className="mt-1 text-xl text-blue-3">{vettedProjectData.tokenAddress}</h5>
                  </div>
                </div>
                <button className="border-2 text-blue-3 border-blue-3 font-bold text-md rounded-sm py-2 mt-4 w-full">CONNECT WALLET TO PARTICIPATE</button>
              </div>
              <div className="border-blue-3 rounded-sm border-2 p-10 bg-blue-4 w-full">
                <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row lg:gap-5 md:gap-0 sm:gap-5">
                  <div className="flex-1 text-blue-1 font-bold mt-3">
                    <label>TOTAL RAISE / HARD CAP</label>
                    <h5 className="mt-1 text-xl text-blue-3">{vettedProjectData.totalRaise}</h5>
                  </div>
                  <div className="flex-1 text-blue-1 font-bold mt-3">
                    <label>SWAP RATE</label>
                    <h5 className="mt-1 text-xl text-blue-3">{vettedProjectData.swapRate}</h5>
                  </div>
                </div>
                <div className="flex-1 text-blue-1 font-bold mt-3">
                  <label>ROUND 1 OPENS</label>
                  <h5 className="mt-1 text-xl text-blue-3">{vettedProjectData.roundOpens}</h5>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row lg:gap-5 md:gap-0 sm:gap-5">
                  <div className="flex-1 text-blue-1 font-bold mt-3">
                    <label>PARTICIPANTS</label>
                    <h5 className="mt-1 text-xl text-blue-3">{vettedProjectData.participants}</h5>
                  </div>
                  <div className="flex-1 text-blue-1 font-bold mt-3">
                    <label>YOU PARTICIPATED WITH</label>
                    <h5 className="mt-1 text-xl text-blue-3">{vettedProjectData.yourParticipation}</h5>
                  </div>
                </div>
                <div className="flex-1 text-blue-1 font-bold mt-3">
                  <label>TOTAL PROGRESS</label>
                  <div className="flex items-center gap-5">
                    <h5 className="mt-1 text-xl text-blue-3">{vettedProjectData.totalProgress ? vettedProjectData.totalProgress.toFixed(1) : "0.0"}%</h5>
                    <div className="flex-1 bg-blue-2 h-3 rounded-sm">
                      <div
                        className="bg-blue-3 h-full rounded-sm"
                        style={{
                          width: `${vettedProjectData.totalProgress ? vettedProjectData.totalProgress : 0}%`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 text-blue-1 font-bold">
              <div className="flex-1">
                <h1 className="mb-2.5 text-xl text-blue-3">PROJECT INFORMATION</h1>
                <div className="border-t-2 border-b p-2.5 border-blue-3 flex gap-2.5">
                  <h2 className="flex-1">Name</h2>
                  <p className="flex-1 text-blue-3">{vettedProjectData.name}</p>
                </div>
                <div className="border-t border-b p-2.5 border-blue-3 flex gap-2.5">
                  <h2 className="flex-1">Chain</h2>
                  <p className="flex-1 uppercase text-blue-3">{vettedProjectData.chain}</p>
                </div>
                <div className="border-t border-b p-2.5 border-blue-3 flex gap-2.5">
                  <h2 className="flex-1">Website</h2>
                  <a
                    className="flex-1 text-blue-3 cursor-pointer break-all"
                    href={vettedProjectData.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {vettedProjectData.website}
                  </a>
                </div>
                <div className="border-t border-b p-2.5 border-blue-3 flex gap-2.5">
                  <h2 className="flex-1">Socials</h2>
                  <div className="flex-1 flex gap-1.5 text-blue-3">
                    {
                      vettedProjectData.socials.map(({ icon: Icon, link }, index) => (
                        <a
                          href={link}
                          target="_blank" rel="noreferrer"
                        >
                          <Icon key={index}
                            className="h-5 w-5"
                          />
                        </a>
                      ))
                    }
                  </div>
                </div>
                <div className="border-t border-b p-2.5 border-blue-3 flex gap-2.5">
                  <h2 className="flex-1">White Paper</h2>
                  <a
                    className="flex-1 text-blue-3"
                    href={vettedProjectData.whitePaper}
                    target="_blank" rel="noreferrer"
                  >
                    Open White Paper
                  </a>
                </div>
                <div className="border-t border-b-2 p-2.5 border-blue-3 flex gap-2.5">
                  <h2 className="flex-1">Security Audit Report</h2>
                  <p className="flex-1 text-blue-3">{vettedProjectData.securityAuditReport}</p>
                </div>
              </div>
              <div className="flex-1">
                <h1 className="mb-2.5 text-xl text-blue-3">TOKEN INFORMATION</h1>
                <div className="border-t-2 border-b p-2.5 border-blue-3 flex gap-2.5">
                  <h2 className="flex-1">Name</h2>
                  <p className="flex-1 text-blue-3">{vettedProjectData.tokenInformation.name}</p>
                </div>
                <div className="border-t border-b p-2.5 border-blue-3 flex gap-2.5">
                  <h2 className="flex-1">Symbol</h2>
                  <p className="flex-1 text-blue-3">{vettedProjectData.tokenInformation.symbol}</p>
                </div>
                <div className="border-t border-b p-2.5 border-blue-3 flex gap-2.5">
                  <h2 className="flex-1">Decimals</h2>
                  <p className="flex-1 text-blue-3">{vettedProjectData.tokenInformation.decimals}</p>
                </div>
                <div className="border-t border-b p-2.5 border-blue-3 flex gap-2.5">
                  <h2 className="flex-1">Address</h2>
                  <p className="flex-1 text-blue-3">{vettedProjectData.tokenInformation.address}</p>
                </div>
                <div className="border-t border-b-2 p-2.5 border-blue-3 flex gap-2.5">
                  <h2 className="flex-1">Total Supply</h2>
                  <p className="flex-1 text-blue-3">{vettedProjectData.tokenInformation.totalSupply}</p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}
