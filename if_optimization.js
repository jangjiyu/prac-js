// 1. if문 다음에 나오는 공통된 절차를 각 분기점 내부에 넣는다.
// 2. 분기점에서 짧은 절차부터 실행하게 If문을 작성한다.
// 3. 짧은 절차가 끝나면 return(함수 내부의 경우)이나 break(for문 내부의 경우)로 중단한다.
// 4. else를 제거한다. (이때 중첩 하나가 제거된다) 
// 5. 다음 중첩된 분기점이 나오면 1~4의 과정을 반복한다.

function test() {
  let result = '';
  if (a) {
    if (!b) {
      result = 'c';
    }
  } else {
    result = 'a';
  }
  result += b;
  return result;
}


function test2() {
  let result = '';
  if (a) {
    if (!b) {
      result = 'c';
    }
    result += b;
    return result;
  } else {
    result = 'a';
    result += b;
    return result;
  }
}


function test3() {
  let result = '';
  if (!a) {
    result = 'a';
    result += b;
    return result;
  } 
  if (!b) {
    result = 'c';
  }
  result += b;
  return result;
}





const s = "a234";
const s2 = "1234";
const s3 = "1a2d";
const s4 = "1e22";

function solution(s) {
  let answer;
  if(s.length === 4 || s.length === 6) {
    if(isNaN(s) || s.includes('e')) {
      answer = false;
    } else {
      answer = true;
    }
  } else {
    answer = false;
  }
  return answer;
}


function solution2(s) {
  let answer;
  if( !(s.length === 4 || s.length === 6) ) {
    answer = false;
    return answer;
  } 
  if(isNaN(s) || s.includes('e')) {
    answer = false;
  } else {
    answer = true;
  }
  return answer;
}



function solution3(s) {
  let answer;
  if( !(s.length === 4 || s.length === 6) ) {
    answer = false;
    return answer;
  } 
  return ( isNaN(s) || s.includes('e') ) ? answer = false :   answer = true;
}



console.log(solution(s));   // F
console.log(solution(s2));  // T
console.log(solution(s3));  // F
console.log(solution(s4));  // F

console.log(solution2(s));   // F
console.log(solution2(s2));  // T
console.log(solution2(s3));  // F
console.log(solution2(s4));  // F

console.log(solution3(s));   // F
console.log(solution3(s2));  // T
console.log(solution3(s3));  // F
console.log(solution3(s4));  // F