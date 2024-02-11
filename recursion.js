//Bottom-up recursiom

function factorial(number) {
    console.log("Forward phase", number);

    // Base case
    if (number <= 1) {
        console.log("base case", number);
        return 1;
    }

    // Recursive case
    const numberMinusOneFactorial = factorial(number - 1);

    console.log("Backward phase", number, "*", numberMinusOneFactorial);

    return number * numberMinusOneFactorial;
}

console.log(factorial(5));

//Top-down recursion
function factorial(number, total = 1) {
    console.log("Forward phase", number, "*", total);

    // Base case stays the same
    if (number <= 1) {
        console.log("base case", number);
        return total;
    }

    total = factorial(number - 1, total * number);

    console.log("Backward phase", number, total);
    return total;
}

console.log(factorial(5));



function split(text, separator) {
    // Find the index of the first occurrence of separator
    let index = text.indexOf(separator);

    // Base case
    if (index === -1) {
        return [text];
    }

    // Find the substrings
    let start = text.substring(0, index);
    let rest = text.substring(index + 1);

    // Recursive call
    let restSolution = split(rest, separator);

    // Insert the first substring
    restSolution.unshift(start);

    return restSolution;
}