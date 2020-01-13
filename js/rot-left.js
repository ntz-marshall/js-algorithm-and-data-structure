var numbers = [1,2,3,4,5,6,7,8,9];

function rotLeft(a, d) {

    for (let i = 0; i < d; i++) {
        let x = a[0]
        // x pega o que está na primeira posição
        a.shift();
        // shift apaga o primeiro elemento, e joga os elementos pra esquerda
        a.push(x);
        // push adiciona o que estive em x ao final do array
    }

    return a;
    // retorna o array no estado final

}

document.write(rotLeft(numbers, 0));