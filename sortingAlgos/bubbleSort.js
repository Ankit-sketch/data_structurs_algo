console.clear();
const arr = [12, 11, 13, 5, 6];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j + 1] < arr[j]) {
            let cache = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = cache;
        }
    }
}
console.log(arr);


