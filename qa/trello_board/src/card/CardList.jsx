import React, { memo } from "react";
import styled from "styled-components";
import CardItem from "./CardItem";
import { gap } from "../constants";
import { Draggable, Droppable } from "react-beautiful-dnd";
import NewCardForm from "./NewCardForm";

export const getBackgroundColor = (isDraggingOver, isDraggingFrom) => {
  if (isDraggingOver) {
    return ({ theme }) => theme.cardDraggingOver;
  }
  if (isDraggingFrom) {
    return ({ theme }) => theme.cardDraggingFrom;
  }
  return ({ theme }) => theme.columnBackground;
};

const Wrapper = styled.div`
  background-color: ${({ isDraggingOver, isDraggingFrom }) =>
    getBackgroundColor(isDraggingOver, isDraggingFrom)};
  display: flex;
  flex-direction: column;
  padding: ${gap}px;
  border: ${gap}px;
  padding-bottom: 0;
  transition: background-color 0.2s ease, opacity 0.1s ease;
  user-select: none;
  width: 250px;
`;

const DropZone = styled.div`
  padding-bottom: ${gap}px;
`;

const Container = styled.div``;

const InnerCardList = ({ cards, setCardToEdit }) => {
  return cards.map((card, index) => (
    <Draggable key={card.id} draggableId={card.id} index={index}>
      {(dragProvided, dragSnapshot) => (
        <CardItem
          key={card.id}
          card={card}
          isDragging={dragSnapshot.isDragging}
          isGroupedOver={Boolean(dragSnapshot.combineTargetFor)}
          provided={dragProvided}
          setCardToEdit={setCardToEdit}
        />
      )}
    </Draggable>
  ));
};

function CardList({
  listId = "LIST",
  listType,
  style,
  cards,
  addNewCard,
  newCardText,
  setNewCardDescription,
  setCardToEdit,
  columnRef,
}) {
  return (
    <Droppable droppableId={listId} type={listType}>
      {(dropProvided, dropSnapshot) => (
        <Wrapper
          style={style}
          isDraggingOver={dropSnapshot.isDraggingOver}
          isDraggingFrom={Boolean(dropSnapshot.draggingFromThisWith)}
          {...dropProvided.droppableProps}
        >
          <Container ref={columnRef}>
            <DropZone ref={dropProvided.innerRef}>
              <InnerCardList cards={cards} setCardToEdit={setCardToEdit} />
              {addNewCard && (
                <NewCardForm
                  card={{ description: newCardText }}
                  setNewCardDescription={setNewCardDescription}
                />
              )}
              {dropProvided.placeholder}
            </DropZone>
          </Container>
        </Wrapper>
      )}
    </Droppable>
  );
}

export default memo(CardList);
