const { Buffer } = require('node:buffer')

//alloc
const alloc = Buffer.alloc(5); //5 bytes
alloc.write("12345678901");
console.log(alloc.toString()) //12345
