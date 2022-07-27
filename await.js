async function a() {
  await delayP(3000); // 3초
  await delayP(6000); // 6초
  await delayP(9000); // 9초
} // 동신니까 토탈 9초? ㄴㄴ 토탈 18초

async function b() {
  const p1 = delayP(3000); // 3초
  const p2 = delayP(6000); // 6초
  await Promise.all([p1, p2]); // 6초    // Promise.all ~ .then(await)으로 바로 실행하는 것과 같음. // 프로미스.all보다는 Promise.allSettled 쓰는 걸 추천
  await delayP(9000); // 9초
} // 토탈 15초

// a()처럼 await 무지성으로 연달아 쓰지 말기!
// 백그라운드로 넘겨서 동시에 실행될 수 있는 것들은 promise로 먼저 실행하고, 결괏값 나중에 쓸 수 있게 하기.
