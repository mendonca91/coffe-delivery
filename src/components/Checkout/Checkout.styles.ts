import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 78px 160px;
  gap: 32px;
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`;

export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  p {
    font-weight: 400;
    font-size: 16px;
    color: #403937;
    margin: 0;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    color: #574f4d;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 100%;

  input {
    padding: 12px;
    background: #eeeded;
    border: 1px solid #e6e5e5;
    border-radius: 4px;
    width: 200px;
  }

  div {
    display: flex;
    gap: 12px;
  }
`;


export const PaymentMethodContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;