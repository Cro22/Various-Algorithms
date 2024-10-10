/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function (n, edges) {
    const inDegree = new Array(n).fill(0);

    for (const [u, v] of edges) {
        inDegree[v]++;

        let champion = -1;
        let countZeroInDegree = 0;

        for (let i = 0; i < n; i++) {
            if (inDegree[i] === 0) {
                countZeroInDegree++;
                champion = i;
            }
        }

        return countZeroInDegree === 1 ? champion : -1;
    }
}