//Viết hàm nhân giá trị của 2 mảng số

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

function multiplyArrays(array1, array2) {
    let length = Math.ma//Viết hàm nối 2 mảng số đã sắp xếp sau đó theo thứ tự tăng dần

    function inputArray() {
        let array = prompt("Nhập dãy các số theo thứ tự tăng dần, cách nhau bằng dấu cách");
        if (array === null || array.trim() === "") {
            alert("Bạn chưa nhập bất kỳ số nào.");
            return [];
        }
        let stringArray = array.split(' ');
        let numberArray = stringArray.map(Number);
        alert("Mảng các số đã nhập: " + numberArray.join(', '));
        return numberArray;
    }
    
    function mergeArray(array1, array2){
        for (let i = 0; i < array2.length; i++){
            array1.push(array2[i]);
        }
        
        return array1;
    }
    
    function selectionSort(array) {
        for (let i = 0; i < array.length - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < array.length; j++) {
                if (array[j] < array[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                let temp = array[i];
                array[i] = array[minIndex];
                array[minIndex] = temp;
            }
        }
        return array;
    }
    
    let array1 = inputArray();
    let array2 = inputArray();
    
    let mergedArray = mergeArray(array1, array2);
    let result = selectionSort(mergedArray);
    
    if (array1.length === 0 || array2.length === 0) {
        alert("Bạn chưa nhập đủ hai mảng.");
    } else {
        alert("Mảng sau khi nối và sắp xếp tăng dần là: " + result.join(', '));
    }
    
    x(array1.length, array2.length);
    let result = [];

    for (let i = 0; i < length; i++) {
        let value1 = i < array1.length ? array1[i] : 0;
        let value2 = i < array2.length ? array2[i] : 0;
        result.push(value1 * value2);
    }

    return result;
}
let array1 = inputArray();
let array2 = inputArray();

let mulArray = multiplyArrays(array1, array2);

alert("Mảng sau khi nhân là: " + mulArray.join(', '));