import client, {publicKey, privateKey } from './client.js'

const dataKey = "myApp";

export const json = async (dataKey, data) => {
    const {getJSON, setJSON} = client.db
    let res;
    if(data) {
        res = await setJSON(privateKey, dataKey, data)
    }else{
        res = await getJSON(publicKey, dataKey)
    }
    return res.data
}
export default json

const val = {
    example: "This is some example JSON data.",
    datetime: new Date().toLocaleString()
}

// console.log('setJSONExample', await json(dataKey, val));
console.log('getJSONExample', await json(dataKey))





