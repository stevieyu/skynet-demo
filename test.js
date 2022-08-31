const {
    randomBytes
} = await import('node:crypto');

const buf = randomBytes(6);
console.log(
    `${buf.length} bytes of random data: ${buf.toString('hex')}`);
