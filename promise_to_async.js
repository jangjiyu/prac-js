// 한 번 비동기는 영원한 비동기다!
// 비동기는 동시의 문제가 아니다. 순서의 문제다.
// promise와 async-await은 무조건 비동기가 아니다! 함수 안에서도 동기부분이 있고 비동기부분이 있음.
// 실행은 바로 ---> 결괏값이 나올 때(resolve)는 나중 ---> 결괏값을 사용할 때(then, await)는 더 나중

async function a() {
  const a = await 1; // 1) 첫번재 await이 프로미스가 아닌 값이면, Promise화를 시켜줘야함. // cf) async 함수는 await이 나오는 순간 동기 부분이 끝나고 비동기 시작.
  console.log("a", a);
  console.log("hmm");
  await null; // 2) promise에선 return null;
  const b = await Promise.resolve(1);
  console.log("b", b);
  return b; // 3) 없을 경우  return undefined;
}

// await -> than
// async 함수는 오른쪽에서 왼쪽으로,
// promise 함수는 왼쪽에서 오른쪽으로, 위에서 아래로.

Promise.resolve(1) // 1) promise화
  .then((a) => {
    // 1)의 await을 대입하는 변수를 then 뒤에. 그럼 a는 1이 됨.
    console.log("a", a);
    console.log("hmm");
    return null; // await부터 다음 await까지. 2) 위의 await null;
  })
  .then(() => {
    return Promise.resolve(1); // 또 다음 await까지. (async는 오른쪽에서 시작해서 왼쪽으로 읽힘. -> 변수 b는 여기 await 사이에 포함 안 됨. -> then에 ()빈값으로 들어감.)
  })
  .then((b) => {
    console.log("b", b);
    return b; // 3) 만약 위에서 리턴 값이 undefiend이면 적어줄 거 없음
  });

// 위의 예시는 아주 간단한 경우.
// async에서 마지막 return값이 a+b가 된다? 그럼 복잡해짐.
// then은 스코프에 의해 첫번째 then의 a값을 마지막 then의 b가 참조할 수 없음(then의 부모는 밖의 함수이고 then끼리는 형제관계라 서로 참조X).
// 참조하려면 첫번째 then부터 a값을 계속 then에 전달...? 아니면 즉시실행함수(IIFE)로 만들기..? - 복잡하다 복잡해... (실행 순서 알아보려고 바꿔보는 거니까 굳이 async를 모두 promise로 바꿀 필요없음)

// 맨 위 a()를 호출하게 되면
a()
  .then((result) => {
    console.log(result);
  })
  .then((result2) => {
    console.log(result2);
  }); // a()의 await 개수와 여기의 then의 개수를 더해서 background로 나가는 비동기 개수 생각하기

// promise로 바꾼 거에다가 대입해서 생각해보면 좀 더 나음. (async-await 함수만 보고 이해가능하면 걍 보면 되는데 이해 힘드면 Procmise로 바꿔 생각해보기.)
Promise.resolve(1)
  .then((a) => {
    console.log("a", a);
    console.log("hmm");
    return null;
  })
  .then(() => {
    return Promise.resolve(1);
  })
  .then((b) => {
    console.log("b", b);
    return b;
  })
  .then((result) => {
    console.log(result);
  })
  .then((result2) => {
    console.log(result2);
  });
