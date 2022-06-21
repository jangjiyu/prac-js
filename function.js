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



