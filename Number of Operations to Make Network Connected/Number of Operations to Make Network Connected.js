/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
    cost.sort((a, b) => b - a)
    let totalCost = 0;
    let count = 0;
    for (const element of cost) {
        if (count === 2) {  // for skipping every third element 
            count = 0;
            continue;
        }
        totalCost += element
        count++;
    }
    return totalCost;
};
