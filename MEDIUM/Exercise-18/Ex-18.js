//Viết hàm cắt string theo vị trí bắt đầu và số ký tự cần cắt

function cutString(input, start, stringLength){
    let end = stringLength + start;
    if (start < 0 || end > inputString.length || stringLength < 0) {
        alert("Chuỗi không hợp lệ");
        return "";
    }
    let slicedString = input.slice(start, end);
    return slicedString;
}


let inputString = prompt("Nhập vào một chuỗi");
let start = parseInt(prompt("Nhập vị trí bắt đầu:"));
let stringLength = parseInt(prompt("Nhập độ dài của chuỗi:"));
let result = cutString(inputString, start, stringLength);
alert("Chuỗi sau khi cắt từ vị trí " + start + " với độ dài " + stringLength + " là: " + result);