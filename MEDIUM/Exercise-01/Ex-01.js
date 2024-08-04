//Viết hàm sắp xếp 1 mảng các số theo thứ tự tăng hoặc giảm dần theo yêu cầu chọn của người dùng 

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

function sortArray(array, order) {
    if (order === "tăng") {
        for (let i = 0; i < array.length - 1; i++){
            for (let j = 0; j < array.length - 1 - i; j++){
                if (array[j] > array[j+1]){
                    let temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                }
            }
            
        }
        return array;
    } else if (order === "giảm") {
        for (let i = 0; i < array.length - 1; i++){
            for (let j = 0; j < array.length - 1 - i; j++){
                if (array[j] < array[j+1]){
                    let temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                }
            }
            
        }
        return array;
    } else {
        alert("Thứ tự không hợp lệ! Vui lòng nhập 'tăng' hoặc 'giảm'.");
        return array;
    }
}
 
let array = inputArray();
let order = prompt("Nhập lựa chọn sắp xếp 'tăng' hoặc 'giảm'(lưu ý viết đúng định dạng và không sử dụng dấu cách)");
let sortedArray = sortArray(array, order);
alert("Mảng sau khi sắp xếp là: " + sortedArray.join(', '));