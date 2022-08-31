import {genKeyPairFromSeed, genKeyPairAndSeed, SkynetClient} from "skynet-js";

// const client = new SkynetClient('https://skynetfree.net', {skynetApiKey: "xxx"});
// const client = new SkynetClient('https://web3portal.com', {skynetApiKey: 'xxxx'});
// const client = new SkynetClient('https://web3portal.com');
const client = new SkynetClient('https://siasky.net');

export const {publicKey, privateKey, seed} = localStorage.getItem('seed') ? genKeyPairFromSeed(localStorage.getItem('seed')) : genKeyPairAndSeed()

if(seed) localStorage.setItem('seed', seed)

export default client
