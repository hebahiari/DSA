myMap.delete(value);
months.set(key, value);
myMap.get(key);
let length = myMap.size;
for (let key of myMap.keys()) {
  ("...");
}
for (let value of myMap.values()) {
  ("...");
}
for (let [key, value] of myMap.entries()) {
  ("...");
}
myMap.forEach((value, key) => "...");
const myArray = [...myMap];

const mySet = new Set();
mySet.add(value);
mySet.delete(value);
mySet.has(value);
mySet.clear();
mySet.forEach((value) => iterate);
Values = mySet.values();
let arrayFromSet = [...mySet];
let setFromArray = new Set(myArray);
for (let item of mySet.values()) {
  ("...");
}

// Intersection of arrays
// Suppose you were given two arrays, a and b, and you needed to find all elements that are present in both arrays. This is a common problem that turns up in many applications.

function intersection(a, b) {
  const map = new Map();
  const results = new Set();
  for (let e of a) {
    map.set(e, e);
  }

  for (let e of b) {
    if (map.has(e)) {
      results.add(e);
    }
  }

  return Array.from(results);
}

/////////////////////////////

// Find all pairs whose sum is equal to given numbers
// Given an array of distinct numbers, you wish to find all pairs of numbers in the array that sum to a given number.

// For example, suppose that you had the array [3, 2, 4, 6, 7, 5], and you want to find all pairs of numbers in this array that sum to the value 10. You can see that the pair [3, 7] and the pair [4, 6] both sum to 10. No other pair of numbers sum to 10. The returned value will be [[3, 7], [4, 6]].

// Also note the following:

// The pair [4, 6] and [6, 4] are the same and considered just one pair.

// [5,5] isn't considered a pair because 5 only occurs once in the array. The array does not contain duplicates, so this would never be possible.

function sumPairs(A, N) {
  const numbers = new Map();
  const solution = new Map();
  for (let e of A) {
    numbers.set(e, e);
  }
  for (let e of A) {
    let diff = N - e;
    if (diff !== e) {
      if (numbers.has(diff)) {
        solution.set(Math.min(e, diff), Math.max(e, diff));
      }
    }
  }

  return Array.from(solution);
}

///////

// Same letters
// Given a list of words, find all words made up of the same letters. Duplicates letters are okay, so tok and took are both made up of the same letters: t, o, and k.

// The function should return a Map where the keys are strings made up of the letters found in a group of words, and the values are arrays consisting of the words that are made up with the same letters in the key.

// For example, given the array ["pair", "per", "pole", "pear", "peer", "reap", "lope"], the result will be as follows:

// {
//   "aipr": ["pair"],
//   "elop": ["pole", "lope"],
//   "aepr": ["pear", "reap"],
//   "epr": ["per", "peer"]
// }
// The characters in the keys should be ordered in alphabetical order, and this should be a case-insensitive search. Using Maps, Sets, and arrays will greatly simplify the approach to solving this problem.

function sameLetters(words) {
  const results = new Map();
  words.forEach((word) => {
    let distinctLetters = Array.from(new Set(word.split("")))
      .sort()
      .join("");
    if (results.has(distinctLetters)) {
      results.get(distinctLetters).push(word);
    } else {
      results.set(distinctLetters, [word]);
    }
  });
  return results;
}

// Anagram
// Given two strings s1 and s2, determine if the two strings are anagrams of each other or not.

// Two words are anagrams of each other if they are both spelled with the letters. For example, the words race and care are anagrams.

// Write a function that returns true if the two strings are anagrams of each other, false otherwise.

//SOLUTION WITHOUT USING A MAP

function anagram(s1, s2) {
  if (s1.length == s2.length) {
    s1 = s1.toLowerCase().split("").sort();
    s2 = s2.toLowerCase().split("").sort();
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) {
        return false;
      }
    }
    return true;
  }

  return false;
}

// SOLUTION USING A MAP

function anagram(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }

  let myMap = new Map();

  s1 = s1.split("");
  s2 = s2.split("");

  for (let i = 0; i < s1.length; i++) {
    let mapValue = myMap.get(s1[i].toLowerCase());
    mapValue
      ? myMap.set(s1[i].toLowerCase(), mapValue + 1)
      : myMap.set(s1[i].toLowerCase(), 1);
  }

  for (let j = 0; j < s2.length; j++) {
    let mapValue = myMap.get(s2[j].toLowerCase());
    mapValue ? myMap.set(s2[j].toLowerCase(), mapValue - 1) : false;
  }

  for (let value of myMap.values()) {
    if (value !== 0) {
      return false;
    }
  }
  return true;
}

// Anagram groups

// Given a list of words, group the words into anagram groups. That is, place all words in the list that are anagrams of each other into a group.

// For example, if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'], the output should be [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']].

function anagramGroups(words) {
  let myMap = new Map();

  for (let i = 0; i < words.length; i++) {
    let letters = words[i].split("").sort().join("");
    let existing = myMap.get(letters);
    existing
      ? myMap.set(letters, [...existing, words[i]])
      : myMap.set(letters, [words[i]]);
  }

  return [...myMap.values()];
}

// Permutation palindrome

// Write an algorithm to check whether any anagram of some string is a palindrome. Given the string acecarr, the algorithm should return true, because the letters in acecarr can be rearranged to the anagram racecar, which itself is a palindrome. In contrast, given the word north, the algorithm should return false, because there's no anagram for north that would be a palindrome.

function permutationPalindrome(word) {
  let myMap = new Map();
  Array.from(word).forEach((letter) => {
    let existing = myMap.get(letter);
    myMap.has(letter) ? myMap.set(letter, existing + 1) : myMap.set(letter, 1);
  });
  let odd = 0;
  myMap.forEach((value, key) => {
    if (value % 2 !== 0) {
      odd++;
    }
  });

  return odd > 1 ? false : true;
}

// First single character

// Given a string, find the first character in that string that occurs only once. For example, given the string thinkful, return the character t since that is the first character in the string that is not repeated in the string.

// Given the string character, return h because the first character c is repeated later in the string so the first nonrepeating character is h.

// If no single characters are found, return null.

function firstSingleCharacter(word) {
  let unique = new Set();
  let duplicates = new Set();

  for (let i = 0; i < word.length; i++) {
    if (unique.has(word[i])) {
      unique.delete(word[i]);
      duplicates.add(word[i]);
    } else if (!duplicates.has(word[i])) {
      unique.add(word[i]);
    }
  }
  let array = [...unique];
  return array.length ? array[0] : null;
}
