let arr = [0, 5, 5, 3, 1];
// we will skip the first solution which is first to sort after that finding the index
//better approach
function findSolutions(a) {
    let largest = arr[0];
    let secondLargest = -4634734323;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    console.log(largest)
    for (let j = 1; j < arr.length; j++) {
        if (arr[j] > secondLargest && arr[j] < largest) {
            secondLargest = arr[j];
        }
    }
    console.log(secondLargest)

}
findSolutions(arr)