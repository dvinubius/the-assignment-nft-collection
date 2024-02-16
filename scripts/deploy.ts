import { ethers } from "hardhat";

async function main() {
  const name = 'DummyNFT';
  const symbol = 'DNFT';

  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const dummyNft = await ethers.deployContract("DummyNFT", [name, symbol]);
  await dummyNft.waitForDeployment();

  console.log(
    `DummyNFT with name ${name} and symbol ${symbol} deployed to ${dummyNft.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
