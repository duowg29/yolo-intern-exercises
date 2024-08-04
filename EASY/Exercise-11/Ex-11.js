//Viết hàm tìm giá trị nhỏ nhất trong 1 mảng các số

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
function minNumber(array){
    let min = array[0];
    for(let i = 0;i <= array.length;i++ ){
        if(array[i] > min){
            min = array[i];
        }
    }
    return min;
}

let array = inputArray();
let minNum = minNumber(array);
alert("Số nhỏ nhất trong mảng là: " + minNum);
