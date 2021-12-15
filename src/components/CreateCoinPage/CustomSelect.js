export function LpSwapOptions({value, onChange}) {
  function getLpSwapOptions() {
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
    if (window?.ethereum?.networkVersion && options[window?.ethereum?.networkVersion]) {
      return options[window?.ethereum?.networkVersion]
    }
    return Object.values(options)
  }

  return (
    <select
      onChange={(e) =>
        onChange(e?.target?.value)
      }
      className="p-0.5 rounded-sm focus:outline-none"
    >
      {getLpSwapOptions()}
    </select>
  );
}
