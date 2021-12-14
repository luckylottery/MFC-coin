import { useMemo } from 'react';
import { getContract } from '../Utils/getContract';
import useActiveWeb3React from './useActiveWeb3React';

export default function useContract(address, ABI, account = '', withSignerIfPossible = true) {
  const { library } = useActiveWeb3React();

  console.log('library = ', library)

  return useMemo(() => {
    if (!address || !ABI || !library) return null;
    try {
      return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined);
    } catch (error) {
      console.error('Failed to get contract', error);
      return null;
    }
  }, [address, ABI, library, withSignerIfPossible, account]);
}
