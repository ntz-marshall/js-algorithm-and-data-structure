// function Stack() {
//     var items = []

//     this.push = function(element) {
//         // adiciona um novo item à pilha
//         items.push(element)
        
//     }
//     this.pop = function() {
//         // remove um item do topo da pilha
//         return items.pop()

//     }
//     this.peek = function() {
//         // devolve um item pro topo da pilha
//         return items[items.length - 1]
//         // o tamanho do array pode ser 6, mas o índice é 5, por isso o -1;
        
//     }
//     this.isEmpty = function() {
//         // informa se a pilha está vazia ou não
//         // devolve um booleano
//         return items.length === 0
        
//     }
//     this.clear = function() {
//         // limpa a pilha
//         items = []
//         // recebe um array vazio
        
//     }
//     this.size = function() {
//         // informa o tamanho da pilha
//         return items.length
        
//     }
//     this.print = function() {
//         // imprime no console a pilha
//         console.log(items.toString())
        
//     }
// }

// var pilha = new Stack()

// console.log(pilha.isEmpty())

// pilha.push(5)
// pilha.print()
// pilha.push(8)
// pilha.print()
// pilha.push(11)
// pilha.print()
// pilha.push(15)
// pilha.print()
// pilha.push(25)
// pilha.print()

// pilha.pop()
// pilha.print()
// pilha.pop()
// pilha.print()
// pilha.pop()
// pilha.print()
// pilha.pop()
// pilha.print()
// pilha.pop()
// pilha.print()


// console.log(pilha.isEmpty())



/* Conversor de decimal para binário
   utilizando conceitos de pilha */

function dec2Bin(decNumber) {
    var restStack = [],
    rest,
    binaryString = ''

    while(decNumber > 0) {
        rest = Math.floor(decNumber % 2)
        // rest pega o resto da divisão do número
        restStack.push(rest)
        // push adiciona rest ao restStack
        decNumber = Math.floor(decNumber / 2)
        // o número agora foi dividido por 2 e começamos o loop novamente
    }

    while (restStack.lenght > 0) {
        binaryString += restStack.pop().toString()
        // a binaryString é a inversão do resultado do primeiro while
        // formando assim o número binário.
    }
    return binaryString
}
//console.log(dec2Bin(25))

/* Conversor melhorado utilizando pilhas */

function baseConverter(decNumber, base) { //123, 26
    var restStack = [],
    rest,
    baseString = '',
    digits = '0123456789ABCDEF'

    while(decNumber > 0) {
        rest = Math.floor(decNumber % base)
        restStack.push(rest) // [11, 7]
        decNumber = Math.floor(decNumber / base)
    }

    while (restStack.length > 0) {
        baseString += digits[restStack.pop()] //7B
        // vai retirar o último elemento da pilha e printar em digits
    }
    return baseString
}

console.log(baseConverter(123, 16)) // base Hexadecimal
console.log(baseConverter(123, 8))  // base octal
console.log(baseConverter(123, 2))  // base binária