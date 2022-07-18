const { ethers, run, network } = require("hardhat");

const {
  abi,
} = require("../artifacts/contracts/FantomMarketplace.sol/FantomMarketplace.json");

const abi2 = require("../artifacts/contracts/FantomAddressRegistry.sol/FantomAddressRegistry.json");

async function main() {
  const contract1 = "0x78647fC356aCeE56DEbE58dDF993C877D93c9395";
  const contract2 = "0xB1ecdc5036Ae63cDd22A7543F076554aC4dD0C80";
  const [deployer] = await ethers.getSigners();
  const marketplace = new ethers.Contract(contract1, abi, deployer);
  const addressRegistry = new ethers.Contract(contract2, abi2.abi, deployer);

  await marketplace.registerCollectionRoyalty(
    "0xa20e5236b810790f87382d29f11c86c6b68c9b06",
    "0xfa7c3d46d03a0c619180922822edee8a0cf6b94a",
    0,
    "0xfa7c3d46d03a0c619180922822edee8a0cf6b94a"
  );
  //   const factory = await addressRegistry.privateArtFactory();
  //   console.log("factory", factory);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
