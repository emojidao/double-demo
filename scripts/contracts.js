const { wellet } = require("../config");
const { REVVM_ABI, doREVVM_ABI } = require("./abi");
const { DO_REVVM_ADDRESS, REVVM_ADDRESS } = require("./address");

const matic = {
    name: 'matic',
    chainId: 137,
    _defaultProvider: (providers) => new providers.JsonRpcProvider('https://polygon-rpc.com')
}

// Connect to the network
var provider = ethers.getDefaultProvider(matic);
var wallet = new ethers.Wallet(wellet.admin_private_key, provider);

var _REVVM;
function REVVM() {
    if (!_REVVM) {
        let contract = new ethers.Contract(REVVM_ADDRESS, REVVM_ABI, provider);
        _REVVM = contract.connect(wallet);
    }
    return _REVVM
}

var _doREVVM;
function doREVVM() {
    if (!_doREVVM) {
        let contract = new ethers.Contract(DO_REVVM_ADDRESS, doREVVM_ABI, provider);
        _doREVVM = contract.connect(wallet);
    }
    return _doREVVM
}

module.exports = {
    REVVM ,
    doREVVM 
}