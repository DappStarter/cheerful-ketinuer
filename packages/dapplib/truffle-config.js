require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remember hole inner enter outer skirt'; 
let testAccounts = [
"0xce388279d54b9a7bd2cb5b8d8784d4719690b8f37cbee1c57649bf998a6ba9a3",
"0xe111dfb02384a1dcb2595afbba05cdfd1082c6d19d7d325cd09178df30d50315",
"0x3964460f1a9a70828f8e05a4d131c45fda4589681ab4aa4c397f9fa4b0fbfe00",
"0x6b452aeb003a27e126cdd4efadb2a8c23bba1efc0f46a50570f12791a109df4f",
"0xeab8c3922fd3bb4b6348336d8d36981d1ff01ad79b9a5aae60240c900960e2f8",
"0x3c1bde7144c73fb40b653179798980a6ff9fb47927ca5d605010081836416bd2",
"0x4d8be6659fb8b28daed32d908e793bb5d79ce1226167e5be0554236d1d44d2f5",
"0xc14847833f41a538213f84960e3c094ddb4460ff02e7d0752a8edfad3f0092bb",
"0x1a6152041116d8e90b2e1741e7e9fa7249d04775deaeb79cae921e8678d24a72",
"0x9cfd719570f0d5a078835caf6a05d6ec0e0280fde3378977f21d4325b04f1492"
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
            network_id: 80001,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
