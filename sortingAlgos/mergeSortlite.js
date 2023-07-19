const arr = [423, 23, 4, 34, 34, 34, 3, 423, 423, 423, 423, 4234234];
mergeSort(arr, 0, arr.length - 1);
function mergeSort(arr, start, end) {
    if (start < end) {
        let mid = parseInt((end + start) / 2);
        mergeSort(arr, start, mid);
        mergeSort(arr, mid + 1, end);
        merge(arr, start, mid, end);
    }
}
function merge(arr, start, mid, end) {
    let index1 = start;
    let index2 = mid + 1;
    let tempIndex = 0;
    let tempArray = new Array();
    while (index1 <= mid && index2 <= end) {
        if (arr[index1] <= arr[index2]) {
            tempArray[tempIndex] = arr[index1];
            index1++;
            tempIndex++;
        } else {
            tempArray[tempIndex] = arr[index2];
            index2++;
            tempIndex++;
        }
    }
    while (index1 <= mid) {
        tempArray[tempIndex] = arr[index1];
        index1++;
        tempIndex++;
    }
    while (index2 <= end) {
        tempArray[tempIndex] = arr[index2];
        index2++;
        tempIndex++;
    }
    let j = start;
    for (let i = 0; i < tempArray.length; i++) {
        arr[j] = tempArray[i];
        j++;
    }
}
console.log(arr)