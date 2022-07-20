/**
 * Returns a new array without the item in the specified `index`.
 * @param {Array} list
 * @param {number} index
 */
export const removeItem = (list, index) => {
  const result = [...list];
  result.splice(index, 1);
  return result;
};
