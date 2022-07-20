/**
 * Returns a new array with the specified `item` inserted in the `index` position.
 * @param {Array} list
 * @param {number} index
 * @param {any} item
 */
export const insertItem = (list, index, item) => {
  const result = [...list];
  result.splice(index, 0, item);
  return result;
};
