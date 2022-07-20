/**
 * Returns a new array with the positions changed between the item with `sourceIndex`
 * and the one with `targetIndex`.
 * @param {any} list
 * @param {number} sourceIndex
 * @param {number} targetIndex
 */
export const changePosition = (list, sourceIndex, targetIndex) => {
  const result = [...list];
  const [removed] = result.splice(sourceIndex, 1);
  result.splice(targetIndex, 0, removed);

  return result;
};
