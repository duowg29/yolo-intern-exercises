//Viết hàm tìm giá trị trung bình trong 1 mảng các số

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
function averageNumber(array){
    if (array.length === 0){
        return 0;
    }
    let sum = array[0];
    for(let i = 1;i < array.length;i++){
        sum += array[i];
    }
    let average = sum / array.length;
    return average;
}

let array = inputArray();
let aveNum = averageNumber(array);
alert("Giá trị trung bình của mảng là: " + aveNum);
