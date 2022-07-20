import React, { useState } from "react";
import styled from "styled-components";
import { borderRadius, gap } from "../constants";

const getBackgroundColor = (isDragging, isGroupedOver, theme) => {
  if (isDragging) {
    return theme.cardBackgroundDragging;
  }

  if (isGroupedOver) {
    return theme.columnBackground;
  }

  return theme.lightest;
};

const getBorderColor = (isDragging, theme) =>
  isDragging ? theme.cardDraggingBorder : "transparent";

const minHeight = 40;

const Container = styled.div`
  position: relative;
  border-radius: ${borderRadius}px;
  border: 2px solid transparent;
  border-color: ${({ isDragging, theme }) => getBorderColor(isDragging, theme)};
  background-color: ${({ isDragging, isGroupedOver, theme }) =>
    getBackgroundColor(isDragging, isGroupedOver, theme)};
  box-shadow: ${({ isDragging }) =>
    isDragging ? `2px 2px 1px ${({ theme }) => theme.cardShallow}` : "none"};
  box-sizing: border-box;
  padding: ${gap}px;
  min-height: ${minHeight}px;
  margin-bottom: ${gap}px;
  user-select: none;

  color: ${({ theme }) => theme.cardBorder};

  &:hover,
  &:active {
    color: ${({ theme }) => theme.cardBorder};
    text-decoration: none;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.cardDraggingBorder};
    box-shadow: none;
  }

  display: flex;
`;

const Content = styled.div`
  flex-grow: 1;
`;

const EditButton = styled.button`
  background-color: transparent;
  position: absolute;
  left: 220px;
  align-self: flex-start;
  top: 0;
`;

function getStyle(provided, style) {
  if (!style) {
    return provided.draggableProps.style;
  }

  return {
    ...provided.draggableProps.style,
    ...style,
  };
}

function CardItem(props) {
  const {
    card,
    isDragging,
    isGroupedOver,
    provided,
    style,
    index,
    setCardToEdit,
  } = props;

  const [mouseOver, setMouseOver] = useState(false);

  return (
    <Container
      isDragging={isDragging}
      isGroupedOver={isGroupedOver}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={getStyle(provided, style)}
      data-is-dragging={isDragging}
      data-testid={card.id}
      data-index={index}
      aria-label={card.description}
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <EditButton
        style={{ display: mouseOver ? "block" : "none" }}
        onClick={() => setCardToEdit(card)}
      >
        <i className="fa fa-pen"></i>
      </EditButton>
      <Content>{card.description}</Content>
    </Container>
  );
}

export default React.memo(CardItem);
