class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  //returns stack
  push(value) {
    this.top = new Node(value, this.top);
    return this;
  }

  // returns popped value
  pop() {
    let popped = this.top;
    this.top = popped.next;
    return popped.value;
  }

}

class ArrayStack {
  constructor() {
    this.items = [];
  }

  // Push operation to add an element to the top of the stack
  push(data) {
    this.items.push(data);
  }

  // Pop operation to remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return null; // Stack is empty
    }
    return this.items.pop();
  }

  // Peek operation to return the top element without removing it
  peek() {
    return this.isEmpty() ? null : this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the stack
  getSize() {
    return this.items.length;
  }

  // Display the elements of the stack
  display() {
    console.log(this.items.join(' '));
  }
}


// Problem 1: Check for a palindrome

// A palindrome is a word, phrase, or number that is spelled the same forward and backward. For example, "dad" is a palindrome; "A man, a plan, a canal: Panama" is a palindrome if you take out the spaces and ignore the punctuation; and "1,001" is a numeric palindrome. You can use a stack to determine whether a given string is a palindrome.

// Write an algorithm that uses a stack to determine whether a given input is a palindrome. Use the following template as a starting point.

const isPalindrome = (sentence) => {
  sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let middle = Math.floor(sentence.length / 2);

  const stack = new Stack();

  for (let index = 0; index < middle; index++) {
    stack.push(sentence[index]);
  }

  middle += sentence.length % 2 === 0 ? 0 : 1;

  for (let index = middle, limit = sentence.length; index < limit; index++) {
    if (sentence[index] !== stack.pop()) {
      return false;
    }
  }

  return true;
};

// Problem 2: Matching parentheses in an expression

// Arithmetic expressions may contain parentheses for clarification. For example the following expression is valid:

// (a + b) * c
// But the following expression is not:

// ((a + b) * c
// Write an algorithm that accepts an expression as a string and returns true if the parentheses in the expression match and false otherwise.

const match = (expression) => {
  const stack = new Stack();

  for (let index = 0, limit = expression.length; index < limit; index++) {
    if (expression[index] === "(") {
      stack.push("(");
    } else {
      if (expression[index] === ")") {
        if (stack.top) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  return !stack.top;
};

// Problem 3: Infix to postfix

// An arithmetic expression is said to be in infix notation when it takes the form:

// operand1 operator operand2
// For example, the expressions 1 + 2 and 3 * 5 are infix expressions.

// Sometimes, to avoid ambiguities with the precedence of operators, parentheses are used. The following are all valid infix expressions:

// (2 + 3) * 4
// (2 + (4 - 5) * 3)
// 8 / (6 + 2)
// Parsing and evaluating expressions in this form is particularly slow. Your compiler would typically convert arithmetic expressions from infix notation to postfix notation.

// An arithmetic expression is said to be in postfix notation when it takes the form:

// operand1 operand2 operator
// For example, the infix expression 2 + 3 may be written as 2 3 + in postfix notation.

// The following are all valid postfix forms or the expressions above:

// 2 3 + 4 *
// 2 4 5 - 3 * +
// 8 6 2 + /
// Write an algorithm that will take an arithmetic expression in infix form as a string and return the expression in postfix form.

// Assume that the four operators: +, -, / and * are the only ones used.
// The precedence of the operators are * and / has the highest precedence followed by + and -.
// You may also assume that the operands provided would all be single digits.
// Assume that all expressions provided are valid arithmetic expressions (no need to validate them)

const precedence = {
  "+": 0,
  "-": 0,
  "*": 1,
  "/": 1,
};

const postfix = (expression) => {
  const stack = new Stack();
  const result = [];

  expression = expression.replace(/\s/g, "");

  expression.split("").forEach((character) => {
    if (character === "(") {
      stack.push(character);
    } else {
      if (character === ")") {
        let top = stack.pop();
        while (top !== "(") {
          result.push(top);
          top = stack.pop();
        }
      } else {
        if ("+-*/".includes(character)) {
          if (
            !stack.top ||
            stack.top.value === "(" ||
            precedence[character] > precedence[stack.top.value]
          ) {
            stack.push(character);
          } else {
            while (
              stack.top &&
              precedence[stack.top.value] >= precedence[character]
            ) {
              result.push(stack.pop());
            }

            stack.push(character);
          }
        } else {
          result.push(character);
        }
      }
    }
  });

  while (stack.top) {
    result.push(stack.pop());
  }

  return result.join(" ");
};

postfix("(((a + b) * (c - d))/(a - b) + (c / d))");

// Evaluating postfix expressions

// AKA taking a postfix expression and giving the resulting number value

const evaluate = (expression) => {
  let myStack = new Stack();
  let text = expression.split(" ");

  text.forEach((char) => {
    if ("+-/*".includes(char)) {
      let a = parseInt(myStack.pop());
      let b = parseInt(myStack.pop());
      let result = 0;
      if (char == "*") {
        result = b * a;
      } else if (char == "/") {
        result = b / a;
      } else if (char == "+") {
        result = a + b;
      } else if (char == "-") {
        result = b - a;
      }
      myStack.push(result);
    } else {
      myStack.push(char);
    }
  });

  return myStack.top.value;
};

// Extend parentheses to other types of brackets

// Recall the algorithm that was used to determine if a given expression contained matching parentheses.

// Extend the algorithm to recognize 3 different types of brackets: (), [], and {}. These must be correctly nested; "([)]" is incorrect and should return false.

const matche = (expression) => {
  let myStack = new Stack();

  for (let i = 0; i < expression.length; i++) {
    let character = expression[i];
    if ("([{".includes(character)) {
      myStack.push(character);
    } else if (")}]".includes(character)) {
      if (!myStack.top) return false;
      let stackTop = myStack.pop();
      if (character == ")" && stackTop !== "(") return false;
      if (character == "}" && stackTop !== "{") return false;
      if (character == "]" && stackTop !== "[") return false;
    }
  }
  if (myStack.top) return false;
  return true;
};

module.exports = Stack