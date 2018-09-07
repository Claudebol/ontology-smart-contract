pragma solidity ^0.4.8;

import "ontsc/DeployedAddresses.sol";
import "ontsc/Assert.sol";

contract Test {
  // Create functions that begin with "test" to signify different test functions.
  // More documentation at http://truffleframework.com/docs/getting_started/solidity-tests

  function testIsTrue() {
     Assert.isTrue(true, "Should be true!");
  }
}
