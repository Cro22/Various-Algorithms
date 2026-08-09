# ATM Queue
#### _Description_
There is a queue of users waiting to be served by an ATM that dispenses a fixed amount `k` on each pass. On every round, each user in the queue withdraws `k` (or the remaining balance if it is `k` or less); users whose request is fully satisfied leave the queue in that round. Return the order (1-indexed) in which the users finish being served.

> ℹ️ This is a queue / round-robin simulation problem. It is **not** the LeetCode "Design an ATM Machine" problem (that one is under [Design an ATM Machine](../Design%20an%20ATM%20Machine)).
