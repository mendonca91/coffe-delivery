import styled, { css } from "styled-components";

export const PaymentMethodContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }
  input:checked + label div {
    ${({ theme }) => css`
      background: ${theme.purple200};
      border-color: ${theme.purple500};
      &:hover {
        background: ${theme.purple200};
      }
    `}
  }
`;

export const ContentContainer = styled.div`
  padding: 0 1rem;
  background: ${({ theme }) => theme.gray300};
  color: ${({ theme }) => theme.gray700};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme.gray300};
  transition: 0.4s;
  cursor: pointer;
  svg {
    color: ${({ theme }) => theme.purple500};
  }
  &:hover {
    background: ${({ theme }) => theme.gray500};
  }
  user-select: none;
`;