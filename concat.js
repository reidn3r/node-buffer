const { Buffer } = require('node:buffer')

//concat
const chunk_1 = Buffer.alloc(7);
chunk_1.write("Hello, ")

const chunk_2 = Buffer.alloc(6);
chunk_2.write("world!")

const length = chunk_1.length + chunk_2.length
const combined = Buffer.concat([chunk_1, chunk_2], length);

console.log('chunk_1:', chunk_1.toString())
console.log('chunk_1 length:', chunk_1.length)

console.log('chunk_2:', chunk_2.toString())
console.log('chunk_2 length:', chunk_2.length)

console.log('concat. result:', combined.toString())
console.log('concat. length:', combined.length) //13 bytes