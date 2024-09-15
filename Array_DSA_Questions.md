# DSA Interview Preparation - Arrays

### 1. Two Sum Problem
##### Problem:
- Find two numbers in an array that sum up to a given target.

###### Example:
Input: [2, 7, 11, 15], target = 9
Output: [0, 1]


```javascript
function twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
```


##### Explanation:

- We use a Map to store the difference (target - current value) and its index.
- As we iterate, we check if the complement exists in the map. If it does, we return the indices.



### 2. Maximum Subarray (Kadane’s Algorithm)

##### Problem:
- Find the contiguous subarray with the largest sum.
###### Example:
Input: [-2,1,-3,4,-1,2,1,-5,4]
Output: 6

```javascript
function maxSubArray(nums) {
    let maxCurrent = nums[0];
    let maxGlobal = nums[0];

    for (let i = 1; i < nums.length; i++) {
        maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
        if (maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent;
        }
    }

    return maxGlobal;
}
```
##### Explanation:

- We iterate through the array, at each step calculating the maximum sum including the current element.
- maxCurrent keeps track of the current subarray sum, while maxGlobal stores the maximum sum found so far.


#### 3. Find Duplicates in an Array

##### Problem:
- Check if there are any duplicates in an array.
###### Example:
Input: [1,2,3,1]
Output: true

```javascript
function checkDuplicates(arr) {
    let n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
    
        for (let j = i + 1; j < n; j++) {
        
            if (arr[i] === arr[j]) {
                return true;  
            }
        }
    }

    return false;
}

let arr = [4, 5, 6, 4];
console.log(checkDuplicates(arr));
```

```javascript
function containsDuplicate(nums) {
    let set = new Set();
    for (let num of nums) {
        if (set.has(num)) {
            return true;
        }
        set.add(num);
    }
    return false;
}

```

#### Explanation:

- We use a Set to store elements. If we find an element already in the set, we return true.
