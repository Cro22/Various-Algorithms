/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
    const response = [];
    const count = {};
    for (const elements of nums) {
        if (count[elements]) {
            count[elements]++;
        } else {
            count[elements] = 1
        }
    }

    const arrObject = Object.keys(count).sort(function (a, b) {
        return count[b] - count[a]
    })
    for (let i = 0; i < arrObject.length; i++) {
        if (i >= k) {
            break;
        }
        response.push(Number(arrObject[i]))
    }
    return response;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
