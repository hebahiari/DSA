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
