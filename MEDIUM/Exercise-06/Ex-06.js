//Viết hàm chia giá trị của 2 mảng số

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

function divideArrays(array1, array2) {
    let length = Math.max(array1.length, array2.length);
    let result = [];

    for (let i = 0; i < length; i++) {
        let value1 = i < array1.length ? array1[i] : 0;
        let value2 = i < array2.length ? array2[i] : 0;
        result.push(value1 / value2);
    }

    return result;
}
let array1 = inputArray();
let array2 = inputArray();

let dividedArray = divideArrays(array1, array2);

alert("Mảng sau khi chia là: " + dividedArray.join(', '));