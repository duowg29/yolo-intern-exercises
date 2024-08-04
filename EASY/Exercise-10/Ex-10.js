//Viết hàm tìm giá trị lớn nhất trong 1 mảng các số 

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
function maxNumber(array){
    let max = array[0];
    for(let i = 0;i <= array.length;i++ ){
        if(array[i] > max){
            max = array[i];
        }
    }
    return max;
}

let array = inputArray();
let maxNum = maxNumber(array);
alert("Số lớn nhất trong mảng là: " + maxNum);


