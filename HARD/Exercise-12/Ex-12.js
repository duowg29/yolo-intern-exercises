//Viết hàm trả về số chữ số 0 xuất hiện trong giá trị của n giai thừa

function factorial(number) {
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}

function countNumberZero(number){
    let numberStr = number.toString();
    let count = 0;

    for (let char of numberStr) {
        if (char === '0') {
            count++;
        }
    }

    return count;
}

let inputNumber = parseInt(prompt("Nhập một số nguyên"));
let factorialNumber = factorial(inputNumber);
let result = countNumberZero(factorialNumber);
alert("Số chữ số 0 của " + inputNumber + "! là: " + result);