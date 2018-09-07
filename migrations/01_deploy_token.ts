import { Deployer } from "../utils/deployer";
import { utils } from 'ontology-ts-sdk';

export = async (deployer: Deployer) => {
  const contract = await deployer.deploy('TestContract', 'Deploy');
  contract.deployed()
    .then(async (aa) => {
      console.log('contract hash', contract.codeHash);
      console.log(await deployer.client.getStorage(contract.codeHash, utils.str2hexstr('test')));
    });
};