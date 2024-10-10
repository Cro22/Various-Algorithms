/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function(nums) {
    let ans = 1;
    let r = 1;
    const n = nums.length;

    while (r < n && nums[r] > nums[r - 1]) {
        r++;
    }

    if (r === n) {
        return (n * (n + 1)) / 2;
    }

    let lst = Number.MAX_SAFE_INTEGER;
    ans += r;

    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] >= lst) {
            break;
        }
        let low = 0, high = r - 1;
        let left = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (nums[mid] < nums[i]) {
                left = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        ans += (left + 2);
        lst = nums[i];
    }

    return ans;

};