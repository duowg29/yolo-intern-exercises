// Viết hàm nối 2 mảng số với nhau


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

function mergeArrays(array1, array2){
    return array1.concat(array2);
}

let array1 = inputArray();
let array2 = inputArray();

let mergedArray = mergeArrays(array1, array2);

alert("Mảng sau khi nối là: " + mergedArray);