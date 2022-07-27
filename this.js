// this는 함수가 호출될 때 정해진다! (렉시컬 스코프처럼 작성?될 때 정해지는 게 아님)

// 아래 세 가지 경우에는 this가 window this가 아님
// 1) new
// 2) bind, apply, call
// 3) 객체에 붙여서 호출하는 경우 (화살표 함수의 경우 해당X -> 화살표 함수는 부모의 this를 받아옴)

// 1)
function Human(name) {
  this.name = name;
}

new Human("me"); // this.name는 me

// 2)
function sayName() {
  console.log(this.name);
}
sayName(); // undefined

sayName.bind({ name: "mike" })(); // mike
// bind는 this를 바꾼 새로운 함수를 만들어줌

sayName.apply({ name: "james" }); // james
// apply는 새로운 함수를 만들고 호출까지 해줘서 마지막에 ()호출할 필요 없음

sayName.call({ name: "jake" }); // jake

// 참고 - apply, call 비교
function add(a, b) {
  return a + b;
}
add.apply(null, [3 + 5]); // 위의 add 함수에서 this를 안 써줬으므로 굳이 넣어줄 필요 없어서 null로 설정.
add.call(null, 3, 5); //  ''
// call은 매개변수를 순서대로 넣어주고 apply는 배열로 묶어서 넣어줌!

// 3)
const obj2 = {
  name: "me",
  sayName2() {
    console.log(this.name);
  },
};
obj2.sayName2(); // me  // this는 함수가 호출 될 때 정해진다! 여기선 객체에 붙여서 호출하므로 this는 객체가 됨.

const sayN = obj2.sayName2;
sayN(); // undefined  // this는 함수가 호출 될 때 정해진다! 여기선 위와 달리 그냥 함수만 호출하므로 this는 window.

const obj3 = {
  name: "me",
  sayName3: () => {
    // method로 사용되는 화살표 함수 // 이 때 window 참조
    console.log(this.name);
  },
};
obj3.sayName3(); // undefined  // 객체에 붙여서 호출했지만 화살표 함수이므로 화살표 함수가 가르키는 부모 스코프를 참조. (sayName3 변수 안이므로, 그 밖의 name 참조 못 함.)

const obj4 = {
  name: "myname",
  sayName4() {
    console.log(this.name); // myname
    function inner() {
      console.log(this.name); // undefined  // this는 함수가 호출 될 때 정해진다!
    }
    inner();
  },
};

obj4.sayName4();

const obj5 = {
  name: "myname",
  sayName5: () => {
    // method로 사용되는 화살표 함수 -> 이 때 this는 window 참조
    console.log(this.name); // undefined
    function inner2() {
      console.log(this.name); // undefined // this는 함수가 호출 될 때 정해진다!
    }
    inner2();
  },
};
obj5.sayName5();

const obj6 = {
  name: "myname",
  sayName6() {
    console.log(this.name); // myname // 부모 함수 sayName6()의 this이므로 myname
    const inner3 = () => {
      console.log(this.name); // myname // 화살표 함수이므로 부모함수 sayName6()의 this를 참조하여 myname이 됨.
    };
    inner3();
  },
};
obj6.sayName6();

// this를 분석할 수 없는 케이스
const header = document.querySelector(".MainPage__SectionTitle-sc-fp90zm-13"); // 대애충 '공지사항' 헤더 부분
header.addEventListener("click", function () {
  console.log(this);
});
// 이때 this는 header가 됨.
// this는 호출될 때 결정되는데, 이 경우 funtion()이 호출된 게 아니라 addEventListener가 호출된 것.
// addEventListener의 규칙?에 따라 앞에 붙은 객체(위의 경우header)가 this가 됨.
// 이런 경우는 겉으로 보고 분석할 수 없고 공식문서에서 addEventListener 부분 봐야함.
// -> 걍 외우는 수밖에.. (참고로 addEventListener는 c++로 만들어졌다.)

// 이 때 함수가 화살표 함수라면?
const header2 = document.querySelector(".MainPage__SectionTitle-sc-fp90zm-13");
header2.addEventListener("click", () => {
  console.log(this);
});
// 이때 this는 undefiend가 됨.
// 화살표 함수는 부모를 참조하는데 이 경우 부모가 안 보임 (겉으로 보고 찾을 수 없음)
// -> 부모는 annonymous가 되어 this는 undefiend임.
