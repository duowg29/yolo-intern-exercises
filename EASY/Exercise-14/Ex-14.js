//Viết hàm tìm vị trí của 1 số trong 1 mảng các số

function inputArray() {
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

function findNumber(array) {
    if (array.length === 0){
        return null;
    }
    let number = parseFloat(prompt("Nhập số cần tìm"));
    for(let i = 0; i < array.length; i++){
        if (array[i] === number){
            return i + 1;
        }
    }
    return null;
}

let array = inputArray();
let numberLocation = findNumber(array);
if (numberLocation !== null ){
    alert("Tìm được số trên tại vị trí: " + numberLocation);
} else alert("Không tìm được số trên");

