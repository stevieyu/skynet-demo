import {genKeyPairFromSeed, genKeyPairAndSeed, SkynetClient} from "skynet-js";

const client = new SkynetClient('https://web3portal.com', {skynetApiKey: 'HCLUM8AGS2APOND6GC89QG1JUSMJPJ2IP49G71SCVHKOODBNPMMG'});
// const client = new SkynetClient('https://web3portal.com');

export const {publicKey, privateKey, seed} = localStorage.getItem('seed') ? genKeyPairFromSeed(localStorage.getItem('seed')) : genKeyPairAndSeed()

if(seed) localStorage.setItem('seed', seed)

export default client
