/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length-1
    let maxwater = 0;

    while(left < right) {
        let width = right - left;
        let currentheight =Math.min(height[left],height[right]) 
        let area = width*currentheight;

        maxwater = Math.max(maxwater,area)
        if(height[left]<height[right]){
            left ++;
        } else {
            right --;
        }
    }
    return maxwater;
};