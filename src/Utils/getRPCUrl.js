import sample from 'lodash/sample'

// Array of available nodes to connect to
export const nodes = [
  'https://bsc-dataseed.binance.org',
]

const getNodeUrl = () => {
  return sample(nodes)
}

export default getNodeUrl
