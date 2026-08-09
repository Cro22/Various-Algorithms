# Design an ATM Machine
#### _Description_
Design an ATM machine that stores banknotes of 5 denominations: `$20`, `$50`, `$100`, `$200` and `$500`. Initially the machine is empty. Implement the `ATM` class:

- `ATM()` initializes the (empty) machine.
- `deposit(int[] banknotesCount)` deposits banknotes, where `banknotesCount[i]` is the number of banknotes of the `i`-th denomination (in the order above).
- `withdraw(int amount)` returns an array with the number of banknotes used for each denomination to withdraw `amount`, **always using the largest denominations first**. If it is not possible to serve the exact `amount` with the available banknotes, return `[-1]` and leave the machine unchanged.

> LeetCode 2241 — *Design an ATM Machine* (Medium).
