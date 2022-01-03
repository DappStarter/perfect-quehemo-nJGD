require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth shift protect half clock forward giant'; 
let testAccounts = [
"0x2d43c9f1fe1e57b72a130f32e1c68a59ea2930b1d1e463d3ed3fae8becbb06d4",
"0xe6d2b79a7c7f90f01d882e8d269fd169bd8a6ee535524cbaec42a6acee21017e",
"0x5ed9ad6eb1f27a0a1c166fca915f1e1d25cd3017d20bf80c470838013942e6ca",
"0xbaa6084c025b72332dda387d2eb6a9156b18955676c9b85d89cc46830f8692dc",
"0xff31a1d18ecf0c6de3f39858cabb6c514f0d7201d8046d7057cf4a1ed6a0ff58",
"0x866bc07e5dabb7020cb85ec6f33146e92da75d9a34857134a2a96bb9836061a9",
"0x933c199b2beedc76585b724b7cd6a2b9f77906d75a99f9ff936e1dd37245bb3c",
"0x1a8e3fe277ae9c64a34b72646287b4d670852dc0e1034957bb6be9f978e7114a",
"0x23b37183de7f223ccfdad7a35572d2182bb27605f71404f221d6e9f5f060a0bb",
"0xd5af79db480aa556513ce2c71c7ae08e36971f07205384ec0c25e8a04e68f234"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

