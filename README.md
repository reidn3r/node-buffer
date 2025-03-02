# Buffer em Node.js

Este repositório contém anotações e exemplos sobre Buffers em Node.js.

## Conceitos Principais

- **Buffer** herda de `Uint8Array` e faz parte da API `TypedArray`.
- **Tamanho fixo**: Não é possível adicionar/remover elementos (mas sobrescrever, sim).
- **Métodos herdados**: Pode usar `map()`, `filter()`, `slice()`, entre outros.
- **Alocação**: `Buffer.alloc(x)` reserva `x` bytes em memória.
- **Conversão**: `Buffer.from()` cria um buffer a partir de diferentes fontes.
  - **Tipos de dados**: Buffer.from() aceita: string, arrays/TypedArrays e Buffer.
- **Escrita**: `Buffer.write(conteudo)` preenche o buffer com dados.
- **Slicing**: `Buffer.slice()` cria uma view referenciando o buffer original.
- **Compartilhamento de memória**: `Uint8Array` criado a partir de um `Buffer` compartilha a mesma memória.


## Buffer vs TypedArray

- `TypedArray.prototype.slice()`: Cria uma **cópia** dos dados.
- `Buffer.prototype.slice()`: Cria uma **view** sobre os mesmos dados, sem copiar.

