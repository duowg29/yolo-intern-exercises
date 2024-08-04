//Viết hàm đảo ngược thứ tự của một mảng các số

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

function reverseArray(array){
    if (array.length === 0){
        return 0;
    }
    let reversedArray = [];
    for(let i = array.length - 1; i >= 0; i--){
        reversedArray.push(array[i]);
    }
    return reversedArray;
}

let array = inputArray();
let reversedArray = reverseArray(array);
alert("Mảng sau khi đảo ngược là: " + reversedArray.join(', '));
