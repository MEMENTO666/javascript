const arrExample = ["피카츄", "라이츄", "파이리", "꼬부기", "버터풀", "야도란" , "피존투", "또가스", "우린", "서로", "모습은", "달라도"]

const arrExample2 = ["또도가스","아보크"];

// ****************!! forEach()***************//
// arrExample.forEach(function (index,element) {
//   console.log(index,element);
// })
// ? 배열의 반복문 / 배열에서만 사용하는 메서드
// ? 배열의 처음부터 마지막 요소까지 반복하여 실행
// ? 인자로 콜백함수를 받아옴
// ? 주어진 콜백함수를 배열 요소 각각에 대해 실행
//todo 전체 선택자를 주로 이용하여 사용
// querySelectorAll () 



// //************!!push()****************** */
// arrExample.push("우리는 모두 친구");
// console.log(arrExample);

// ***********!!pop()******************** */
// arrExample.pop();
// console.log(arrExample); 

// **************!!shift()****************
  // arrExample.shift();
  // console.log(arrExample);

  // *******************!!unshift() *************

  // arrExample.unshift("자 이제 시작이야");
  // console.log(arrExample);

  // ***********************!!indexOf()*************
// 
  // let state = arrExample.indexOf("또가스");
  // console.log(state);

  // ***************!!splice()***********************
  // arrExample.splice(2,5);
  // console.log(arrExample);

  // **************!!slice()*******************

  // let arrslice = arrExample.slice(2,5);
  
  // console.log(arrslice);

  //  **************!! from() ****************

  // ????????????????????????????????????????

  // *************!! isArray () ********************
  
  // let ar = [];
  // let result = Array.isArray(ar);
  // console.log(result); // true;

  // let br = {};
  // let result2 = Array.isArray(br);
  // console.log(result2);

  // ******************!! at () ******************

//   console.log(arrExample.at(-1));

  // **************************!! concat () *******************

  // ???????????????????????????????????????????????????????????????

  // ***********************!! every() ********************************

  // ???????????????????????????????????????????????????????????????????

  // **************************!! filter () ***************************

  const number = [1,2,3,4,5];

  const filter1 = number.filter(currentNumber => currentNumber % 2 ===1);

  console.log("filter1=", filter1);   // 뭔소린지 모르겠음.

  // **********************!! findIndex () ***********************
//   const arr = [5, 6, 9, 1, 6, 3, 2, 1, 2, 7, 9, 4, 3];

//   const find1 = arr.findIndex((element, index, array) => {
//       return index < 7 && index > 5;
//   });
//   const find2 = arr.findIndex((element, index, arr) => element === 3);
//   const find3 = arr.findIndex((e) => e > 8);
//   const find4 = arr.findIndex((e) => e > 10);
  
//   console.log('findIndex1:', find1);
//   console.log('findIndex2:', find2);
//   console.log('findIndex3:', find3);
//   console.log('findIndex4:', find4);
//   findIndex1: 6
//   findIndex2: 5
//   findIndex3: 2
//   findIndex4: -1
  
  // todo 뭔소린지 모르겠음

  // *********************!! includes () ************************
  // arrExample.includes
  // arrExample2.includes


  // console.log(arrExample.includes("피존투"));
  // console.log(arrExample.includes("또도가스"));
  // console.log(arrExample2.includes("또도가스"));

  // ************************!! join () **************************

  // let arr = ["아버지","가방에","들어가신다"]

  // let arrJoin1 = arr.join();
  // console.log(arrJoin1)
  // let arrJoin2 = arr.join("");
  // console.log(arrJoin2)
  // let arrJoin3 = arr.join("//");
  // console.log(arrJoin3)

// ****************************!! map() ************************
//  ?????????????????????????????????????????????????????

// **************************!! reduce () *****************************

// ????????????????????????????????????????????????????????????????

// **************************!! sort () *************************

// let a = [6,3,4,5,1,8,2,7,9];

// a.sort()
// console.log(a);

// let b = [9,7,2,8,1,5,4,3,6]

// a.sort(function (a,b){ return b-a});
// console.log(a);

// ****************!! toString () ****************

// let num = 12345;

// console.log(num.toString(5));
// console.log(typeof(num.toString(2)));

// ***************!! values () ******************

// let a = [];
// console.log(a);
// let b = true;
// console.log(b);
// let c = {
//   name : "lee" ,
//   gender : "male" 
// }
// console.log(c);
