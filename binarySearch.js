const target = 200;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 18, 20];

function binarySearch(arr, target) {
    let mid = + parseInt((end - start) / 2);
    if (target == arr[mid]) return mid;
    if (target > arr[mid]) return binarySearch(mid + 1, end)
    else if (target < arr[mid]) {
        return binarySearch(mid - 1, start)
    }
    else { return -1 }
}

const data = binarySearch(arr, 7);
console.log(data, "data")