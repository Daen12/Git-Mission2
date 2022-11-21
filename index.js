let sum = 0;
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
        sum += i;
    }
}
console.log("끝났다");
console.log(`숫자들의 합은 ${sum} 입니다.`);
