//Viết hàm cắt string theo vị trí bắt đầu và vị trí kết thúc

function cutString(input, start, end){
    if (start < 0 || end > input.length || start > end) {
        alert("Vị trí không hợp lệ.");
        return "";
    }
    let slicedString = input.slice(start, end);
    return slicedString;
}


let inputString = prompt("Nhập vào một chuỗi");
let start = parseInt(prompt("Nhập vị trí bắt đầu:"));
let end = parseInt(prompt("Nhập vị trí kết thúc:"));
let result = cutString(inputString, start, end);
alert("Chuỗi sau khi cắt từ vị trí " + start + " đến vị trí " + end + " là: " + result);