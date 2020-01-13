// Aula 1, 2, 3;

var avgTemp = [];

avgTemp[0] = 31.9;
avgTemp[1] = 35.3;
avgTemp[2] = 42;
avgTemp[3] = 38;
avgTemp[4] = 25.5;

console.log(avgTemp);

/* var daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    outra forma de declarar um array; */

var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/*
for (let i = 0; i < daysOfWeek.length; i++) {
    console.log(daysOfWeek[i]);    
}
*/

// Aula 4 Lendo elementos do array a partir da iteração

var fibonacci = [];

fibonacci[0] = 0;
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];    
}

console.log(fibonacci);

// Aula 5 Aprendendo comando nativo push

var numbers = [0,1,2,3,4,5,6,7,8,9];

numbers[numbers.length] = 10;
numbers[numbers.length] = 11;

// add elemento na próxima posição do array
numbers.push(12);
numbers.push(13);

// add elemento na posição anterior do array
numbers.unshift(-1);
numbers.unshift(-2);
numbers.unshift(-3);
numbers.unshift(-4);

// Aula 6 Removendo Elementos do Array
// elimina um elemento do final do array
numbers.pop();
numbers.pop();
numbers.pop();

// elimina um elemento do inicio do array
numbers.shift();
numbers.shift();
numbers.shift();
numbers.shift();

//Aula 7 Inserindo e eliminando elementos especícifos
// eliminando elementos em determinada posição do array
numbers.splice(3, 3);
// (primeiro número é a posição no array, segundo número é a quantidade de elementos a serem removidos)

console.log(numbers);

// adicionando elementos em determinada posição do array
numbers.splice(3, 0, 3, 4, 5);
// a partir do terceiro parametro são os elementos adicionados no array

console.log(numbers);

// Aula 8 Arrays Bidimensionais

var avgTempWeek = [] // array 'pai'

var week1 = [33, 31, 35, 27, 40, 32, 36]; // array 'filho' na posição [0]
var week2 = [26, 12, 15, 21, 16, 23, 25]; // array 'filho' na posição [1]

avgTempWeek[0] = week1;
avgTempWeek[1] = week2;

/* 
    avgTempWeek[Array(7), Array(7)]
    0: (7) [33, 25, 19, 27, 23, 32, 36]
    1: (7) [26, 23, 15, 21, 16, 23, 25]
    criamos um array contendo dois arrays

*/

console.log('Arrays: ' + avgTempWeek);

//para acessar uma posição dentro de um dos arrays usamos duas [0][4] uma marcando o array, outra marcando o indice
console.log('Temperatura do primeiro Array na 4ª posição: ' + avgTempWeek[0][4]);

// o console vai varrer o array pai na posição [0] incrementando a posição do indice [j] no array filho
for (var i = 0; i < avgTempWeek.length; i++) {
    for (var j = 0; j < avgTempWeek[i].length; j++) {
        console.log('Temperaturas: ' + avgTempWeek[i][j]);        
    }    
}


// Aula 10 Arrays tridimensionais
var month = [];

var firstWeeks = [];
var lastWeeks = [];

var avgTempWeek1 = [33, 31, 35, 27, 40, 32, 36];
var avgTempWeek2 = [26, 12, 15, 21, 16, 23, 25];

var avgTempWeek3 = [22, 13, 5, 7, 0, 2, 6];
var avgTempWeek4 = [16, 2, 5, 1, 6, 3, 5];

firstWeeks = [avgTempWeek1, avgTempWeek2];
lastWeeks = [avgTempWeek3, avgTempWeek4];

month = [firstWeeks, lastWeeks];

// chamando temperatura '1' posição [3] da 4ª semana, posição [1] nas últimas semanas, também posição [1] no mês
console.log('Temperatura do 4º dia da 4ª semana do mês: ' + month[1][1][3]);

for (var x = 0; x < month.length; x++) {
    for (var y = 0; y < month[x].length; y++) {
        for (var z = 0; z < month[x][y].length; z++) {
            console.log('Temperaturas do Mês: ' + month[x][y][z]);
            
        }
    }
}

/* É mais fácil sair de um while loop que de um for loop
Usar mais de dois for loop em um array 2d é processamento desnecessário
Se conseguir usar um for loop para varrer um array multidimensional ganha poder de processamento */

console.log('Temperaturas do Mês: ' + month[1][1]);