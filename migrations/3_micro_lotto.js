const Random = artifacts.require("./Random.sol");
const MicroLotto = artifacts.require("./MicroLotto.sol");


async function deploy(deployer) {
  const MAX_NUMBER = 9;
  const TICKET_FEE = web3.toWei(100, 'finney');
  const LOTTO_FEE_PERCENT = web3.toWei(0.01, 'ether');

  await deployer.deploy(MicroLotto, Random.address, TICKET_FEE, LOTTO_FEE_PERCENT, MAX_NUMBER);
}

module.exports = function (deployer) {
  deployer.then(() => deploy(deployer));
};