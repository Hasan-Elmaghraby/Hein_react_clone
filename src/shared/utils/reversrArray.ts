export const reverseArray = (arr) => {
  let temp = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    temp[i] = arr[arr.length - i - 1];
  }

  return temp;
};
