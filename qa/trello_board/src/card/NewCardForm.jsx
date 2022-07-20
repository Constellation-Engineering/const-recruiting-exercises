import React from "react";
import styled from "styled-components";
import { borderRadius, gap } from "../constants";

const minHeight = 40;

const Container = styled.div`
  border-radius: ${borderRadius}px;
  border: 2px solid transparent;
  border-color: transparent;
  background-color: ${({ theme }) => theme.lightest};
  box-shadow: none;
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
    border-color: ${(props) => ({ theme }) => theme.cardDraggingBorder};
    box-shadow: none;
  }

  display: flex;
`;

const Content = styled.textarea`
  flex-grow: 1;
  overflow: auto;
  resize: vertical;
  background: none;
  border: none;
  box-shadow: none;
  height: auto;
  max-height: 162px;
  min-height: 54px;
  padding: 0;
  &:focus {
    outline: none;
  }
`;

function NewCardForm({ card, setNewCardDescription }) {
  if (!card) {
    return null;
  }
  return (
    <Container aria-label={card.description}>
      <Content
        value={card.description}
        onChange={(event) => setNewCardDescription(event.target.value)}
      />
    </Container>
  );
}

export default React.memo(NewCardForm);
