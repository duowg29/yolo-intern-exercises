//Viết hàm đổi từ số tiền bắng số sang số tiền bằng chữ


function numberToWords(number) {
    const units = ["", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
    const teens = ["mười", "mười một", "mười hai", "mười ba", "mười bốn", "mười lăm", "mười sáu", "mười bảy", "mười tám", "mười chín"];
    const tens = ["", "", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];
    const thousands = ["", "nghìn", "triệu", "tỷ"];

    if (number === 0) return "không";

    let words = '';
    let index = 0;

    while (number > 0) {
        let part = number % 1000;
        if (part !== 0) {
            let partWord = convertPart(part);
            words = partWord + (thousands[index] ? ' ' + thousands[index] : '') + ' ' + words;
        }
        number = Math.floor(number / 1000);
        index++;
    }

    return words.trim();
}

function convertPart(number) {
    const units = ["", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
    const teens = ["mười", "mười một", "mười hai", "mười ba", "mười bốn", "mười lăm", "mười sáu", "mười bảy", "mười tám", "mười chín"];
    const tens = ["", "", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];

    let hundreds = Math.floor(number / 100);
    let remainder = number % 100;
    let words = '';

    if (hundreds > 0) {
        words += units[hundreds] + " trăm ";
    }

    if (remainder > 0) {
        if (remainder < 10) {
            words += "lẻ " + units[remainder];
        } else if (remainder < 20) {
            words += teens[remainder - 10];
        } else {
            let ten = Math.floor(remainder / 10);
            let unit = remainder % 10;
            words += tens[ten];
            if (unit > 0) {
                words += " " + units[unit];
            }
        }
    }

    return words.trim();
}

let inputNumber = parseInt(prompt("Nhập số tiền: "), 10);
let words = numberToWords(inputNumber);
alert("Số tiền vừa nhập là: " + words +  " VND");