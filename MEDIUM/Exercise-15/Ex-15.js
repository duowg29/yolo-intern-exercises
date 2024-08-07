//Viết hàm tình tổng số các chữ số của 1 số nguyên


function sumOfDigits(number){
    let count = 0;
    
    for (let char of number){
        count++;
    }

    return count;
}


let input = prompt("Nhập một số nguyên")
let result = sumOfDigits(input);
alert("Tổng các chữ số của " + input + " là: " + result);