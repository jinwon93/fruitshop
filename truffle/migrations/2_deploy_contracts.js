const Shop = aritifacts.require("./Shop.sol");

module.exports = function(deployer) {

    deployer.deploy(Shop);
};