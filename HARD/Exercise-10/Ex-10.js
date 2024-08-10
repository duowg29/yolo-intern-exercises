//Viết hàm xáo trộn thứ tự của các phần tử trong mảng số


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

function mixArray(array) {
    let mixedArray = [];

    while (array.length > 0) {
        let randomIndex = Math.floor(Math.random() * array.length);
        mixedArray.push(array.splice(randomIndex, 1)[0]);
    }

    return mixedArray;
}

let array = inputArray();
let result = mixArray(array);
alert("Mảng sau khi xáo trộn là: " + result.join(', '));
