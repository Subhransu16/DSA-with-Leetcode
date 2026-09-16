/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr=[];
    for (let i= 0; i < nums1.length;i++){
        arr.push(nums1[i]);
    }
    for (let i = 0; i < nums2.length; i++){
        arr.push(nums2[i]);
    }
    arr.sort((a,b)=>a-b)
    let n =arr.length;
    if(n %2 ===1){
        return arr[Math.floor(n/2)];
    }else{
        return (arr[n/2-1] + arr[n/2])/2;
    }
    
};