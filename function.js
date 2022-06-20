// function()
// () => {}  화살표함수(arrow function)

// function a() {}            함수 선언문(function declaration statement)           if, for, while, 함수선언문에는 보통 세미콜론(;) 안 붙임. (붙여도 상관X)
// const b = function() {};   함수 표현식(function expression)
// const c = () => {};        arrow function은 변수에 넣어 이름 붙여줘야 함.

// function a() {}  함수 선언
// a();             함수 호출(call)



// return : 반환값 return하고 그 함수 종료.  cf) return;은 return undefined;가 생략된 것.
// return undefined;는 작성하지 않아도 마지막에 생략되어 있음.(밑에 예시)
function a() {
    if (true) {
        return;             // true면 return undefined;하고 끝
    }
    console.log('hello');   // false면 hello
                            // 여기 return undefined;가 생략되어 있음.
}

function b() {
    console.log('hello');
    return;                 // return으로 함수 종료   
    console.log('bye');     // -> 이 줄은 실행 안 됨.
}


// 값을 여러개 return 받고 싶을 땐 - 배열로 or 객체 리터럴로
function c() {
    return [1, 5];
}



// 매개변수(parameter)와 인수(argument)
// parameter - 함수 선언, argument - 함수 호출

function d(parameter) {
    console.log(parameter);
}
d('argument');

function e(w, x, y, z) {
    console.log(w, x, y, z);
    console.log(arguments);             // 함수 안에선 arguments를 선언 안 해도 쓸 수 있음(화살표 함수 제외), 호출 할 때 넣었던 argument들이 뭐였는지 배열의 형태로 출력해줌.
}
e('Hello', 'Parameter', 'Argument');    // z값은 없으므로 undefined로 출력 됨. (남거나 많거나 하는 값들은 무시되고 짝지어짐)

function f(x, y) {
    return x + y;
}
f(3);                   // NaN 출력됨. -> 3 + undefined = NaN


// 밑의 세 가지 모두 같음.
function g(x, y, z) {
    return x * y *z;
}
console.log(g(2, 2, 2));

const h = (x, y, z) => {
    return x * y * z;
}
console.log(h(2, 2, 2));

const i = (x, y, z) =>  x * y * z;  // const g = (x, y, z) =>  (x * y * z);  헷갈리면 괄호 감싸줘도 됨.
console.log(i(2, 2, 2));



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
