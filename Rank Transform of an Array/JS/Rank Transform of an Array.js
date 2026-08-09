function arrayRankTransform(arr) {
    const sortedArr = [...arr].sort((a, b) => a - b);
    const map = new Map();
    let rank = 1;
    for (let i = 0; i < sortedArr.length; i++) {
        if (!map.has(sortedArr[i])) {
            map.set(sortedArr[i], rank);
            rank++;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = map.get(arr[i])
    }
    return arr;
}
