let arr = [543, 44354, 53455, 2, 45534, 42, 24, 56, 6, 5345, 7, 1]
console.log(arr)
function quickSort(arr, start, end) {
    if (start >= end) return;
    let p = partition(arr, start, end);
    quickSort(arr, start, p - 1) // right half
    quickSort(arr, p + 1, end) // left half    
}
function partition(arr, start, end) {
    let pivotElem = arr[start];
    let count = 0;
    for (let i = start + 1; i <= end; i++) {
        if (arr[i] <= pivotElem) count++;
    }
    let pivotIndex = start + count;
    let cache = arr[pivotIndex];
    arr[pivotIndex] = arr[start];
    arr[start] = cache;
    while (start < pivotIndex && end > pivotIndex) {
        while (arr[start] <= arr[pivotIndex]) start++;
        while (arr[end] > arr[pivotIndex]) end--;
        if (start < pivotIndex && end > pivotIndex) {
            let cache = arr[end];
            arr[end] = arr[start];
            arr[start] = cache;
            start++;
            end--;
        }
    }
    return pivotIndex;
}

quickSort(arr, 0, arr.length - 1);
console.log(arr)
