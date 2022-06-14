


// function textMachine (startValue, endValue, textValue) {

//  let result = textValue ;

//  for (let i = startValue; i <= endValue; i ++) {

// }

// return result;

// }
// console.log(textMachine(1,2,"콘솔"));

// function a() {
//   console.log("test");
//   // return "할롱";
// }

// a();
// console.log(a());

function b (first, second) {
  if(typeof first === "number") {
  return first - second;
}else {
  console.error ("첫번째 매개변수 타입이 숫자가 아닙니다.");
}
}
console.log(b("천재",2));