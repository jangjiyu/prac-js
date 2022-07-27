// 한 번 비동기는 영원한 비동기다!
// 비동기는 동시의 문제가 아니다. 순서의 문제다.
// promise와 async-await은 무조건 비동기가 아니다! 함수 안에서도 동기부분이 있고 비동기부분이 있음.
// 실행은 바로 ---> 결괏값이 나올 때(resolve)는 나중 ---> 결괏값을 사용할 때(then, await)는 더 나중

const result = new Promise((resolve, reject) => {
  setTimeout(() => resolve(), 1000);
});
result.then(() => {
  console.log("1초가 지났다.");
});
