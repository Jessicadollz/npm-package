const sum = (arr) => arr.reduce((acc, num) => acc + num, 0);

const clearRepeats = (arr) => [...new Set(arr)];

const average = (arr) => arr.length === 0 ? 0 : sum(arr) / arr.length;

const findMax = (arr) => Math.max(...arr);

const findMin = (arr) => Math.min(...arr);

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const flattenArray = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);

const removeFalsyValues = (arr) => arr.filter(Boolean);

const arrayIntersection = (arr1, arr2) => arr1.filter(value => arr2.includes(value));

const arrayDifference = (arr1, arr2) => arr1.filter(value => !arr2.includes(value));

module.exports = {
  sum,
  clearRepeats,
  average,
  findMax,
  findMin,
  chunkArray,
  flattenArray,
  removeFalsyValues,
  arrayIntersection,
  arrayDifference,
};

// Sum of Array: Returns the sum of all elements.
// Clear Repeated Elements: Removes duplicate elements from the array.
// Average of Array: Returns the average value of all elements.
// Find Max: Finds the maximum value in the array.
// Find Min: Finds the minimum value in the array.
// Chunk Array: Splits the array into smaller arrays of a specified size.
// Flatten Array: Flattens a nested array into a single-level array.
// Remove Falsy Values: Removes all falsy values (e.g., 0, null, undefined, etc.).
// Array Intersection: Returns an array of common elements between two arrays.
// Array Difference: Returns elements present in one array but not in another.