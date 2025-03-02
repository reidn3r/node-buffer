const { Buffer } = require('node:buffer')

// const integers = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const intbuff = Buffer.from(integers);
console.log('original:', intbuff);

/*
  * Não copia os dados, mas cria uma view
  * É criado uma referencia para o buffer original
*/
const slice = intbuff.slice(4, 8);
console.log('slice:', slice);

console.log("\nslice modificada\n");

slice[0] = 99;
console.log('original:', new Uint32Array(intbuff).toString());
console.log('slice:', new Uint32Array(slice).toString());
/*
  * Output: 
      original: 1,2,3,4,99,6,7,8,9,10
      slice: 99,6,7,8
*/

console.log("\noriginal modificado\n");

slice[0] = 5;
intbuff[0] = 99;
console.log('original:', new Uint32Array(intbuff).toString());
console.log('slice:', new Uint32Array(slice).toString());

/*
  * Output: 
      original: 99,2,3,4,5,6,7,8,9,10
      slice: 5,6,7,8
*/