import {Input} from "antd";
import {getCurrentWalletConnected} from "../../Utils/walletMainHandler";

export function TaxReceiveAdress({value, onChange}) {

  async function setCurrentWallet(type) {
    console.log(value)
    if (type === "burnAddress") {
      onChange("0x000000000000000000000000000000000000dead")
    } else if (type === "myAdress") {
      const {address} = await getCurrentWalletConnected();
      onChange(address)
    }
  }

  return (
    <>
      <Input
        className="w-full col-start-2 col-end-5 p-0.5 rounded focus:outline-none" onChange={onChange} value={value}/>
      <button type="button" className="text-xs mr-4 bg-blue-4 border-blue-1 border rounded-sm p-1 mt-4"
              onClick={() => setCurrentWallet("myAdress")}>Set My Address
      </button>
      <button type="button" className="text-xs bg-blue-4 border-blue-1 border rounded-sm p-1 mt-4"
              onClick={() => setCurrentWallet("burnAddress")}>Set Burned Address
      </button>
    </>
  );
}