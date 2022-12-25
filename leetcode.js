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
