// bubblesort

function bubbleSort(compare, elements) {
    if (Array.isArray(elements)) {
        let inOrder;

        do {
            inOrder = true; // Assume that the array is in order

            for (
                let index = 0, length = elements.length - 1; index < length; index++
            ) {
                const leftElement = elements[index];
                const rightElement = elements[index + 1];

                if (compare(leftElement, rightElement) > 0) {
                    elements[index] = rightElement;
                    elements[index + 1] = leftElement;
                    inOrder = false; // The array wasn't in order, so swap elements and then check it again.
                }
            }
        } while (inOrder === false);
    }
    return elements;
}


// merge sort

function mergeSort(compare, elements) {
    if (Array.isArray(elements)) {
        if (elements.length <= 1) {
            return elements;
        }

        const middle = Math.floor(elements.length / 2);

        const leftElements = elements.slice(0, middle);
        const rightElements = elements.slice(middle);

        const leftElementsSorted = mergeSort(compare, leftElements);
        const rightElementsSorted = mergeSort(compare, rightElements);

        return merge(compare, leftElementsSorted, rightElementsSorted);
    }
    return elements;
}

/**
 * Merges two sorted arrays
 *
 * @param compare
 *  Function to compare elements of the array
 * @param left
 *  The left sorted array
 * @param right
 *  The right sorted array
 * @returns {*[]}
 *  The left and right sorted arrays merged in sorted order
 */

function merge(compare, left, right) {
    const sorted = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        const comparison = compare(left[leftIndex], right[rightIndex]);

        if (comparison < 0) {
            sorted.push(left[leftIndex]);
            leftIndex++;
        } else {
            sorted.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return sorted.concat(
        leftIndex < left.length ? left.slice(leftIndex) : right.slice(rightIndex)
    );
}


//quicksort

function quickSort(
    compare,
    elements = [],
    lowerIndex = 0,
    upperIndex = elements.length - 1
) {
    if (lowerIndex < upperIndex) {
        const index = partition(compare, elements, lowerIndex, upperIndex);
        quickSort(compare, elements, lowerIndex, index - 1);
        quickSort(compare, elements, index + 1, upperIndex);
    }
    return elements;
}

function partition(compare, elements, lowerIndex, upperIndex) {
    const pivotValue = elements[upperIndex];
    let partitionIndex = lowerIndex;

    for (let index = lowerIndex; index < upperIndex; index++) {
        const comparison = compare(pivotValue, elements[index]);

        if (comparison > 0) {
            if (partitionIndex !== index) {
                [elements[index], elements[partitionIndex]] = [
                    elements[partitionIndex],
                    elements[index],
                ];
            }
            partitionIndex++;
        }
    }

    [elements[partitionIndex], elements[upperIndex]] = [
        elements[upperIndex],
        elements[partitionIndex],
    ];
    return partitionIndex;
}