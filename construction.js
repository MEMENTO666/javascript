// console.log("test");


// const memberOne = {
//   name : "이성윤",
//   gender : "male",
//   age : 102 ,
//   deskNo : 10,
//   glasses : false,
//   married : true,
//   bald : false,
//   cellPhone : "apple"
// }

// const memberOne2 = {
//   name : "김연희",
//   gender : "female",
//   age : 64 ,
//   deskNo : 40,
//   glasses : false,
//   married : true,
//   bald : false,
//   cellPhone : "galaxy"
// }

// console.log(memberOne.name);
// console.log(memberOne2.name);

// ! 생성자 함수 : constructor function
// ! 객체를 찍어내는 거푸집 틀.
// ! 석고(?)

function Member(name,gender,age,deskNo,glasses,married,bald,cellphone) { 
 this.name = name;
 this.gender = gender;
 this.age = age,
 this.deskNo = deskNo;
 this.glasses = glasses;
 this.married = married;
 this.bald = bald;
 this.cellPhone = cellphone;
}
// todo 찍어내는 거푸집 틀 생성 완료 //


const memberOne = new Member("이명철","male",69,40,false,true,true,"galaxy");
console.dir(memberOne);

const memberTwo = new Member("이성윤","male",20,10,false,true,false,"iphone");
console.dir(memberTwo);



const testOne = new Date();
console.dir(testOne.getHours());

function ampm(hour,msg) {
if (hour > 12) {
  console.log(msg + (hour-12) + "시 입니다.");
}else {
  console.log("오전 : " + hour );
}
}
ampm(testOne.getHours(),"오후");


// const testOne = new Date();
// console.dir(testOne.getMonth());
// console.dir(testOne.getDate());

// function monthDate (month, date) {
//   if (month > 12) {
//     console.log(date + (month-12));
    
//   } else {
//     console.log(month+"월");
//     console.log(date +"일입니다");
//   }
// }

// monthDate(testOne.getMonth(),);