
let value = 0;
// 변수 선언과 동시에 값을 대입했다 = "초기화 했다" (init)
// value = 100;
// 값을 새로 할당했다 (assignment)
// = (대입 연산자를 활용)

console.log(value);


let = interval = 100;
const timer = setInterval (function() {
  // 함수를 변수에 담는 행위 = 함수 리터럴 / 함수 표현식 이라고 한다.
  // 식별하기 위해 변수에 대입했다.
  // 변수 timer 는 함수 serInterval 을 가리킨다.
  console.log(value);
  value ++ ;  

  if(value > 100) {
    clearInterval(timer);
  }
}, interval);
// 첫번째 파라미터가(매개변수)함수이다, 매개변수 자리에 실행항 함수가 자리잡은 것을 "콜백함수" 라고 한다.
// callback function
// callback function hell = 굉장히 헷갈리는 포인트가 있게 될 것.