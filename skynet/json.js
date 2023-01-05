import client, {publicKey, privateKey } from './client.js'

const dataKey = "jsonDemo";

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


const test = async() => {
    const res = await json(dataKey)
    console.log('getJSONExample', res)
    if(!res){
        console.log('setJSONExample', await json(dataKey, val));
    }
}
test();






