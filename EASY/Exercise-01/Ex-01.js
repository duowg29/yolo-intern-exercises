// Viết hàm hoán đổi giá trị của 3 số a, b và c với nhau

let a = parseFloat(prompt("Nhập số a:"));
let b = parseFloat(prompt("Nhập số b:"));
let c = parseFloat(prompt("Nhập số c:"));

alert("Giá trị ban đầu:\na = " + a + "\nb = " + b + "\nc = " + c);

function swapValues(a, b, c) {
    let temp = a;
    a = b;
    b = c;
    c = temp;
    return [a, b, c];
}

let swappedValues = swapValues(a, b, c);
a = swappedValues[0];
b = swappedValues[1];
c = swappedValues[2];

alert("Giá trị sau khi hoán đổi:\na = " + a + "\nb = " + b + "\nc = " + c);