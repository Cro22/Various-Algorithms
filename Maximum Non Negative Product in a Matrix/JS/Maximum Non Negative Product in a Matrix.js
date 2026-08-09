/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxProductPath(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const MOD = 1000000007n;

    const maxDP = Array.from({length: m}, () => new BigInt64Array(n));
    const minDP = Array.from({length: m}, () => new BigInt64Array(n));

    maxDP[0][0] = BigInt(grid[0][0]);
    minDP[0][0] = BigInt(grid[0][0]);

    for (let j = 1; j < n; j++) {
        maxDP[0][j] = maxDP[0][j - 1] * BigInt(grid[0][j]);
        minDP[0][j] = minDP[0][j - 1] * BigInt(grid[0][j]);
    }

    for (let i = 1; i < m; i++) {
        maxDP[i][0] = maxDP[i - 1][0] * BigInt(grid[i][0]);
        minDP[i][0] = minDP[i - 1][0] * BigInt(grid[i][0]);
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            const val = BigInt(grid[i][j]);
            const options = [
                maxDP[i - 1][j] * val,
                minDP[i - 1][j] * val,
                maxDP[i][j - 1] * val,
                minDP[i][j - 1] * val
            ];

            let currentMax = options[0];
            let currentMin = options[0];
            for (let k = 1; k < options.length; k++) {
                if (options[k] > currentMax) currentMax = options[k];
                if (options[k] < currentMin) currentMin = options[k];
            }

            maxDP[i][j] = currentMax;
            minDP[i][j] = currentMin;
        }
    }

    const res = maxDP[m - 1][n - 1];
    return res < 0n ? -1 : Number(res % MOD);
};
console.log(maxProductPath([[-1, -2, -3], [-2, -3, -3], [-3, -3, -2]]));
