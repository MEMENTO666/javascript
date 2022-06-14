let max = new Map();

max.set("id",0);
max.set("이름","마이클");
max.set("전공","영문학");
max.set("나이",25);

let michael = new Map ([
  ["id",0],
  ["이름","마이클"],
  ["전공","영문학"],
  ["나이",29]
  
])

max.get("이름");
max.delete("나이");
console.log(max.get("나이"));
max.clear(); //! clear로 맵 안의 프로퍼티를 전부 삭제.
console.log(max);

const errorMessageObj = {
  404 : "페이지가 없습니다",
  500 : "서버 오류입니다",
  401 : "권한이 없습니다"
}

const errorMessageMap = new Map ([
  [404, "페이지가 없습니다"],
  [500, "서버 오류입니다"],
  [401, "권한이 없습니다"],
])


errorMessageObj[404];
console.log(errorMessageObj[404])
//? 객체의 경우 문자열만 통해서만 조회 가능, . 뒤에 숫자를 입력하면 에러 발생.
//? 그러나 맵 객체에서는 get 메소드의 인자로 넘겨줘도 값을 제대로 찾아온다.

errorMessageMap.get(404);
console.log(errorMessageMap.get(404))