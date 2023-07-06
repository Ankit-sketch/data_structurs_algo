let arr = [2, 5, 1, 3, 0];
// iterative approach
// brute force approach with insertion sort starts here.
function bruteForceInsertionSort(a) {
    let arr = [...a];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; i < arr.length && arr[j] <= arr[j - 1]; j--) {
            let cache = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = cache;
        }
    }
    return arr[arr.length - 1];
}
console.log(bruteForceInsertionSort(arr), "first solution");
// time complexity O(n^2);
// space complexity O(1);
// brute force approach with insertion sort ends here.

// optimal approach via using a max varible starts here
function findLargest(a) {
    let arr = [...a];
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log(findLargest(arr), "second solution");
// time complexity O(n);
// space complexity O(1);
// optimal approach via using a max varible ends here.
