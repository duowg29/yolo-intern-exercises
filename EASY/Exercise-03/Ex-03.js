// Viết hàm kiểm tra tính đồng nhất chẵn lẻ của 2 số

let a = parseFloat(prompt("Nhập số a:"));
let b = parseFloat(prompt("Nhập số b:"));

if(a % 2 === 0 && b % 2 === 0){
    alert("Hai số " + a + " và " + b + " đều cùng chẵn");
} else if(a % 2 !== 0 && b % 2 != 0){
    alert("Hai số " + a + " và " + b + " đều cùng lẻ");
    } else alert("Hai số " + a + " và " + b + " là 1 chẵn 1 lẻ");
