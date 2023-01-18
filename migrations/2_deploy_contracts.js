var TodoList = artifacts.require("./RemainderList.sol");

module.exports = function(deployer) {
  deployer.deploy(TodoList);
};
