const { ethers, run, network } = require("hardhat");
// const { ethers } = require("ethers");
const {
  abi,
} = require("../artifacts/contracts/FantomMarketplace.sol/FantomMarketplace.json");

const abi2 = require("../artifacts/contracts/FantomAddressRegistry.sol/FantomAddressRegistry.json");

async function main() {
  const contract1 = "0x78647fC356aCeE56DEbE58dDF993C877D93c9395";
  // const contract1 = "0xa4C9a5c3F5AeF6c3d6C8438ab4729898A7239B0b";
  const contract2 = "0xB1ecdc5036Ae63cDd22A7543F076554aC4dD0C80";
  const [deployer] = await ethers.getSigners();
  // const marketplace = new ethers.Contract(contract1, abi, deployer);
  // const addressRegistry = new ethers.Contract(contract2, abi2.abi, deployer);
  // console.log("Deployer: ", deployer.address);
  const provider = new ethers.providers.JsonRpcProvider(
    "https://rpc.ftm.tools"
    // "https://rpc.testnet.fantom.network"
  );
  const ownerWallet = new ethers.Wallet(
    "ca81c4fefb8353c29ca759bbc2df6f794ca76449b6923d752cfc8c1e3a5f10c8",
    // "d71cf0ed16f681781631fb85f59b081a622aeda77ff5436ddebf31efde473a02",
    provider
  );
  console.log("Wallet", ownerWallet.address);

  // const nonce = await provider.getTransactionCount(ownerWallet.address);
  // console.log("Nonce: ", nonce);
  // const marketplaceSC = new ethers.Contract(contract1, abi, deployer);
  const marketplaceSC = new ethers.Contract(contract1, abi, ownerWallet);

  const owner = await marketplaceSC.owner();
  console.log("Owner: ", owner);

  let res = await marketplaceSC.registerCollectionRoyalty(
    "0xe8af837e2f8ab1e310990b9d362c34d897f2b0af",
    "0xfa7c3d46d03a0c619180922822edee8a0cf6b94a",
    2,
    "0xfa7c3d46d03a0c619180922822edee8a0cf6b94a"
    // { maxFeePerGas: 1500000000 }
    // { gasLimit: 4000000 }
  );
  console.log("res: ", res);

  // res = await marketplaceSC.updatePlatformFee(20, {
  //   maxFeePerGas: 35000000000,
  //   maxPriorityFeePerGas: 1500000000,
  // });
  // console.log("res: ", res);
  // const fee = await marketplaceSC.platformFee();
  // console.log("FEE", fee);
  // await marketplaceSC.updatePlatformFee(8);
  // console.log("res: ", res);
  //   const factory = await addressRegistry.privateArtFactory();
  //   console.log("factory", factory);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
