console.clear();
let arr = [3, 10, 1, 0, 5, 8, 4];
for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] <= arr[smallest]) {
            smallest = j;
        }
    }
    let cachedResult = arr[i];
    arr[i] = arr[smallest];
    arr[smallest] = cachedResult;
}
console.log(arr)