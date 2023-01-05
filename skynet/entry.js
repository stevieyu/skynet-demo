import client, {publicKey, privateKey } from './client.js'
import {stringToUint8ArrayUtf8, uint8ArrayToStringUtf8} from "skynet-js";


export const entry = async (dataKey, data) => {
    const {getEntry, setEntry} = client.registry

    if(data) {
        data = stringToUint8ArrayUtf8(data);
        const revision = BigInt(Date.now());
        const entry = { dataKey, data, revision };
        await setEntry(privateKey, entry)
    }

    const res = await getEntry(publicKey, dataKey)
    if(res.entry && typeof res.entry === 'object'){
        res.entry.data = uint8ArrayToStringUtf8(res.entry.data);
    }

    return res.entry
}
export const entryUrl = (key) => client.registry.getEntryUrl(publicKey, key)
export default entry

const dataKey = "entryDemo";
console.log(await entry(dataKey));
// console.log(await entry(dataKey, 'xxdsdad'));

