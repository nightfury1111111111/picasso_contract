const { ethers, run, network } = require("hardhat");

const {
  abi,
} = require("../artifacts/contracts/FantomAddressRegistry.sol/FantomAddressRegistry.json");

async function main() {
  const contract = "0x639DF26FF9Bc99524c38aE70DEEEaB4A9B93a3E4";
  const [deployer] = await ethers.getSigners();
  const addressRegistry = new ethers.Contract(contract, abi, deployer);

  await addressRegistry.updatePicasso(
    "0xfA97D4Ea379F1B6F2a7295436182180ad0209c5a"
  );
  console.log("picasso is set correctly.");
  await addressRegistry.updateAuction(
    "0xcf7700010254EbBBd6712EB443b090363f27AD28"
  );
  console.log("aution is set correctly.");
  await addressRegistry.updateMarketplace(
    "0x106c823F7E4456640C12aE9B6Fe022b32f311D94"
  );
  console.log("marketplace is set correctly.");
  await addressRegistry.updateNFTFactory(
    "0x9c4583dfa8FD6192e5cD194C8c025E3c56cDef5B"
  );
  console.log("FantomNFTFactory is set correctly.");
  await addressRegistry.updateTokenRegistry(
    "0xe02Bde8a75b08363fB7c4b302C0A32cb9154e79b"
  );
  console.log("FantomTokenRegistry is set correctly.");
  await addressRegistry.updatePriceFeed(
    "0xe706E9B8dFAd0BBFeaffBB5785Cc0B651756dC4C"
  );
  console.log("FantomPriceFeed is set correctly.");
  await addressRegistry.updateArtFactory(
    "0xC3bB00Ec635Bc0Cd489D8D8aF1C6Bf629e765833"
  );
  console.log("FantomArtFactory is set correctly.");
  await addressRegistry.updateNFTFactoryPrivate(
    "0x67CfdC25d094730D428760b7AEB8669998b70236"
  );
  console.log("Finish.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
