import React, { memo, useRef, useState } from "react";
import styled from "styled-components";
import { gap } from "../constants";
import CardList from "../card";
import ColumnName from "./ColumnName";
import { Draggable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";
import EditCardModal from "../card/EditCardModal";
import { PrimaryButton } from "../common";
import Header from "./Header";
import AddAnotherCardButton from "./AddAnotherCardButton";

const Container = styled.div`
  margin: ${gap}px;
  display: flex;
  flex-direction: column;
`;

const ButtonsContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.columnBackground};
`;

function Column({
  name,
  draggableId,
  cards,
  index,
  addCard,
  saveCard,
  deleteCard,
  changeColumnName,
}) {
  const [newCardDescription, setNewCardDescription] = useState("");
  const [addNewCard, setAddNewCard] = useState(false);
  const [cardToEdit, setCardToEdit] = useState(null);
  const [columnNameEditMode, setColumnNameEditMode] = useState(false);
  const columnRef = useRef(null);

  const handleAddCard = () => {
    addCard(index, {
      id: uuid(),
      description: newCardDescription,
    });
    setNewCardDescription("");
    setAddNewCard(false);
  };

  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided, snapshot) => (
        <Container ref={provided.innerRef} {...provided.draggableProps}>
          <Header isDragging={snapshot.isDragging}>
            {!columnNameEditMode && (
              <ColumnName
                onClick={() => setColumnNameEditMode(true)}
                isDragging={snapshot.isDragging}
                {...provided.dragHandleProps}
                aria-label={`${name} card list`}
              >
                {name}
              </ColumnName>
            )}
            {columnNameEditMode && (
              <ColumnName
                style={{ cursor: "auto" }}
                as="input"
                type="text"
                isDragging={snapshot.isDragging}
                {...provided.dragHandleProps}
                aria-label={`${name} card list`}
                value={name}
                onChange={(event) =>
                  changeColumnName(index, event.target.value)
                }
                onBlur={() => setColumnNameEditMode(false)}
                onKeyPress={(event) =>
                  event.key === "Enter" && setColumnNameEditMode(false)
                }
              />
            )}
          </Header>
          <CardList
            listId={draggableId}
            listType="CARD"
            style={{
              backgroundColor: snapshot.isDragging
                ? ({ theme }) => theme.columnBackgroundHover
                : null,
            }}
            cards={cards}
            addNewCard={addNewCard}
            newCardText={newCardDescription}
            setNewCardDescription={setNewCardDescription}
            setCardToEdit={setCardToEdit}
            columnRef={columnRef}
          />
          {addNewCard ? (
            <ButtonsContainer>
              <PrimaryButton onClick={handleAddCard}>Add Card</PrimaryButton>

              <button
                onClick={() => {
                  setAddNewCard(false);
                  setNewCardDescription("");
                }}
              >
                <i className="fas fa-times fa-2x"></i>
              </button>
            </ButtonsContainer>
          ) : (
            <AddAnotherCardButton onClick={() => setAddNewCard(true)}>
              <i className="fas fa-plus"></i> Add another card
            </AddAnotherCardButton>
          )}
          <EditCardModal
            boundaries={columnRef.current?.getBoundingClientRect() || {}}
            isOpen={!!cardToEdit}
            onClose={() => setCardToEdit(null)}
            card={cardToEdit}
            setCardDescription={(text) =>
              setCardToEdit((prev) => ({ ...prev, description: text }))
            }
            onSave={() => {
              saveCard(index, cardToEdit);
              setCardToEdit(null);
            }}
            onDelete={() => {
              deleteCard(index, cardToEdit.id);
              setCardToEdit(null);
            }}
          />
        </Container>
      )}
    </Draggable>
  );
}

export default memo(Column);
