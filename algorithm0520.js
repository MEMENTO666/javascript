const arr = [ "a", "b", "c"];
// ! 원소값 중 "a"를 "c" 다음으로 놓는 방법이 있을까?

//
// ! 원소값중 "c"를 "a" 앞으로 놓는 방법이 있을까?


// let temp; //? 'temp' 라는 변수 선언
// temp = arr[0]; //? 'temp'에 arr 에 첫번째 인자를 선언
// console.log(temp);
// arr.shift(); // ? 배열을 왼쪽으로 한칸씩 이동, "a" 인자 사라짐.
// console.log(arr);
// arr.push(temp); // ? 배열 끝에 첫번째 인자를 다시 추가함.
// console.log(arr);


// ! 혹은 ["b", "a", "c"] 형태로 바꿀 수 있을까?

let temp = arr.splice(0,1)

arr.splice(1,1,temp[1]);
arr.push("a");
arr.push("c");

console.log(arr);



