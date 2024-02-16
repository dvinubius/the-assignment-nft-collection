import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers";
import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

const infuraKey = process.env.INFURA_KEY;
const privateKey1 = process.env.PRIVATE_KEY_1;
const privateKey2 = process.env.PRIVATE_KEY_2;
const testnetAccounts: string[] = [];
if (privateKey1 && privateKey2) {
  testnetAccounts.push(privateKey1, privateKey2);
}

const config: HardhatUserConfig = {
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${infuraKey}`,
      accounts: testnetAccounts
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  solidity: "0.8.20",
};

export default config;
