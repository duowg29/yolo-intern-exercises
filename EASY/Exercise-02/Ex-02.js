// Viết Hàm để tính a mũ b
let a = parseFloat(prompt("Nhập số a:"));
let b = parseFloat(prompt("Nhập số b:"));

function calculatePower(a, b) {
    return Math.pow(a, b);
}

let result = calculatePower(a, b);

alert("Kết quả của " + a + " mũ " + b + " là: " + result);