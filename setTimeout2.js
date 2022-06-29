function oneMore() {
    console.log('one more');
}
function run() {
    console.log('run run');
    setTimeout(() => {
        console.log('wow');
    }, 0)
    new Promise((resolve) => {
        resolve('hi');
    })
        .then(console.log);
    oneMore();
}

setTimeout(run, 5000);


// console 순서 : run run -> one more -> hi -> wow

// Promise.than/catch와 process.nextTick은 테스트 큐에서 setTimeout을 밀어내고 먼저 실행 됨. 일명 새치기