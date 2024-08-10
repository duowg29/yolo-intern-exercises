//Viết hàm tình tổng số lần xuất hiện của một string a trong string b

function countOccurrences(mainString, substring) {
    let count = 0;
    let index = 0;

    while ((index = mainString.indexOf(substring, index)) !== -1) {
        count++;           
        index += substring.length;  
    }

    return count;
}

let mainString = prompt("Nhập chuỗi chính:");
let substring = prompt("Nhập chuỗi con:");

let countMessage = countOccurrences(mainString, substring);

alert("Số lần chuỗi con xuất hiện " + countMessage);

