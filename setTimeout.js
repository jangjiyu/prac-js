// 비동기 함수 setTimeout()
// 호출 스택 + 백그라운드 + 테스크 큐 (이벤트 루프)

function run() {
    console.log('3초 후 실행');
  }
  console.log('시작');
  setTimeout(run, 3000);
  console.log('끝');



// console 찍히는 순서 : 시작 -> 끝 -> 3초 후 실행 