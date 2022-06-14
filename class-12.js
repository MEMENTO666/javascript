
// let a = 1;
// // 함수 밖에 있지만 어디에 잘 스며들어 있는 상태, (global scope 라고 함.)
// // 언제든지 꺼내서 사용할 수 있다.

// function b () { // 함수 안에 있는 "이성윤"은 지역 변수이다 (local scope 라고 함.)
//   // 함수 b는 목적이 콘솔을 찍고 종료하는 기계.
//   // return 값은 없다. undefined 값이 리턴된다.
  
//   // console.log(a);
//   var c = "이성윤";

  
// }
// console.log(b());


let current = 0; 

let timer = setInterval (function() {
  console.log(current);
  current++;
  if(current === 60) {
    console.log ("1분이 경과됨");
    clearInterval (timer);
  }
}, 100);
