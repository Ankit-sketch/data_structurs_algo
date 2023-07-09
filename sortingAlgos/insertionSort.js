// console.clear();
// const arr = [12, 11, 13, 5, 6];
// for (let i = 1; i < arr.length; i++) {
//     for (let j = i; j >= 0 && arr[j] < arr[j - 1]; j--) {
//         let temp = arr[j];
//         arr[j] = arr[j - 1];
//         arr[j - 1] = temp;
//     }
// }
// console.log(arr)

console.clear();
// const arr = [12, 11, 13, 5, 6];
// for (let i = 1; i < arr.length; i++) {
//     let j = i;
//     while (j > 0 && arr[j] < arr[j - 1]) {
//         let cache = arr[j];
//         arr[j] = arr[j - 1];
//         arr[j - 1] = cache;
//         j--;
//     }
// }

const arr = [12, 11, 13, 5, 6];
for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
        if (arr[j] < arr[j - 1]) {
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp
        } else {
            break
        }
    }
}
console.log(arr);