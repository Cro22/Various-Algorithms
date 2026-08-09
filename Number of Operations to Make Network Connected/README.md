# Number of Operations to Make Network Connected
#### _Description_
There are `n` computers numbered from `0` to `n - 1` connected by ethernet cables, given as `connections[i] = [a, b]`. Any two computers can communicate directly or indirectly through the network. In one operation you can unplug a cable and plug it between any pair of computers. Return the minimum number of operations to make all computers connected, or `-1` if it is not possible.

The `JS` solution uses a Union-Find (Disjoint Set Union) structure to count the connected components. If there are fewer than `n - 1` cables it is impossible (`-1`); otherwise the answer is `components - 1`.
