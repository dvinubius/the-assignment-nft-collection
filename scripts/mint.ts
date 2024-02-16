import { ethers } from "hardhat";

async function main() {
  const dummyNft = await ethers.getContractAt("DummyNFT", "0x60508d5337c23a913922C577b638d1A61e0AEEf7");
  const accounts = await ethers.getSigners();
  const account = accounts[1];
  for (const i of new Array(10).keys()) {
    const tx = await dummyNft.mint(account.address, i);
    await tx.wait();
    console.log(await dummyNft.ownerOf(i), 'owns token', i, 'with uri', await dummyNft.tokenURI(i));
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});