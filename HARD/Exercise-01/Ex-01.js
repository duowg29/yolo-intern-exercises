//Viết hàm đảo ngược ký tự của từng từ trong một câu



function reverseSentence(sentence) {
    let reversedWords = [];

    for (let i = sentence.length - 1; i >= 0; i--) {
        reversedWords.push(sentence[i]);
    }

    return reversedWords.join(' ');
}


let input = prompt("Nhập vào một câu");
let result = reverseSentence(input);

alert ("Câu sau khi đảo ngược từng kí tự là: " + result);