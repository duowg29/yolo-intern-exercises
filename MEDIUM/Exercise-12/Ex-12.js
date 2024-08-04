//Cho hàm random() trả về giá trị từ 0 đến 1 (có lấy 0 và 1)
//Viết hàm random(a) trong đó dùng hàm random() để trả về một giá trị random trong khoảng từ -a đến a

let a = prompt("Nhập một số để random từ âm của số đó đến số đó");
let temp = Math.random();
let result = Math.round((temp * 2 - 1) * a);
alert("Một số bất kì từ -" + a + " đến " + a + ": " + result);