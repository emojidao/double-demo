const { wallet } = require('./config');

require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");
require('hardhat-gas-reporter');
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.10",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
      accounts: [`${wallet.admin_private_key}`],
      gas:5000000,
      gasPrice: 2000000000,  // 2 gwei
    },
    matic: {
      url: `https://rpc-mumbai.maticvigil.com`,
      accounts: [`${wallet.admin_private_key}`],
      gas:5000000,
      gasPrice: 31000000000,  // 31 gwei
    }
  },
  etherscan: {
    apiKey: "WPSFC6NDH6I4MEWYFXJ1PQXTPFU4A2UQZT"
  }

};
