//Viết hàm tìm tổng số các phần tử của chuỗi a trong chuỗi b

function countCharacterOccurrences(mainString, substring) {
    let count = 0;

    for (let char of substring) {
        let temp = mainString.split(char).length - 1;
        count += temp;
    }

    return count;
}

let mainString = prompt("Nhập chuỗi chính:");
let substring = prompt("Nhập chuỗi con:");

let occurrenceCount = countCharacterOccurrences(mainString, substring);

alert("Số lần chuỗi con xuất hiện " + occurrenceCount);

