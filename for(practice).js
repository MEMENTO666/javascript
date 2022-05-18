// for (let i = 1; i < 10; i++) {
//   console.log(i);
// }


// const array1 = [5,10,15];
// const array2 = [10,20,30];

// for (let i =0; i<array1.length; i++) {
//   for (let j = 0; j < array2.length; j++) {
//     if (array1[i] === array2[j]) {
//       console.log(array2[j]);
//     }
//   }
// }

// let result = 0;

// for (let i=0; i < 101; i +=2) {
//   result +=i;
//   console.log(i);
// } 

let sample = [10,20,30,5,50,60,70,44,12,77];
let temp = sample[0];

for (let i = 0; i < sample.length; i++) {
  if (temp > sample[i]) {
    temp = sample[i];
  }
}
console.log(temp);