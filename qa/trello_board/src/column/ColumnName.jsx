import styled from "styled-components";
import { gap } from "../constants";

const ColumnName = styled.h4`
  padding: ${gap}px;
  transition: background-color ease 0.2s;
  flex-grow: 1;
  user-select: none;
  position: relative;
  margin: 8px;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.columnNameFocus};
    outline-offset: 2px;
  }
`;

export default ColumnName;
