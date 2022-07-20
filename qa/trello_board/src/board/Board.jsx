import React, { memo, useCallback, useState } from "react";
import styled from "styled-components";
import Column from "../column";
import { reorderColumns, changePosition } from "../utils";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  background-color: ${({ theme }) => theme.boardBackground};
  min-height: 100vh;
  min-width: 100vw;
  display: inline-flex;
`;

function Board({ initialData }) {
  const [columns, setColumns] = useState(initialData);

  const changeColumnName = useCallback((columnIndex, newName) => {
    setColumns((prevColumns) => {
      const newColumns = [...prevColumns];
      newColumns[columnIndex] = {
        ...newColumns[columnIndex],
        name: newName,
      };
      return newColumns;
    });
  }, []);

  const addCard = useCallback((columnIndex, card) => {
    setColumns((prevColumns) => {
      const newColumns = [...prevColumns];
      newColumns[columnIndex] = {
        ...newColumns[columnIndex],
        cards: [...newColumns[columnIndex].cards, card],
      };
      return newColumns;
    });
  }, []);

  const saveCard = useCallback((columnIndex, card) => {
    setColumns((prevColumns) => {
      const newColumns = [...prevColumns];
      newColumns[columnIndex] = {
        ...newColumns[columnIndex],
        cards: newColumns[columnIndex].cards.map((item) =>
          item.id === card.id ? card : item
        ),
      };
      return newColumns;
    });
  }, []);

  const deleteCard = useCallback((columnIndex, cardId) => {
    setColumns((prevColumns) => {
      const newColumns = [...prevColumns];
      newColumns[columnIndex] = {
        ...newColumns[columnIndex],
        cards: newColumns[columnIndex].cards.filter(
          (item) => item.id !== cardId
        ),
      };
      return newColumns;
    });
  }, []);

  const onDragEnd = useCallback(
    ({ type, source, destination }) => {
      // dropped nowhere
      if (!destination) {
        return;
      }

      // did not move anywhere
      if (
        source.droppableId === destination.droppableId &&
        source.index === destination.index
      ) {
        return;
      }

      // reordering column
      if (type === "COLUMN") {
        const orderedColumns = changePosition(
          columns,
          source.index,
          destination.index
        );

        setColumns(orderedColumns);

        return;
      }

      // reordering cards
      const orderedColumns = reorderColumns({
        columns,
        source,
        destination,
      });

      setColumns(orderedColumns);
    },
    [columns]
  );

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="board" type="COLUMN" direction="horizontal">
          {(provided) => (
            <Container ref={provided.innerRef} {...provided.droppableProps}>
              {columns.map((column, index) => (
                <Column
                  key={column.id}
                  index={index}
                  name={column.name}
                  cards={column.cards}
                  draggableId={column.id}
                  addCard={addCard}
                  saveCard={saveCard}
                  deleteCard={deleteCard}
                  changeColumnName={changeColumnName}
                />
              ))}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

export default memo(Board);
