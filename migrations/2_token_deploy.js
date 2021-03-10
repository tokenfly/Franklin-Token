var FLyToken = artifacts.require("FLyToken");

module.exports = async function (deployer) {
  await deployer.deploy(FLyToken);
  try {
    const instance = await FLyToken.deployed();
    
    if (instance && instance.address) {
      console.log('Deployed to ', instance.address);
      // await instance.initializeRound1.sendTransaction();
      // console.log('Initialized Round 1', instance.address);

      // await instance.initializeRound2.sendTransaction();
      // console.log('Initialized Round 2', instance.address);
    }
    else {
      console.warn('Deploy: empty instance!');
    }
  } catch (error) {
    console.error('Deploy error: ', error);
  }

};