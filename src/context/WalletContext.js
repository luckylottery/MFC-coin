import { createContext } from "react";
import { useState } from "react/cjs/react.development";

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState("");

  return (
    <WalletContext.Provider value={{
      walletAddress,
      setWalletAddress
    }}>
      {children}
    </WalletContext.Provider>
  );
}
