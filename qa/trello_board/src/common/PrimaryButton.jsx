import styled from "styled-components";
import { borderRadius } from "../constants";

export const PrimaryButton = styled.button`
  background-color: ${({ theme }) => theme.primaryButton};
  box-shadow: none;
  border: none;
  color: ${({ theme }) => theme.lightest};
  height: 2.5rem;
  font-size: 1rem;
  border-radius: ${borderRadius}px;
  padding: 3px 10px;
  margin: 5px 10px;
`;
