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

console.log(numbers);

// Aula 6 Removendo Elementos do Array