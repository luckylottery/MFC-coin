import {useEffect, useState} from "react";

export function LpSwapOptions({value, onChange}) {
  const [lpSwapOptions, setLpSwapOptions] = useState(null)
  function getLpSwapOptions(setOnChange) {
    const chainIdPromise = new Promise(async (resolve, reject) => {
      resolve(await window.ethereum.request({method: "eth_chainId"}));
    })
    chainIdPromise.then(response => {
      const options = {
        1: <option key="(BSC)PancakeswapV2" value={"(BSC)PancakeswapV2"}>(BSC)PancakeswapV2</option>,
        2: <option key="(BSCTEST)Pancakeswap" value={"(BSCTEST)Pancakeswap"}>(BSCTEST)Pancakeswap</option>,
        3: <option key="(ETH)UNISWAP" value={"(ETH)UNISWAP"}>(ETH)UNISWAP</option>,
        4: <option key="(ETH KOVAN)UNISWAP" value={"(ETH KOVAN)UNISWAP"}>(ETH KOVAN)UNISWAP</option>,
        5: <option key="(FTM)Spookyswap" value={"(FTM)Spookyswap"}>(ETH KOVAN)UNISWAP</option>,
        6: <option key="(Polygon Matic)Quickswap" value={"(Polygon Matic)Quickswap"}>(Polygon Matic)Quickswap</option>,
        7: <option key="(Moonriver)Solarbeam" value={"(Moonriver)Solarbeam"}>(Moonriver)Solarbeam</option>,
        8: <option key="(Xdai)Honeyswap" value={"(Xdai)Honeyswap"}>(Xdai)Honeyswap</option>,
        9: <option key="(Cronos)Cronaswap" value={"(Cronos)Cronaswap"}>(Cronos)Cronaswap</option>,
        10: <option key="(AVAX)Hurricaneswap" value={"(AVAX)Hurricaneswap"}>(AVAX)Hurricaneswap</option>,
      }
      if (response && options[response]) {
        setLpSwapOptions(options[response])
        if (setOnChange) {
          onChange(options[response][0].props.value)
        }
      }
      setLpSwapOptions(Object.values(options))
      if (setOnChange) {
        onChange(Object.values(options)[0].props.value)
      }
    })

  }

  useEffect(() => {
    getLpSwapOptions(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <select
      onChange={(e) =>
        onChange(e?.target?.value)
      }
      className="p-0.5 rounded-sm focus:outline-none"
      value={value}
    >
      {lpSwapOptions}
    </select>
  );
}
