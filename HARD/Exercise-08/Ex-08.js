/*	
Ngân hàng nhà nước việt nam có các loại tiền 1 nghìn, 2 nghìn, 5 nghìn, 10 nghìn, 50 nghìn và 100 nghìn 500 nghìn
Viết hàm tính số đồng tiền ít nhất khi quy đổi một số tiền nhất định
*/

function MinMoney(number) {
    let denominations = [500000, 100000, 50000, 10000, 5000, 2000, 1000];
    let result = {};

    for (let denomination of denominations) {
        let temp = Math.floor(number / denomination);
        if (temp > 0) {
            result[denomination] = temp;
        }
        number %= denomination;
    }

    return result;
}

let inputNumber = parseInt(prompt("Nhập số tiền cần quy đổi:"), 10);

if (!isNaN(inputNumber) && inputNumber > 0) {
    let money = MinMoney(inputNumber);
    let resultMessage = "Số đồng tiền cần sử dụng là:\n";

    for (let denomination in money) {
        resultMessage += `${denomination} VND: ${money[denomination]} tờ\n`;
    }

    alert(resultMessage);
} else {
    alert("Vui lòng nhập một số tiền hợp lệ.");
}