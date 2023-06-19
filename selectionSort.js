console.clear();
const arr = [12, 11, 13, 5, 6];
for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[smallest]) {
            smallest = j;
        }
    }
    let cache = arr[i];
    arr[i] = arr[smallest];
    arr[smallest] = cache;
}
console.log(arr)
