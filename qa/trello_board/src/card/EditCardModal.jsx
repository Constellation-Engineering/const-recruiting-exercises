import styled, { ThemeContext } from "styled-components";
import React, { memo, useContext } from "react";
import Modal from "react-modal";
import { PrimaryButton } from "../common";
import NewCardForm from "./NewCardForm";

const ButtonsContainer = styled.div`
  display: flex;
  position: absolute;
  margin-top: 10px;
`;

const EditCardModal = ({
  isOpen,
  onClose,
  card,
  setCardDescription,
  onSave,
  onDelete,
  boundaries,
}) => {
  const theme = useContext(ThemeContext);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={modalStyle(theme, boundaries)}
      ariaHideApp={false}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
    >
      <NewCardForm card={card} setNewCardDescription={setCardDescription} />
      <ButtonsContainer>
        <PrimaryButton onClick={() => onSave(card)}>Save</PrimaryButton>
        <PrimaryButton onClick={() => onDelete(card)}>Delete</PrimaryButton>
      </ButtonsContainer>
    </Modal>
  );
};

export default memo(EditCardModal);

const modalStyle = (theme, boundaries) => ({
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.modalOverlay,
    zIndex: 900,
    height: "100vh",
    overflowY: "auto",
  },
  content: {
    position: "absolute",
    left: boundaries.left,
    width: boundaries.width,
    top: boundaries.top,
    height: "fit-content",
    padding: 0,
    overflow: "visible",
    fontSize: "1rem",
    backgroundColor: theme.lightest,
  },
});
