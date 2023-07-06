const arr = [2, 3, 1, 4, 5, 32, 5];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
        return false;
    }
    return true;
}