let arr = [543, 44354, 53455, 2, 45534, 42, 24, 56, 6, 5345, 7, 1];
function quickSort(arr, start, end) {
    if (start >= end) return;
    let p = partition(arr, start, end);
    quickSort(arr, start, p - 1);
    quickSort(arr, p + 1, end);
}
function partition(arr, start, end) {
    let pivot = start;
    let counter = 0;
    for (let i = start + 1; i < arr.length; i++) {
        if (arr[i] <= arr[pivot]) {
            counter++;
        }
    }
    let pivotIndex = start + counter;
    let cache = arr[pivotIndex];
    arr[pivotIndex] = arr[pivot];
    arr[pivot] = cache;
    while (start < pivotIndex && end > pivotIndex) {
        while (arr[start] <= arr[pivotIndex]) start++;
        while (arr[end] > arr[pivotIndex]) end--;
        if (start < pivotIndex && end > pivotIndex) {
            let cache = arr[start];
            arr[start] = arr[end];
            arr[end] = cache;
            end--;
            start++;
        }
    }
    return pivotIndex
}
quickSort(arr, 0, arr.length - 1);
console.log(arr)