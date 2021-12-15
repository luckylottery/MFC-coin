export function LpSwapOptions({value, onChange}) {
  function getLpSwapOptions() {
    const id = 11
    const options = {
      1: <option value={"(BSC)PancakeswapV2"}>(BSC)PancakeswapV2</option>,
      2: <option value={"(BSCTEST)Pancakeswap"}>(BSCTEST)Pancakeswap</option>,
      3: <option value={"(ETH)UNISWAP"}>(ETH)UNISWAP</option>,
      4: <option value={"(ETH KOVAN)UNISWAP"}>(ETH KOVAN)UNISWAP</option>,
      5: <option value={"(FTM)Spookyswap"}>(FTM)Spookyswap</option>,
      6: <option value={"(FTM)Spookyswap"}>(FTM)Spookyswap</option>,
      7: <option value={"(Moonriver)Solarbeam"}>(Moonriver)Solarbeam</option>,
      8: <option value={"(Xdai)Honeyswap"}>(Xdai)Honeyswap</option>,
      9: <option value={"(Cronos)Cronaswap"}>(Cronos)Cronaswap</option>,
      10: <option value={"(AVAX)Hurricaneswap"}>(AVAX)Hurricaneswap</option>,
    }
    if (options[id]) {
      alert(1)
      return options[id]
    }
    console.log(Object.keys(options))
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
