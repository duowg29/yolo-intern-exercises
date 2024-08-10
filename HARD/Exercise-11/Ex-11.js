//Viết hàm trả về chữ số cuối cùng khác 0 của n giai thừa

function factorial(number) {
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}

function lastNonZeroDigitOfFactorial(number) {
    let fact = factorial(number);

    while (fact % 10 === 0) {
        fact /= 10;
    }

    return fact % 10;
}

let inputNumber = parseInt(prompt("Nhập một số nguyên:"));
let lastDigit = lastNonZeroDigitOfFactorial(inputNumber);
alert("Chữ số cuối cùng khác 0 của " + inputNumber + "! là: " + lastDigit);