//Viết hàm tìm vị trí một chuỗi trong một chuỗi khác

function findSubstring(mainString, substring) {
    let index = mainString.indexOf(substring);
    if (index !== -1) {
        return index;
    } else {
        return "Chuỗi con không được tìm thấy.";
    }
}

let mainString = prompt("Nhập chuỗi chính:");
let substring = prompt("Nhập chuỗi con:");

let position = findSubstring(mainString, substring);

alert("Vị trí của chuỗi con là: " + position);