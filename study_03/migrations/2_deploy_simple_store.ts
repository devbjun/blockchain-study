const SimpleStore = artifacts.require('./SimpleStore.sol');

module.exports = function (deployer) {
  deployer.deploy(SimpleStore);
} as Truffle.Migration;

// because of https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files
export {};
