// #1 TWO SUM -- easy

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// SOLUTION: (neetcode)

// fastest route (using a map, we put every visited node in the map with its index, and when we get to the second value we look up in our map to find if its complementary exists)

var twoSum = (nums, target, map = new Map()) => {
  for (let index = 0; index < nums.length; index++) {
    /* Time O(N) */
    const num = nums[index];
    const complement = target - num;
    const sumIndex = map.get(complement);

    const isTarget = map.has(complement);
    if (isTarget) return [index, sumIndex];

    map.set(num, index); /* Space O(N) */
  }

  return [-1, -1];
};

///////////////////////////////

// #13 Roman to Integer -- easy

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

/// SOLUTION: (personal)

// basically its best to go backwards and check if the current number is more than the next number which means its a 9,4,etc .. otherwise just add to result

var romanToInt = function (s) {
  let numbersValues = [
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ];

  let numbers = new Map(numbersValues);

  let result = 0;

  let temp = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    let number = numbers.get(s[i]);

    if (number < temp) {
      result -= number;
      temp = -Infinity;
    } else {
      temp = number;
      result += number;
    }
  }

  return result;
};

//////////////////////////////

// # 14: Longest Common Prefix -- easy

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// SOLUTION: (personal) :

var longestCommonPrefix = function (strs) {
  let longest = strs[0].split("");

  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < longest.length; j++) {
      if (longest[j] !== strs[i][j]) {
        longest.splice(j);
      }
    }
  }

  return longest.join("");
};

//////////////////////

// #20: Valid Parentheses -- easy

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

//SOLUTION: (personal)

var isValid = function (s) {
  let myStack = [];
  let opening = ["(", "[", "{"];
  let closing = ["]", "}", ")"];

  for (let i = 0; i < s.length; i++) {
    if (opening.includes(s[i])) {
      myStack.push(s[i]);
    } else {
      if (closing.includes(s[i])) {
        let last = myStack.pop();
        if (s[i] == "]" && last !== "[") {
          return false;
        }
        if (s[i] == ")" && last !== "(") {
          return false;
        }
        if (s[i] == "}" && last !== "{") {
          return false;
        }
      }
    }
  }

  if (myStack.length > 0) {
    return false;
  }

  return true;
};

// 21. Merge Two Sorted Lists -- easy

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// SOLUTION: (neetcode):

var mergeTwoLists = function (list1, list2) {
  const isBaseCase1 = list1 === null;
  if (isBaseCase1) return list2;

  const isBaseCase2 = list2 === null;
  if (isBaseCase2) return list1;

  const isL2Greater = list1.val <= list2.val;
  if (isL2Greater) {
    list1.next = mergeTwoLists(
      list1.next,
      list2
    ); /* Time O(N + M) | Space O(N + M) */

    return list1;
  }

  const isL2Less = list2.val <= list1.val;
  if (isL2Less) {
    list2.next = mergeTwoLists(
      list1,
      list2.next
    ); /* Time O(N + M) | Space O(N + M) */

    return list2;
  }
};

/////////////////////

// 26. Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// SOLUTION: (personal):

var removeDuplicates = function (nums) {
  if (nums.length) {
    let switchIndex = 1;
    let currentLetter = nums[0];

    for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== currentLetter) {
        currentLetter = nums[i];
        nums[switchIndex] = currentLetter;
        switchIndex++;
      }
    }
    return switchIndex;
  }

  return 0;
};

///////////////////

// 66. Plus One

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

//SOLUTION: (Personal)

var plusOne = function (digits) {
  if (digits) {
    let lastIndex = digits.length - 1;

    if (digits[lastIndex] !== 9) {
      digits[lastIndex]++;
    } else {
      if (digits.length == 1) {
        return [1, 0];
      } else {
        digits = plusOne(digits.slice(0, lastIndex)).concat([0]);
      }
    }

    return digits;
  }

  return [1];
};

// ALT SOLUTION::

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] != 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};

// 69. Sqrt(x)

// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

//SOLUTION: (internet)

var mySqrt = function (x) {
  let left = 1;
  let right = x;
  // The square root of 0 or 1 is itself
  if (x < 2) return x;

  // Use binary search to find the square root or the whole number closest to the square root
  while (left < right) {
    // Find the mid point between left and right
    const mid = Math.floor((left + right) / 2);
    // Return the mid point if this is the square root
    if (mid * mid === x) return mid;
    // If mid squared is greater than x then the answer must be on the left half of mid
    else if (mid * mid > x) right = mid;
    // If mid squred is less than x then the answer must be on the right half of mid
    else left = mid + 1;
  }
  return left - 1;
};

// 88. Merge Sorted Array

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

//SOLUTION: (internet)

// Two pointer solution
// Start by comparing the largest numbers between the two arrays and add to the end of nums1
var merge = function (nums1, m, nums2, n) {
  while (n) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[m + n - 1] = nums1[--m];
    } else {
      nums1[m + n - 1] = nums2[--n];
    }
  }
  return nums1;
};

// 118. Pascal's Triangle

// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

//SOLUTION: (personal)

var generate = function (numRows) {
  let result = [];
  let currentArray = [1, 1];

  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];

  for (let i = 2; i < numRows; i++) {
    let subArray = [];

    for (let j = 0; j < currentArray.length - 1; j++) {
      subArray.push(currentArray[j] + currentArray[j + 1]);
    }

    currentArray = subArray;
    subArray.push(1);
    subArray.unshift(1);
    result.push(subArray);
  }

  result.unshift([1, 1]);
  result.unshift([1]);
  return result;
};
