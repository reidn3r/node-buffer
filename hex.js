const { Buffer } = require('node:buffer')

const buf = Buffer.from('hello, buffer');

/*
  * output: <Buffer 68 65 6c 6c 6f 2c 20 62 75 66 66 65 72>
  * Representação hexadecimal de cada char que compõe a string
    * 68 (0x68) é a representação hexadecimal de 104 
*/
console.log(buf);
console.log(buf.toString());

/* 
  * output: 104
  * Ao acessar buf[0], é retornado o valor do byte como um decimal
    * O char 'h' tem valor 104 na tabela ASCII
*/
console.log(buf[0]);
