export const concatenateArraysUnique = (arr1, arr2) => {
  const arr3 = arr1.concat(arr2);
  return [...new Set(arr3)];
}