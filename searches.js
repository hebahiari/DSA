// linear search

function indexOf(isMatch, elements) {
    if (Array.isArray(elements)) {
        for (let index = 0, length = elements.length; index < length; index++) {
            if (isMatch(elements[index], index, elements)) {
                return index;
            }
        }
    }
    return -1;
}

//Example:
function personIs81(person) {
    return person.age === 81;
}

console.log(indexOf(personIs81, people));

//   In this case, only the first argument (elements[index]) is actually used within the personIs81 function. The other two arguments (index and elements) are included for consistency, and because callback functions in JavaScript commonly receive these parameters even if they don't use them. It allows the callback function to have access to additional information about the context in which it is called.


//binary search

function binaryIndexOf(compare, sortedElements) {
    if (Array.isArray(sortedElements)) {
        let lowerIndex = 0;
        let upperIndex = sortedElements.length - 1;

        while (lowerIndex <= upperIndex) {
            const index = Math.floor((upperIndex + lowerIndex) / 2);

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