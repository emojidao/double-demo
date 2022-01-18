# Simple guide for interacting with doNFT
what is doNFT ?
- doNFT is an extension of ERC721
- doNFT has a list of duration 
- a duration contains start time and end time，indicates that the owner of doNFT has the right to use this period of time


double-demo is a simple guide for interacting with doNFT contract:
- mint vNft/wNFT by original NFT
- mint doNFT
- check in the user role of doNFT
- get the user role of original NFT
- get the info of doNFT
- list the token id of a wallet address
- check doNFT is valid now
- get duration 



# Install & Usage

1. ```npm i```

2. change config.js，replace private key：
const rinkebyKey =
{
    admin_address: 'your address',
    admin_private_key: 'your private key',
};

3. run test：
for excample :run in terminal：
```npx hardhat run scripts/1_mintvNft.js```
