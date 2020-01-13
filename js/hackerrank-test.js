// 6x6 2d array test
var arr = [];

var first = [1, 1, 1, 0, 0, 0];
var second = [0, 1, 0, 0, 0, 0];
var third = [1, 1, 1, 0, 0, 0];
var fourth = [0, 0, 2, 4, 4, 0];
var fifth = [0, 0, 0, 2, 0, 0];
var sixth = [0, 0, 1, 2, 4, 0];

arr = [first, second, third, fourth, fifth, sixth];

function pulaLinha() {
    document.write('<br><hr>');
}

function hourglassSum(arr) {

    var hourglass = arr;

    for (let i = 0; i < hourglass.length; i++) {
        for (let j = 0; j < hourglass[i].length; j++) {
            document.write(hourglass[i][j])
            pulaLinha() 
        }
    }

}

document.write(hourglassSum(arr));