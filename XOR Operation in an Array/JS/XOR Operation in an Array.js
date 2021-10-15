/**
 * @param {number} n
 * @param {number} start
 * @return {number|null}
 */
const xorOperation = function (n, start) {
    let bitwizeXOR = start;
    for (let i = 1; i < n; i += 1) {
        bitwizeXOR = bitwizeXOR ^ start + 2 * i
    }
    return bitwizeXOR
};
// TEST CASE
console.log(xorOperation(n = 4, start = 3))
