function stoneGameII(piles) {
    const n = piles.length;
    const memo = new Map();
    const suffixSum = new Array(n + 1).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        suffixSum[i] = suffixSum[i + 1] + piles[i];
    }

    function dp(i, m) {
        if (i >= n) return 0;
        if (i + 2 * m >= n) return suffixSum[i];

        const key = `${i}-${m}`;
        if (memo.has(key)) return memo.get(key);

        let maxStones = 0;
        for (let x = 1; x <= 2 * m; x++) {
            maxStones = Math.max(maxStones, suffixSum[i] - dp(i + x, Math.max(m, x)));
        }

        memo.set(key, maxStones);
        return maxStones;
    }

    return dp(0, 1);
}
