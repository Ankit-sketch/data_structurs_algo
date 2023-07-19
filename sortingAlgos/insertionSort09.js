console.clear();
const arr = [12, 11, 13, 5, 6];

for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 0 && arr[j] < arr[j - 1]; j--) {
        let cache = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = cache;
    }
}
console.log(arr)