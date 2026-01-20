/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2);
     arr.sort((a,b) => a-b)
    let n = arr.length;
    let mid = Math.floor(n/2);

    if (n % 2 === 0){
    return(arr[mid - 1] + arr[mid]) /2
    }else{
        return arr[mid]
    }
};