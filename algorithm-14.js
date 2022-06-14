
const arr = ["a", "b" , "c"];
// ! 원소값 중 "a"를 "c" 다음으로 놓는 방법.

// arr.shift("a")
// arr.push("a");

// console.log(arr);

// // !원소값 중 "c"를 "a" 앞으로 놓는 방법.

// arr.pop();
// arr.unshift("c");
// console.log(arr);

// !원소값 중 ["b","a","c"] 형태로 바꾸는 법.

arr.slice(arr.slice(0,3) ,arr.slice(1,2), arr.slice(0,1));
console.log(arr);