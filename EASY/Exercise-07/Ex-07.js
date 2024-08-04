// Viết hàm tính tổng số lẻ trong một mảng

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

function sumOddNumbers(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            sum += array[i];
        }
    }
    return sum;
}

let numbers = inputArray();
let oddSum = sumOddNumbers(numbers);
alert("Tổng các số lẻ: " + oddSum); 
