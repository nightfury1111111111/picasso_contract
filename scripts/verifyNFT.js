const { ethers, run, network } = require("hardhat");
const {
  abi,
} = require("../artifacts/contracts/FantomTokenRegistry.sol/FantomTokenRegistry.json");
async function main() {
  const contract = "0xa4392B9C85e839c29e6C83D55Fc986C4ac983924";
  const [deployer] = await ethers.getSigners();
  const nft = new ethers.Contract(contract, abi, deployer);
  const name = await nft.add("0xDf032Bc4B9dC2782Bb09352007D4C57B75160B15");

  // const params = [
  //   "NFT",
  //   "NFT",
  //   "0x04F677F85c908febe9105F6E2bE41343EF3cfc2e",
  //   "0xc964b0ebA0B32fe0F8fc9e46591Eee79fCDcF30b",
  //   "0x901426885454C38e9C079A99f4E07203CB7AE339",
  //   10,
  //   "0x901426885454C38e9C079A99f4E07203CB7AE339",
  // ];

  // const NFT = await ethers.getContractFactory("FantomNFTTradable");
  // const newNft = await NFT.deploy(...params);
  // //   await newNft.deploy();
  // console.log("newNFT: ", newNft.address);
  // await setTimeout(() => {
  //   console.log("Wait");
  // }, 30000);

  // try {
  //   // Verify
  //   console.log("Verifying: ", newNft.address);
  //   await run("verify:verify", {
  //     address: newNft.address,
  //     constructorArguments: params,
  //   });
  // } catch (error) {
  //   if (error && error.message.includes("Reason: Already Verified")) {
  //     console.log("Already verified, skipping...");
  //   } else {
  //     console.error(error);
  //   }
  // }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
