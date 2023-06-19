const arr = [423, 23, 4, 34, 34, 34, 3, 423, 423, 423, 423, 4234234];
let end = arr.length - 1;
function mergeSort(arr, start, end) {
    if (start >= end) return
    let mid = parseInt((end - start) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, start, mid, end);
}
function merge(arr, start, mid, end) {
    let tempArray = new Array();
    let index1 = start;
    let index2 = mid + 1;
    let mergeIndex = 0;
    while (index1 <= mid && index2 <= end) {
        if (arr[index1] <= arr[index2]) {
            tempArray[mergeIndex] = arr[index1];
            index1++;
            mergeIndex++;
        } else {
            tempArray[mergeIndex] = arr[index2];
            index2++;
            mergeIndex++;
        }
    }
    while (arr[index1] <= mid) {
        tempArray[mergeIndex] = arr[index1];
        index1++;
        mergeIndex++;
    }
    while (arr[index2] <= end) {
        tempArray[mergeIndex] = arr[index2];
        index2++;
        mergeIndex++;
    }
    let j = start;
    for (let i = 0; i < tempArray.length; i++) {
        arr[j] = tempArray[i];
        j++
    }
}
mergeSort(arr, 0, end);
console.log(arr)