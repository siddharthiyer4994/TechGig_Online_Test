process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});


process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    const arrLength  = input_stdin_array.shift();
    let minSteps =-1;
    if (Number(arrLength) >= 0 && Number(arrLength) <= 1000) {
        const numArr = input_stdin_array.map(c => Number(c));
        minSteps = stepCount(numArr);
        //Write code here
    }
    process.stdout.write(""+minSteps+"\n");
});

function stepCount(arr) {
    let x = arr.length;
    for(let i = arr.length -1 ; i >=0;i--) {
        if (arr[i] === x) {
            x--;
        }
    }
    return x;
}
