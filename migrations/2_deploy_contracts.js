// const Token = artifacts.require("Token");

// module.exports = function(deployer) {
//   deployer.deploy(Token);
// };


const Token = artifacts.require("Token");
const Exchange = artifacts.require("Exchange");


module.exports = async function(deployer) {
    const accounts = await web3.eth.getAccounts() // makes an array of accounts from Ganache

    await deployer.deploy(Token);
    
    const feeAccount = accounts[0]
    const feePercent = 10

    await deployer.deploy(Exchange, feeAccount, feePercent);
};