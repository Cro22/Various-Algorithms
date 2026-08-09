# Stone Game II
#### _Description_
Alice and Bob play a game with piles of stones arranged in a row; `piles[i]` is the number of stones in the `i`-th pile. Players alternate turns, Alice first. On each turn, with a current value `M` (initially `1`), a player takes all the stones from the first `X` remaining piles where `1 <= X <= 2M`, then `M` becomes `max(M, X)`. The game ends when there are no piles left. Assuming both play optimally, return the maximum number of stones Alice can get.
