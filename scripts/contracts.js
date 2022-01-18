const { ethers } = require("ethers");
const { wallet } = require("../config");
const { DONFT_ABI } = require("./abi");
const { DONFT_ESTATE, DONFT_LAND } = require("./address");

const bsct = {
    name: 'bsct',
    chainId: 97,
    _defaultProvider: (providers) => new providers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545')
}

// Connect to the network
var provider = ethers.getDefaultProvider(bsct);
var wallet_test = new ethers.Wallet(wallet.admin_private_key, provider);

var _doLand;
function doLand() {
    if (!_doLand) {
        let contract = new ethers.Contract(DONFT_LAND, DONFT_ABI, provider);
        _doLand = contract.connect(wallet_test);
    }
    return _doLand
}

module.exports = {
    doLand 
}