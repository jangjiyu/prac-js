for (let i = 0; i < 5; i++) {
    console.log('*'.repeat(5 - i));
}

// 5-0 5
// 5-1 4
// 5-2 3
// 5-3 2
// 5-4 1

let a = 0;
while (a < 5) {
    console.log('*'.repeat(5 - a));
    a++;
}

console.log(' ');

for (let i = 0; i < 10; i += 2) {
    console.log('*'.repeat(i + 1));
}

let b = 0;
while(b < 10) {
    console.log('*'.repeat(b + 1));
    b += 2;
}

console.log(' ');

for (let i = 0; i < 9; i += 2) {
    console.log('*'.repeat(9 - i));
}

let c = 0;
while(c < 9) {
    console.log('*'.repeat(9 - c));
    c += 2;
}

console.log(' ');

for (let i = 0; i <5; i++) {
    console.log(' '.repeat(i) + '*'.repeat(5 - i));
}

let d = 0;
while(d < 5) {
    console.log(' '.repeat(d) + '*'.repeat(5 - d));
    d++
}

console.log('\ntree');

for (let i = 0; i < 10; i += 2) {
    console.log(' '.repeat((8-i)/2) + '*'.repeat(i + 1) + ' '.repeat((8-i)/2));
}

// 0  8  4 1 4
// 2  6  3 3 3
// 4  4  2 5 2
// 6  2  1 7 1
// 8  0  0 9 0

for (let i = 0; i < 5; i++) {
    console.log(' '.repeat(4-i) + '*'.repeat(2*i + 1) + ' '.repeat(4-i));
}

// 0  4 1 4
// 1  3 3 3
// 2  2 5 2
// 3  1 7 1
// 4  0 9 0

let e = 0;
while(e < 5) {
    console.log(' '.repeat(4 - e) + '*'.repeat(2*e + 1) + ' '.repeat(4 - e));
    e++
}

console.log(' ');

for (let i = 0; i < 5; i++) {
    if(i<3) {
        console.log(' '.repeat(2 - i) + '*'.repeat(2*i + 1) + ' '.repeat(2 - i));
    } else {
        console.log(' '.repeat(i - 2) + '*'.repeat(9 - 2*i) + ' '.repeat(i - 2));
    }
}

//   *      0  4  2 1 2
//  ***     1  2  1 3 1
// *****    2  0  0 5 0
//  ***     3  2  1 3 1
//   *      4  4  2 1 2

console.log(' ');

let f = 0;
while(f < 5) {
    if(f<3) {
        console.log(' '.repeat(2 - f) + '*'.repeat(2*f + 1) + ' '.repeat(2 - f));
    } else {
        console.log(' '.repeat(f - 2) + '*'.repeat(9 - 2*f) + ' '.repeat(f - 2));
    }
    f++
}