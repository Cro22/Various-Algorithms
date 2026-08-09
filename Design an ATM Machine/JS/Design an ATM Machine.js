/**
 * There is an ATM machine that stores banknotes of 5 denominations:
 * 20, 50, 100, 200 and 500 dollars. It supports depositing banknotes and
 * withdrawing an amount, always using the largest denominations first.
 */
var ATM = function () {
    this.denominations = [20, 50, 100, 200, 500];
    this.counts = new Array(5).fill(0);
};

/**
 * @param {number[]} banknotesCount
 * @return {void}
 */
ATM.prototype.deposit = function (banknotesCount) {
    for (let i = 0; i < 5; i++) {
        this.counts[i] += banknotesCount[i];
    }
};

/**
 * @param {number} amount
 * @return {number[]} banknotes used per denomination, or [-1] if it cannot be served
 */
ATM.prototype.withdraw = function (amount) {
    const take = new Array(5).fill(0);

    // Greedily use the largest denominations first.
    for (let i = 4; i >= 0; i--) {
        take[i] = Math.min(this.counts[i], Math.floor(amount / this.denominations[i]));
        amount -= take[i] * this.denominations[i];
    }

    // If we could not cover the exact amount, reject the request.
    if (amount !== 0) {
        return [-1];
    }

    // Commit the withdrawal only when it is valid.
    for (let i = 0; i < 5; i++) {
        this.counts[i] -= take[i];
    }
    return take;
};

/**
 * Your ATM object will be instantiated and called as such:
 * var obj = new ATM()
 * obj.deposit(banknotesCount)
 * var param_2 = obj.withdraw(amount)
 */
