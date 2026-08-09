function getFinalOrder(k, amount) {
    const returnUsers = [];
    const userAmount = [];
    for (let i = 0; i < amount.length; i++) {
        if (amount[i] < k || amount[i] === k) {
            returnUsers.push(i +1)
        } else {
            userAmount.push({user: i, value: amount[i] - k})
        }
    }

    return returnUsers.concat(lastUsers(userAmount, k));

}

function lastUsers(users, k) {
    const returnUsers = [];
    const otherUsers = [];
    if (users.length === 0) {
        return []
    }
    for (const element of users) {
        if (element.value < k || element.value === k) {
            returnUsers.push(element.user + 1)
        } else {
            otherUsers.push({user: element.user, value: element.value - k})
        }
    }
    return returnUsers.concat(lastUsers(otherUsers, k))
}

console.log(getFinalOrder(2, [6,1,2,3,2,7]))
