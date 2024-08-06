/*
Luật tính thuế thu nhập cá nhân ở việt nam như sau
 - nếu thu nhập tháng cao hơn 50 triệu công dân phải nộp thuế là 20%
 - nếu thu nhập tháng từ 20 đến 50 triệu công dân phải nộp thuế 10%
 - nếu thu nhập tháng dưới 20 triệu công dân phải nộp thuế 5%
Viết hàm tính số tiền thuế phải nộp trong n tháng của một người
*/

function inputArray() {
    let array = prompt("Nhập lương từng tháng, cách nhau bằng dấu cách (triệu đồng)");
    if (array === null || array.trim() === "") {
        alert("Bạn chưa nhập bất kỳ số nào.");
        return [];
    }
    let stringArray = array.split(' ');
    let numberArray = stringArray.map(Number);
    alert("Lương từng tháng đã nhập: " + numberArray.join(', '));
    return numberArray;
}

function calculateTax(monthlyIncomes){
    let totalTax = 0;

    for (let income of monthlyIncomes){
        if (income > 50){
            totalTax += income * 0.2;
        } else if (income >= 20){
            totalTax += income * 0.1;
        } else {
            totalTax += income * 0.05;
        }
    } 

    return totalTax;
}

let incomes = inputArray();
if (incomes.length > 0) {
    let tax = calculateTax(incomes);
    alert("Tổng số tiền thuế cần nộp là: " + tax + " triệu VND");
} else {
    alert("Không có dữ liệu để tính thuế.");
}