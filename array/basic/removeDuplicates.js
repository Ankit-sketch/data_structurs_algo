let array = [1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 5, 6, 6, 6];
function removeDuplicate(arr) {
    let pointer1 = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] != arr[pointer1]) {
            arr[pointer1 + 1] = arr[i];
            pointer1++;
        }
    }
    let newArray = [];
    for (let j = 0; j <= pointer1; j++) {
        newArray[j] = arr[j]
    }
    return newArray;
}

const newArray = removeDuplicate(array);
array = newArray;
console.log(array);