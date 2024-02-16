import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("DummyNFT", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployDummyNFTFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const DummyNFT = await ethers.getContractFactory("DummyNFT");
    const dummyNFT = await DummyNFT.deploy('DummyNFT', 'DNFT');

    return { dummyNFT, owner, otherAccount };
  }

  describe("Minting & Queries", function () {
    it("Should be able to mint NFTs", async function () {
      const { dummyNFT, owner, otherAccount } = await loadFixture(deployDummyNFTFixture);

      // mint to otherAccount

      // check balance of otherAccount

      // expect(await lock.unlockTime()).to.equal(unlockTime);
    });

    it("After minting it should enumerate all NFTs for given user", async function () {
      const { dummyNFT, owner } = await loadFixture(deployDummyNFTFixture);

      // mint to otherACcount

      // query all NFTs for otherAccount

      // expect
    });
  });
});
