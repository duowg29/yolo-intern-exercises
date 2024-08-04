//Viết hàm tìm số dư của a chia cho b (không dùng toán tử % hoặc toán tử tương tự)

let input1 = parseFloat(prompt("Vui lòng nhập số chia"));
let input2 = parseFloat(prompt("Vui lòng nhập số bị chia"));

function divide(a, b){
    if (a < b){
        return a;
    }
    let absA = Math.abs(a);
    let absB = Math.abs(b);
    while (absA >= absB) {
        absA -= absB;
    }
    if(a > 0 && b > 0){
        return absA;
    } else return -absA;
}

if (input2 === 0) {
    alert("Không thể chia cho 0");
} else alert("Số dư là: " + divide(input1, input2));

