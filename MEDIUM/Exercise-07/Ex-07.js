//Viết hàm lấy 1 số phần từ của mảng số dựa vào vị trí đầu và cuối

function inputArray(){
    let array = prompt("Nhập dãy các số, cách nhau bằng dấu cách");
    if (array === null || array.trim() === "") {
        alert("Bạn chưa nhập bất kỳ số nào.");
        return [];
    }
    let stringArray = array.split(' ');
    let numberArray = stringArray.map(Number);
    alert("Mảng các số đã nhập: " + numberArray.join(', '));
    return numberArray;
}

function getSubArray(array, start, end) {
    if (start < 0 || end >= array.length || start > end) {
        alert("Vị trí không hợp lệ.");
        return [];
    }
    return array.slice(start, end + 1);
}

let numbers = inputArray();

let start = parseInt(prompt("Nhập vị trí bắt đầu (từ 1):"), 10);
let end = parseInt(prompt("Nhập vị trí kết thúc (từ 1):"), 10);

let subArray = getSubArray(numbers, start, end);

alert("Mảng mới từ vị trí " + start + " đến vị trị " + end + " là: " + subArray.join(', ')); 
