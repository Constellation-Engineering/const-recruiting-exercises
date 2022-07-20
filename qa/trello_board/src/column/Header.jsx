import styled from "styled-components";
import { borderRadius } from "../constants";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: ${borderRadius}px;
  border-top-right-radius: ${borderRadius}px;
  background-color: ${({ isDragging, theme }) =>
    isDragging ? theme.columnBackgroundHover : theme.columnBackground};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.columnBackgroundHover};
  }
`;

export default Header;
