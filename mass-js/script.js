// let arr = ["Vanya", "Egor", "Satana"];

// arr[3] = "Slava";
// arr[4] = {ip : "127.0.0.1"};
// arr.push("kotik");
// alert(arr.shift());
// alert(arr.unshift("petya"));
// alert(arr);
// alert(arr[arr.length-1]);
// alert(arr.pop());
// console.log(arr);

// let fruits = ["apple", "banana", "orange", "kiwi"];
// let fruits2 = fruits.length / 2;
// let g1 = []
// let g2 = []
// for(i= 0; i<fruits2; i++){
//     g1.push(fruits[i]);
// }
// for(i= fruits.length-fruits2; i<fruits.length; i++){
//     g2.push(fruits[i]);
// }

// console.log(g1);
// console.log(g2);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const middlsuka = Math.floor(numbers.length / 2);
// const sumOfNumbers = numbers.slice(middlsuka).reduce((numbers, middlsuka) => numbers + middlsuka, 0);
// console.log(sumOfNumbers);

const arr =[4, 5, 3, 8, 10, 1, 7, 6, 9, 2];

function bubbleSort(arr) {
    for (let n = 0; n < arr.length - 1; n++) { 
      for (let j = 0; j < arr.length - n - 1; j++) { 
        if (arr[j] > arr[j + 1]) { 
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
        }
      }
    }
    return arr;
  }
  
  console.log(bubbleSort(arr));