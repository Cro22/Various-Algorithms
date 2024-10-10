/**
 * @param {number[]} coins
 * @param {number} target
 * @return {number}
 */
var minimumAddedCoins = function(coins, target) {
    coins.sort((a, b) => a - b);

    let coverage = 0;
    let coinsAdded = 0;
    let i = 0;

    while (coverage < target) {
        if (i < coins.length && coins[i] <= coverage + 1) {
            coverage += coins[i];
            i++;
        } else {
            coverage += coverage + 1;
            coinsAdded++;
        }
    }

    return coinsAdded;
};