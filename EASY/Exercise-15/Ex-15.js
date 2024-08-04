//Viết hàm tính n giai thừa

function factorial(number) {
    if (number < 0) {
        return "Không thể tính giai thừa của số âm";
    } else if (number === 0) {
        return 1;
    } else {
        let result = 1;
        for (let i = 1; i <= number; i++) {
            result *= i;
        }
        return result;
    }
}

let inputNumber = parseInt(prompt("Nhập số cần tính giai thừa"));
let result = factorial(inputNumber);
alert("Giai thừa của " + inputNumber + " là: " + result);

