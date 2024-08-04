//Viết hàm kiểm tra một số có phải là số nguyên tố hay không
let number = parseFloat(prompt("Vui lòng nhập số"));

function isPrime(num){
    if (isNaN(num) || num <= 1) {
        return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0){
            return false;
        }
    }
    return true;
}

let input = isPrime(number);
if (input){
    alert("Số " + number + " là số nguyên tố");
} else alert ("Số " + number + " không phải số nguyên tố");