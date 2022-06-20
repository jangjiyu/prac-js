// '라' 없애기

const arr = ['가', '라', '다', '라', '마', '라'];

let i = arr.indexOf('라');


while(i > -1) {       // or 'i !== -1'
    arr.splice(i, 1);
    i = arr.indexOf('라');
}

console.log(arr);
