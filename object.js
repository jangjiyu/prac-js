// 객체와 리터럴
// 단순 배열이 아닌 값의 이름과 속성값이 있는 배열 (여러개를 묶을 때 이름이 필요하다 -> 객체 리터럴 사용)
// name, year, month, date, gender 등의 정보들을 속성(property)라 함. 
// 중괄호 {} 사용

const 객체 = {
    '속성 1 이름': '속성 1 값',
    '속성 2 이름': '속성 2 값',
    '속성 3 이름': '속성 3 값',     // 마지막은 쉼표(,) 안 붙여도 되지만 다음에 추가할 거 대비해서 붙이는 게 나음.
}

const obj = {
    abc: 'hello',
    '2a': 'hello1',      // 숫자가 들어간 경우 ''붙이기
    'c a': 'hello2',     // 띄어쓰기 한 경우 ''붙이기
    'b-d': 'hello3',     // 특수문자 쓴 경우 ''붙이기
}
obj.abc;        // hello
obj['abc'];    // hello    대괄호[] 쓴 경우 ''붙이기, 따옴표'' 빼먹으면 abc라는 변수가 선언 됐을 시 그 변수의 값을 사용하게 됨.
// obj.2a;         // errorr   요런 특수한 애들은 대괄호 써줘야함
obj['2a'];      // hello1
obj.ca;         // undefined 

obj.def = 'bye';    // 추가
delete obj.def;     // 제거

// 함수와 배열도 객체이다!
function hello() {}
hello.a = 'really?';
console.log(hello.a);   // really?
const array = [];
array.b = 'wow';
console.log(array.b);   // wow
// 객체의 속성을 가짐. but 위처럼 쓰이진 않음 걍 예시~



// 메소드(method) - 객체 안에 들어있는 함수
const debug = {
    log: function(value) {
        console.log(value);
    }
};
debug.log('Hello, Method');
// debug라는 객체 안에 log라는 속성의 값을 넣음. 이 속성을 메소드라 함. debug.log(); 요렇게 함수처럼 호출.
// console.log도 동일. console이라는 객체 안에 log라는 메소드가 있는 것. (브라우저가 기본적으로 제공)



// 객체는 모양이 같아도 비교하면 false가 나옴
// {} === {}  -> false

const a = { name: 'jiyu' };     // 객체를 a라는 변수에 저장
const array = [1, 2, a];        // 이 때 배열 안의 a는 변수로 저장된 형태라 
console.log(a === array[2]);    // 같은 거임. true가 반환 됨.   // 객체를 변수에 저장해 두고 비교해야 true가 나옴
array === [1, 2, a];            // false. [1, 2, a]라는 새로운 객체가 생성 된 것이므로.
// 객체 2개를 만들어 비교 (새로운 객체 !== 새로운 객체)

'str' === 'str';
123 === 123;
false === false;
null === null;
undefined === undefined;
// 객체가 아닌 숫자, 문자열, 붙 값, null, undefined는 모두 true를 반환.

// 객체의 공간과 객체가 아닌 원시값들의 공간이 나뉘어져 있음. 객체들은 서로 참조 됨.
const b = { name: 'jiyu' };
const c = b;
b.name= 'hero';
console.log(c.name);    // hero // 객체들은 서로 참조 됨. b의 name을 바꾸면 c도 똑같이 바뀜.

// 객체가 아닌 경우
let d = 'jiyu';
let e = d;
d = 'hero';
console.log(e); // 'jiyu'   // d가 hero로 바뀌어도 e는 jiyu 그대로. 서로 참조X 