//merge sort
// function merge(arr1, arr2) {
//   let i = 0;
//   let j = 0;
//   let sortedArray = [];

//   while (j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       sortedArray.push(arr1[i]);
//       i++;
//     } else {
//       sortedArray.push(arr2[j]);
//       j++;
//     }
//   }

//   while (i < arr1.length) {
//     sortedArray.push(arr1[i]);
//     i++;
//   }

//   while (j < arr2.length) {
//     sortedArray.push(arr2[j]);
//     j++;
//   }

//   return sortedArray;
// }

// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   let middleIndex = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, middleIndex));
//   let right = mergeSort(arr.slice(middleIndex));

//   return [].concat(merge(left, right));
// }

// console.log(mergeSort([5, 1, 4, 10, 9, 12, -1, -23, 100, 65, 45])); // both array should be sorted in same order(asc/desc)

// ---------------------------------------------------------------------------

// Quick sort

// function pivot(arr, startIndex = 0, endIndex) {
//   let pivot = startIndex;
//   let pivotIndex = startIndex;

//   for (let i = startIndex + 1; i < endIndex; i++) {
//     if (arr[pivot] > arr[i]) {
//       pivotIndex++;
//       [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
//     }
//   }
//   [arr[pivot], arr[pivotIndex]] = [arr[pivotIndex], arr[pivot]];

//   return pivotIndex;
// }

// function quickSort(arr, left = 0, right = arr.length) {
//   if (left < right) {
//     let pivotIndex = pivot(arr, left, right);
//     quickSort(arr, left, pivotIndex - 1);
//     quickSort(arr, pivotIndex + 1, right);
//   }
//   return arr;
// }

// console.log(quickSort([1, 2, 0, -1, 20, 13]));

//------------------------------------------------------------------------------------------------------------

// Radix sort

// function getDigit(number, i) {
//   return Math.floor(Math.abs(number) / Math.pow(10, i)) % 10;
//   //   let convertToArr = Math.abs(number).toString().split("").reverse();
//   //   if (convertToArr.length <= i || i < 0) return 0;
//   //   return parseInt(convertToArr[i]);
// }

// function countDigit(num) {
//   if (num === 0) return 1;
//   return Math.floor(Math.log10(Math.abs(num))) + 1;
//   //   return Math.abs(num).toString().split("").length;
// }

// function mostDigits(numArr) {
//   let maxDigit = 0;

//   for (let num of numArr) {
//     if (countDigit(num) > maxDigit) {
//       maxDigit = countDigit(num);
//     }
//   }
//   return maxDigit;
// }

// function radixSort(numArr) {
//   let maxDigits = mostDigits(numArr);

//   for (let i = 0; i < maxDigits; i++) {
//     let sortBucket = Array.from({ length: 10 }, () => []);
//     for (let num of numArr) {
//       const digit = getDigit(num, i);
//       sortBucket[digit].push(num);
//     }
//     numArr = sortBucket.flat(1);
//   }

//   return numArr;
// }

// console.log(radixSort([-3, 122, 43255, 234, 34525, 4545, 97897]));

//------------------------------------------------------------------------------------
