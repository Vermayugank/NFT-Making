require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const ALCHEMY_API_KEY_URL = "https://rinkeby.infura.io/v3/ed35d14204a34debab574f96a7e0f625";
const RINKEBY_PRIVATE_KEY = "27a28b1ba34177a0543689657bb129cd198665411176e3c1bc8c9ae9446a62d0";

module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
    },
  },
};