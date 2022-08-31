import client from "./client.js";

async function uploadExample() {
    const content = JSON.stringify({a: 1}, null, 2)
    const blob = new Blob([content], {type: 'application/json'})
    const file = new File([blob], "xxxx.json", {
        type: blob.type,
    });

    const {skylink} = await client.uploadFile(file);
    console.log('uploadExample', skylink)
    // sia://AADLz97qj7zHmVy13fEeQhxcjZDRfZeTBOYOjxNyjulykQ
    return skylink;
}

async function downloadExample() {
    const file = await client.downloadFile('sia://AADLz97qj7zHmVy13fEeQhxcjZDRfZeTBOYOjxNyjulykQ');
    console.log('downloadExample', file)
}

async function metadataExample() {
    try {
        const { metadata, contentType, skylink } = await client.getMetadata('sia://AADLz97qj7zHmVy13fEeQhxcjZDRfZeTBOYOjxNyjulykQ');
        console.log('metadataExample', metadata, contentType, skylink)
    } catch (error) {
        console.log(error);
    }
}

downloadExample();
