import MetaMaskOnboarding from "@metamask/onboarding";
import React from "react";
import { useState } from "react";
import Web3 from "web3";
const ONBOARD_TEXT = "Click here to install MetaMask!";
const CONNECT_TEXT = "Connect";
const CONNECTED_TEXT = "Connected";

export function OnboardingButton() {
  const [buttonText, setButtonText] = useState(ONBOARD_TEXT);
  const [isDisabled, setDisabled] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const onboarding = React.useRef();

  React.useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  React.useEffect(() => {
    //const isMetaMaskConnected = () => accounts && accounts.length > 0;
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        setButtonText(CONNECTED_TEXT);
        setDisabled(true);
        onboarding.current.stopOnboarding();
        console.log(accounts.length);
      } else {
        setButtonText(CONNECT_TEXT);
        setDisabled(false);
      }
    }
  }, [accounts]);

  React.useEffect(() => {
    function handleNewAccounts(newAccounts) {
      setAccounts(newAccounts);
    }
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(handleNewAccounts);
      window.ethereum.on("accountsChanged", handleNewAccounts);
      return () => {};
    }
  }, []);

  const onClick = () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum
        .request({ method: "wallet_requestPermissions" })
        .then((newAccounts) => setAccounts(newAccounts));
    } else {
      onboarding.current.startOnboarding();
    }
    console.log(accounts);
  };
  const getNetwork = () => {
    console.log(accounts);
  };
  return (
    //Connect button pending implementation
    <div className="flex flex-col">
      <button
        className="border border-black py-2 px-3 rounded text-xs font-bold"
        disabled={isDisabled}
        onClick={onClick}
      >
        {buttonText}
      </button>
      <label>{accounts}</label>
      <button onClick={getNetwork}>Get Network</button>
    </div>
  );
}
