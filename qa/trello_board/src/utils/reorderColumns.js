import { changePosition, insertItem, removeItem } from ".";

export const reorderColumns = ({ columns, source, destination }) => {
  const sourceColumnIndex = columns.findIndex(
    ({ id }) => id === source.droppableId
  );
  const sourceColumn = columns[sourceColumnIndex];
  const item = sourceColumn.cards[source.index];

  // moving to the same list
  if (source.droppableId === destination.droppableId) {
    const reordered = changePosition(
      sourceColumn.cards,
      source.index,
      destination.index
    );

    return columns.map((column) =>
      column.id === sourceColumn.id ? { ...column, cards: reordered } : column
    );
  }

  // moving to a different list
  const targetColumnIndex = columns.findIndex(
    ({ id }) => id === destination.droppableId
  );
  const targetColumn = columns[targetColumnIndex];

  // update source list
  const updatedSourceColumnItems = removeItem(sourceColumn.cards, source.index);

  // update target list
  const updatedTargetColumnItems = insertItem(
    targetColumn.cards,
    destination.index,
    item
  );

  const result = [...columns];
  result[sourceColumnIndex] = {
    ...sourceColumn,
    cards: updatedSourceColumnItems,
  };
  result[targetColumnIndex] = {
    ...targetColumn,
    cards: updatedTargetColumnItems,
  };

  return result;
};
