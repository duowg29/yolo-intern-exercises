//Viết hàm nối 2 mảng số đã sắp xếp sau đó theo thứ tự tăng dần

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
    alert("Mảng sau khi nối và sắp xếp là: " + result.join(', '));
}

