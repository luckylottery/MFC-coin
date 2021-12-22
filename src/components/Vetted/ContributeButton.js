import React, { useContext, useState } from 'react'
import { WalletContext } from '../../context/WalletContext';
import { connectWallet } from '../../Utils/walletMainHandler';
import { Spinner } from '../Spinner/Spinner';
import { contractAddress, MFCcontractAddress, gameAddress, contractFactoryAddress, ownerAddress } from "../../Utils/contractAddress";
import idoABI from "../../ABI/idoABI.json";
import factoryContractABI from "../../ABI/factoryContractABI.json";
import Web3 from "web3";


export const ContributeButton = ({ projectInfo }) => {
  const { walletAddress, setWalletAddress } = useContext(WalletContext);
  const [contributeValue, setContributeValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const metaWeb3 = new Web3(window.ethereum);

  const handleContributeChange = (e) => {
    setContributeValue(e.target.value);

  }

  const handleButtonClick = async () => {
    setIsLoading(true);

    if (walletAddress === "") {
      const { address } = await connectWallet();
      setWalletAddress(address);
      setIsLoading(false);
    }
    else {
      // Do some magic with contributeValue and projectInfo
      const depositContract = new metaWeb3.eth.Contract(idoABI, contractAddress);
      depositContract.methods._UserDepositPhaseOne().send({ from: walletAddress, value: metaWeb3.utils.toWei(contributeValue, 'ether') }).on('receipt', () => {

        alert("Something to error")
      }).on('error', () => {
        setIsLoading(false);
      }).then(() => {
        setIsLoading(false);
      });
      // setTimeout(() => {
      //   setIsLoading(false);
      // }, 2000);
    }
  }

  return (
    <div className="mt-4 w-full flex flex-col gap-3 items-center">
      {
        walletAddress !== "" && (
          <input
            disabled={isLoading}
            className={`${isLoading ? "opacity-50 cursor-wait" : ""} border-2 text-blue-3 border-blue-3  font-bold p-2 text-right rounded-sm w-full outline-none`}
            value={contributeValue}
            onChange={handleContributeChange}
          />
        )
      }
      <button
        disabled={isLoading} className={`${isLoading ? "opacity-50 cursor-wait" : ""} flex justify-center gap-1.5 border-blue-3 transition duration-300 border-2 text-blue-3  font-bold text-md rounded-sm py-2 w-full`}
        onClick={handleButtonClick} >
        {walletAddress === "" ? "CONNECT WALLET TO PARTICIPATE" : "CONTRIBUTE"}
        {isLoading && (<Spinner />)}
      </button>
    </div>
  )
}

//withdraw function.
// const handleButtonClickWithdraw = async () => {
//   setIsLoading(true);

//   if (walletAddress === "") {
//     const { address } = await connectWallet();
//     setWalletAddress(address);
//     setIsLoading(false);
//   }
//   else {
//     const withdrawContract = new metaWeb3.eth.Contract(idoABI, contractAddress);
//     withdrawContract.methods.withdrawTokens().send({ from: walletAddress}).on('receipt', () => {
//       alert("Something to error")
//     }).on('error', () => {
//       setIsLoading(false);
//     }).then(() => {
//       setIsLoading(false);
//     });
//   }
// }
// const handleButtonClickaddliquidity = async () => {
//   setIsLoading(true);
//   if (walletAddress === "") {
//     const { address } = await connectWallet();
//     setWalletAddress(address);
//     setIsLoading(false);
//   }
//   else if(walletAddress === ownerAddress){
//     const addliquidityContract = new metaWeb3.eth.Contract(idoABI, contractAddress);
//     addliquidityContract.methods.withdrawTokens().send({ from: walletAddress}).on('receipt', () => {
//       alert("Something to error")
//     }).on('error', () => {
//       setIsLoading(false);
//     }).then(() => {
//       setIsLoading(false);
//     });
//   }
// }

