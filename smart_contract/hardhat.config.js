// https://eth-ropsten.alchemyapi.io/v2/7KLx7sPyLUSEEFEeRSDNVsdBSK27EqxT

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/7KLx7sPyLUSEEFEeRSDNVsdBSK27EqxT',
      accounts: ['6e5da0be3cbc6937b30038745994e900d8ff47ec485f533eb99bfc38a86a933c']
    }
  }
}