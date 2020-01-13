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
    //document.write(' , ');
    var arr = arr;
    var maxSum = 19;

    var sumLine1 = [];
    var sumLine2 = [];
    var sumLine3 = [];
    var sumLine4 = [];

    var totalSum = [];

    var sum1 = arr[0][0] + arr[0][1] + arr[0][2] + arr[1][1] + arr[2][0] + arr[2][1] + arr[2][2];
    var sum2 = arr[0][1] + arr[0][2] + arr[0][3] + arr[1][2] + arr[2][1] + arr[2][2] + arr[2][3];
    var sum3 = arr[0][2] + arr[0][3] + arr[0][4] + arr[1][3] + arr[2][2] + arr[2][3] + arr[2][4];
    var sum4 = arr[0][3] + arr[0][4] + arr[0][5] + arr[1][4] + arr[2][3] + arr[2][4] + arr[2][5];

    var sum5 = arr[1][0] + arr[1][1] + arr[1][2] + arr[2][1] + arr[3][0] + arr[3][1] + arr[3][2];
    var sum6 = arr[1][1] + arr[1][2] + arr[1][3] + arr[2][2] + arr[3][1] + arr[3][2] + arr[3][3];
    var sum7 = arr[1][2] + arr[1][3] + arr[1][4] + arr[2][3] + arr[3][2] + arr[3][3] + arr[3][4];
    var sum8 = arr[1][3] + arr[1][4] + arr[1][5] + arr[2][4] + arr[3][3] + arr[3][4] + arr[3][5];

    var sum9 = arr[2][0] + arr[2][1] + arr[2][2] + arr[3][1] + arr[4][0] + arr[4][1] + arr[4][2];
    var sum10 = arr[2][1] + arr[2][2] + arr[2][3] + arr[3][2] + arr[4][1] + arr[4][2] + arr[4][3];
    var sum11 = arr[2][2] + arr[2][3] + arr[2][4] + arr[3][3] + arr[4][2] + arr[4][3] + arr[4][4];
    var sum12 = arr[2][3] + arr[2][4] + arr[2][5] + arr[3][4] + arr[4][3] + arr[4][4] + arr[4][5];

    var sum13 = arr[3][0] + arr[3][1] + arr[3][2] + arr[4][1] + arr[5][0] + arr[5][1] + arr[5][2];
    var sum14 = arr[3][1] + arr[3][2] + arr[3][3] + arr[4][2] + arr[5][1] + arr[5][2] + arr[5][3];
    var sum15 = arr[3][2] + arr[3][3] + arr[3][4] + arr[4][3] + arr[5][2] + arr[5][3] + arr[5][4];
    var sum16 = arr[3][3] + arr[3][4] + arr[3][5] + arr[4][4] + arr[5][3] + arr[5][4] + arr[5][5];
    
    sumLine1 = [sum1, sum2, sum3, sum4];
    sumLine2 = [sum5, sum6, sum7, sum8];
    sumLine3 = [sum9, sum10, sum11, sum12];
    sumLine4 = [sum13, sum14, sum15, sum16];

    totalSum = [sumLine1, sumLine2, sumLine3, sumLine4];

    document.write(totalSum);

}

document.write(hourglassSum(arr));