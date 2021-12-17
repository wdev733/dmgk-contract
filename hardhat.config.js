require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

require('dotenv').config();

// Private keys TEST ACCOUNTS
const TEST_PRIVATE_KEY_1 = process.env.TEST_PRIVATE_KEY_1 || '';

const accounts = [
  TEST_PRIVATE_KEY_1,
];

module.exports = {
  defaultNetwork: "bsc_test",
  networks: {
    hardhat: {
      forking: {
        enabled: false,
        url: "https://mainnet.infura.io/v3/9c9479347b0e4596a76903cdd8ee5c6d"
      }
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/9c9479347b0e4596a76903cdd8ee5c6d",
      accounts
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/9c9479347b0e4596a76903cdd8ee5c6d",
      accounts
    },
    heco_main: {
      url: "https://http-mainnet-node.huobichain.com/"
    },
    heco_test: {
      url: "https://http-testnet.hecochain.com/",
      accounts
    },
    bsc_test: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts
    } 
  },
  solidity: {
    version: "0.6.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 999999
  },
  etherscan: {
    // apiKey: "3CZKG3H6CZGAJMAPWIA89KRJM26I5562V5"
    apiKey: "SFEJQEA8XXXNSPHCRR6ZKPX8WPUY7WMV9B"
  },
  heco: {
    apiKey: "62I3BRSTAKMHCQE57V2NQNTZQIG1PYUJQX"
  },
  bsc: {
    apiKey: "SFEJQEA8XXXNSPHCRR6ZKPX8WPUY7WMV9B"
  }
};
