/* eslint-disable no-unused-vars */
import Web3 from "web3";
//import MCFabi from "../ABI/mcfabi.json";
//import gameABI from "../ABI/gameAbi.json";
const web3 = new Web3(Web3.givenProvider);
//hello branch

const contractAddress = "0x6E1f76017024BaF9dc52a796dC4e5Ae3110005c2";
const gameAddress = "0xf1B6448aA3c904b50b27b4283587Cf5E8209524C";
const contractFactoryAddress = "";

let approvedTokens = web3.utils.toBN("50000000000000000000000");

//const mcfHandler = new web3.eth.Contract(MCFabi, contractAddress);

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "👆🏽 Write a message in the text-field above.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a
              target="_blank"
              href={`https://metamask.io/download.html`}
              rel="noreferrer"
            >
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
        };
      } else {
        return {
          address: "",
        };
      }
    } catch (err) {
      return {
        address: "",
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a
              target="_blank"
              href={`https://metamask.io/download.html`}
              rel="noreferrer"
            >
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};
/*
export const claimDividends = async () => {
  console.log(window.ethereum.selectedAddress);
  var myContract = new web3.eth.Contract(MCFabi, contractAddress);
  await myContract.methods
    .claim()
    .send({ from: window.ethereum.selectedAddress });
  console.log("dividends succesfully claimed");
};

export const approveTokens = async () => {
  var myContract = new web3.eth.Contract(MCFabi, contractAddress);
  await myContract.methods
    .approve(gameAddress, approvedTokens)
    .send({ from: window.ethereum.selectedAddress });
  console.log("tokens approved for spending in game");
};

export const buyticket = async () => {
  var myContract = new web3.eth.Contract(gameABI, gameAddress);
  await myContract.methods
    .BuyTicket()
    .send({ from: window.ethereum.selectedAddress });
  console.log("ticket successufully bought");
};

export const claim = async () => {
  var myContract = new web3.eth.Contract(gameABI, gameAddress);
  await myContract.methods
    .claimPrize()
    .send({ from: window.ethereum.selectedAddress });
  console.log("price successfully claimed");
};

export const pullTier = async (userWallet) => {
  var myContract = new web3.eth.Contract(gameABI, gameAddress);
  let hello = await myContract.methods.returnLastWinTier(userWallet).call();

  console.log(hello);

  return hello;
};

export const pullAllowance = async (permissionWallet, scratchAddress) => {
  var myContract = new web3.eth.Contract(MCFabi, contractAddress);
  let allowance = await myContract.methods
    .allowance(permissionWallet, scratchAddress)
    .call();
  return allowance;
};

export const pullIsPlaying = async (playingAddress) => {
  var myContract = new web3.eth.Contract(gameABI, gameAddress);
  let status = await myContract.methods.isActive(playingAddress).call();
  return status;
};*/
