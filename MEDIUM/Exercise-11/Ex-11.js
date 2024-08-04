//Cho hàm random() trả về giá trị từ 0 đến 1 (có lấy 0 và 1)
//Viết hàm random(a) trong đó dùng hàm random() để trả về một giá trị random trong khoảng từ 0 đến a

let a = prompt("Nhập một số để random từ 0 đến số đó");
let temp = Math.random();
let result = Math.round(a*temp);
alert("Một số bất kì từ 0 đến" + a + ": " + result);