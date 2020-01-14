// 6x6 2d array test
var arr = [];

var first = [1, 1, 1, 0, 0, 0];
var second = [0, 1, 0, 0, 0, 0];
var third = [1, 1, 1, 0, 0, 0];
var fourth = [0, 0, 2, 4, 4, 0];
var fifth = [0, 0, 0, 2, 0, 0];
var sixth = [0, 0, 1, 2, 4, 0];

arr = [first, second, third, fourth, fifth, sixth];

function hourglassSum(arr) {
    var arr = arr;
    var maxSum = -63;

    var totalSum = [
(arr[0][0] + arr[0][1] + arr[0][2] + arr[1][1] + arr[2][0] + arr[2][1] + arr[2][2]), 
(arr[0][1] + arr[0][2] + arr[0][3] + arr[1][2] + arr[2][1] + arr[2][2] + arr[2][3]), 
(arr[0][2] + arr[0][3] + arr[0][4] + arr[1][3] + arr[2][2] + arr[2][3] + arr[2][4]), 
(arr[0][3] + arr[0][4] + arr[0][5] + arr[1][4] + arr[2][3] + arr[2][4] + arr[2][5]), 

(arr[1][0] + arr[1][1] + arr[1][2] + arr[2][1] + arr[3][0] + arr[3][1] + arr[3][2]), 
(arr[1][1] + arr[1][2] + arr[1][3] + arr[2][2] + arr[3][1] + arr[3][2] + arr[3][3]), 
(arr[1][2] + arr[1][3] + arr[1][4] + arr[2][3] + arr[3][2] + arr[3][3] + arr[3][4]), 
(arr[1][3] + arr[1][4] + arr[1][5] + arr[2][4] + arr[3][3] + arr[3][4] + arr[3][5]), 

(arr[2][0] + arr[2][1] + arr[2][2] + arr[3][1] + arr[4][0] + arr[4][1] + arr[4][2]), 
(arr[2][1] + arr[2][2] + arr[2][3] + arr[3][2] + arr[4][1] + arr[4][2] + arr[4][3]),
(arr[2][2] + arr[2][3] + arr[2][4] + arr[3][3] + arr[4][2] + arr[4][3] + arr[4][4]), 
(arr[2][3] + arr[2][4] + arr[2][5] + arr[3][4] + arr[4][3] + arr[4][4] + arr[4][5]), 

(arr[3][0] + arr[3][1] + arr[3][2] + arr[4][1] + arr[5][0] + arr[5][1] + arr[5][2]), 
(arr[3][1] + arr[3][2] + arr[3][3] + arr[4][2] + arr[5][1] + arr[5][2] + arr[5][3]),
(arr[3][2] + arr[3][3] + arr[3][4] + arr[4][3] + arr[5][2] + arr[5][3] + arr[5][4]),
(arr[3][3] + arr[3][4] + arr[3][5] + arr[4][4] + arr[5][3] + arr[5][4] + arr[5][5])
    ];

    for(var x = 0; x < totalSum.length; x++) {
            if(totalSum[x] > maxSum) {
                maxSum = totalSum[x]
            }
    }

    return maxSum
}

// Próxima tarefa, otimizar esse código.

top 
mid 
bot 