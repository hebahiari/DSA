// 1: The missing number
// A marathon organizer numbered the runners in the marathon from 1 to N, where N is the number of runners taking part in the race. As each runner passes the finish line, their number is recorded in a list. It was found that only N - 1 numbers were recorded. That means that one of the runners did not pass the finish line. The organizer of the race wants to know which runner was missing from the list.

// You are given an array of the numbers of the N-1 runners in the order in which they pass the finish line. Write an algorithm that will determine the missing number.

// For example, if there were 10 runners and the array [8, 3, 4, 1, 2, 9, 10, 5, 7] was given, the algorithm would return 6 as the missing number.

// The following assumptions hold true:

// N is an integer number in the range 1 to 100,000. That is, there could be as many as 100,000 runners in the race.
// The array contains distinct numbers. That is, no duplicates. After all, a runner would not pass the finish line twice.

function missing(numbers) {
  let N = numbers.length + 1;
  let fullSum = (N * (N + 1)) / 2;
  let sum = numbers.reduce((a, b) => a + b);
  return fullSum - sum;
}

// 2: A Pythagorean triplet is a set of three numbers {a, b, c} that satisfies the following equation:
// a^2 + b^2 = c^2
// Find all Pythagorean triplets up to n.
// To do this, you can once again use a brute-force technique that requires nested loops:

function triplets(n) {
  const result = [];

  for (let a = 1; a <= n - 2; a++) {
    for (let b = a + 1; b <= n - 1; b++) {
      for (let c = b + 1; c <= n; c++) {
        if (a * a + b * b === c * c) {
          result.push([a, b, c]);
        }
      }
    }
  }

  return result;
}

// 3: The greatest common divisor (GCD) of two positive integers a and b is the largest of the common divisors of a and b. If a number c can be divided by another number d without leaving a remainder, it's said that d is a divisor of c.

function gcd1(a, b) {
  //base cases
  // if either of them is zero then the answer is the other number
  if (a == 0) {
    return b;
  }

  if (b == 0) {
    return a;
  }

  //Euclid method
  while (b > 0) {
    let remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
}

//4: Split sum :  split an array at an index where the sum of the numbers before than index and after that index would be the closest, return the smallest difference that could be achieved splitting that array into two halves

function splitSum(array) {
  let total = 0;

  //calculate the total of that array
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  let preSum = 0;
  let postSum = total;
  let smallestDifference = Infinity;

  for (let i = 0; i < array.length; i++) {
    // at every index check the difference
    preSum = preSum + array[i];
    postSum = postSum - array[i];
    let currentDifference = Math.abs(preSum - postSum);

    if (currentDifference < smallestDifference) {
      smallestDifference = currentDifference;
    }
  }

  return smallestDifference;
}

//5: binary search

function binaryIndexOf(compare, sortedElements) {
  if (Array.isArray(sortedElements)) {
    let lowerIndex = 0;
    let upperIndex = sortedElements.length - 1;

    while (lowerIndex <= upperIndex) {
      const index = Math.floor((upperIndex + lowerIndex) / 2);

      //compare returns + or - or 0
      const comparison = compare(sortedElements[index], index, sortedElements);

      if (comparison > 0) {
        lowerIndex = index + 1;
      }

      if (comparison === 0) {
        return index;
      }

      if (comparison < 0) {
        upperIndex = index - 1;
      }
    }
  }
  return -1;
}

//6: fibonacci sequence

function fibonacci(n) {
  //base case
  if (n <= 1) {
    return n;
  }

  //recursive case
  let result = fibonacci(n - 1) + fibonacci(n - 2);

  // return
  return result;
}

// 7: maze

function mazeSolver(maze, index = [0, 0]) {
  let row = index[0];
  let column = index[1];
  let path = "";

  if (maze[row][column] == "e") {
    console.log("found", maze);
    return path;
  }

  //try right
  if (maze[row][column + 1] && maze[row][column + 1] !== "*") {
    path = "R";
    return path + mazeSolver(maze, [row, column + 1]);
  }
  //try down
  if (maze[row + 1][column] && [row + 1][column] !== "*") {
    path = "D";
    return path + mazeSolver(maze, [row + 1, column]);
  }
  //try left
  if (maze[row][column - 1] && [row][column - 1] !== "*") {
    path = "L";
    return path + mazeSolver(maze, [row, column - 1]);
  }
  //try up
  if (maze[row - 1][column] && [row - 1][column] !== "*") {
    path = "U";
    return path + mazeSolver(maze, [row - 1, column]);
  }
}
