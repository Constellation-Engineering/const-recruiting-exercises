import styled from "styled-components";

const AddAnotherCardButton = styled.button`
  border: none;
  text-align: left;
  padding: 10px;
  cursor: pointer;
  font-family: inherit;
  &:hover {
    background-color: ${({ theme }) => theme.addNewItemHover};
  }
`;

export default AddAnotherCardButton;
