const { Buffer } = require('node:buffer')

const integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const buf = Buffer.from(integers);
console.log('original:', buf);

// Aponta p/ o mesmo end. de memo. de buf
const shared = new Uint8Array(buf.buffer, buf.byteOffset, buf.length / Uint8Array.BYTES_PER_ELEMENT);
console.log('shared:', shared);


shared[0] = 28;
shared[9] = 60;
console.log('buffer:', new Uint8Array(buf).toString());
// Output: 28,2,3,4,5,6,7,8,9,60