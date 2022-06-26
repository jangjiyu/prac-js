const arrayOfArray = [[1,2,3],[4,5]];
arrayOfArray[0];    //[1, 2, 3]

const everything = ['사과', 1, undefined, true, '', null, NaN];
console.log(everything.length);     // 7

const empty = [];
console.log(empty.length);      // 0

const findLastElement = ['a', 'b', 'c', 'd', 'e'];
console.log(findLastElement[findLastElement.length-1]);     // e

const target = [1, 2, 3, 4, 5];
target[target.length] = 6; // => target[5] = 6; (배열 마지막에 배열 요소 추가)
console.log(target);    // [1, 2, 3, 4, 5, 6]
target.push(7);         // push로 간단히 배열 마지막에 요소 추가
console.log(target);    // [1, 2, 3, 4, 5, 6, 7]

target.unshift(0);      // 배열 가장 앞에 요소 추가
console.log(target);    // [0, 1, 2, 3, 4, 5, 6, 7]
target[0] = 10;         // 배열 가장 앞에 추가X, 이렇게 할 경우 0번째 요소의 값을 변경함.
console.log(target);    // [10, 1, 2, 3, 4, 5, 6, 7]

// *const가 엄밀히 말하면 상수가 아닌 이유. 위처럼 객체의 내부 요소는 바꿀 수 있음.
// const target = [1, 2, 3];
// target = [4, 5];   => 요렇게 전체를 바꾸는 건 불가능. 새로운 값을 대입(=)하지 못 함. 再할당(=) 못 함.
// target[0] = 10;    => 내부 요소 변경은 가능.


// 첫번째 요소 제거
target.shift();     // unshift의 반대
console.log(target);    // [1, 2, 3, 4, 5, 6]


// 마지막 요소 제거
target.pop();       // push의 반대
console.log(target);    // [10, 1, 2, 3, 4, 5, 6]
target[target.length - 1] = null;   //null을 써서 제거? -> 불가.
console.log(target);    // [1, 2, 3, 4, 5, null]  -> null도 배열의 요소로 들어감

target.pop();     
console.log(target);    // [1, 2, 3 4, 5]


// 중간 요소 제거
const target2 = ['가', '나', '다', '라', '마'];
target2.splice(2, 1);     // index 2번부터 1개 제거 (= 2번만 제거)
console.log(target2);     // ['가', '나', '라', '마']

target2.splice(1);    // index 1번부터 싹 다 지움.
console.log(target2);   // ['가']

const target3 = ['가', '나', '다', '라', '마'];
target3.splice(1, 3, '타', '파');    // index 1번부터 3개(나, 다, 라) 제거하고 그 자리에 '타', '파' 추가  -> ['가', '타', '파', '마'] 
console.log(target3);   // ['가', '타', '파', '마']


// 중간에 끼워 넣기
const target4 = ['가', '나', '다', '라', '마'];
target4.splice(2, 0, '바');  // index 2번을 선택해서 0개 지우고, 2번 자리에 '바' 끼워 넣기
console.log(target4);   // ['가', '나', '바', '다', '라', '마']


// 요소 찾기
const target5 = ['가', '나', '다', '라', '마'];
const target5Result = target5.includes('다');   // 존재하면 true, 없으면 false
console.log(target5Result);    // T/F로 나옴 -> 조건문, 반복문 등에 넣어 사용


// 몇 번째 index일까?
const target6 = ['가', '나', '다', '라', '마'];
const target6Result = target6.indexOf('다');        // 2, 앞에서부터 찾음.
const target6Result2 = target6.lastIndexOf('다');   // 2, 뒤에서부터 찾음. index 넘버는 원래 순서대로 알려줌 -> 결과는 위와 같음
const target6Result3 = target6.lastIndexOf('바');   // 없을 경우 '-1' 반환.


// 배열의 모든 요소 반복해서 하나씩 찍기
const array = ['가', '나', '다', '라', '마'];

let a = 0;
while(a < array.length) {
    console.log(array[a]);
    a++;
}
// 위는 while문, 밑은 for문
for (b = 0; b < array.length; b++) {
    console.log(array[b]);
}


// '라' 없애기
const arr = ['가', '라', '다', '라', '마', '라'];

let i = arr.indexOf('라');


while(i > -1) {       // or 'i !== -1', 찾는 값이 없을 경우 '-1'을 반환하므로 -1이 되면 반복 멈추면 됨.
    arr.splice(i, 1);
    i = arr.indexOf('라');
}

console.log(arr);
