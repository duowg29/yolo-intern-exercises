//Viết hàm in ra n số đầu tiên trong chuỗi fibonaci

function countFibonaci(number){
    if (number <= 0) {
        alert("Số lượng phần tử phải lớn hơn 0.");
        return;
    }
    let fiboArray = [];
    fiboArray.push(0);
    if (number > 1){
        fiboArray.push(1);
    }
    for (let i = 2; i < number; i++){
        fiboArray.push(fiboArray[i-1] + fiboArray[i-2]);
    }

    fiboArray.join(", ");

    return fiboArray;
}


let input = parseInt(prompt("Nhập số lượng phần tử của dãy fibonaci"));
let result = countFibonaci(input);
alert("Dãy Fibonacci với " + input + " số: " + result);