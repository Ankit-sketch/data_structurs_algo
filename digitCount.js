let number = 7789;
let count = 0;
function countDigit(number) {
    console.log(number)
    let pass = parseInt(number / 10);
    count += 1
    if (pass == 0) return;
    countDigit(pass);
}

function countt(n) {
    let count = 0;
    while (n > 0.9) {
        n = n / 10;
        console.log(n)
        count += 1
    }
    return count
}

const answer = countt(7789);
console.log(answer)