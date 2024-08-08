/*
Cho hàm random() trả về giá trị từ 0 đến 1 (có lấy 0 và 1)
Viết hàm randomRange(a, b) trong đó dùng hàm random() để trả về một giá trị random trong khoảng từ a đến b
*/
function randomRange(a, b){
    return a + (b - a) * Math.random();
}
let a = parseInt(prompt("Nhập một số a"));
let b = parseInt(prompt("Nhập một số b"));

let result = Math.round(randomRange(a, b));
alert("Một số bất kì trong khoảng từ " + a + " đến " + b + " là: " + result);