//Viết hàm tìm tổng số các phần tử của chuỗi a không có trong chuỗi b

function countCharacterOccurrences(mainString, substring) {
    let count = 0;

    for (let char of substring) {
        let temp = mainString.split(char).length - 1;
        
        if (temp === 0) {
            count += substring.split(char).length - 1;
        }
    }

    return count;
}

let mainString = prompt("Nhập chuỗi chính:");
let substring = prompt("Nhập chuỗi con:");

let occurrenceCount = countCharacterOccurrences(mainString, substring);

alert("Tổng số các ký tự của chuỗi con không có trong chuỗi chính là: " + occurrenceCount);