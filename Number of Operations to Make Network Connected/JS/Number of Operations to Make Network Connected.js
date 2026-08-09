/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
    // Need at least n - 1 cables to connect n computers.
    if (connections.length < n - 1) return -1;

    const parent = Array.from({length: n}, (_, i) => i);

    function find(x) {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]]; // path compression
            x = parent[x];
        }
        return x;
    }

    let components = n;
    for (const [a, b] of connections) {
        const rootA = find(a);
        const rootB = find(b);
        if (rootA !== rootB) {
            parent[rootA] = rootB;
            components--;
        }
    }

    // Each extra cable can join two separate components, so we need
    // (components - 1) operations to connect everything.
    return components - 1;
};
