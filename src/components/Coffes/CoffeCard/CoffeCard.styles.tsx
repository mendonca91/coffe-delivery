import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 256px;
  height: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 16px;
  background: #f3f2f2;
  border-radius: 6px 36px;
  margin-bottom: 40px;

  img {
    width: 100px;
    margin-top: -30px;
  }
`;

export const CoffeType = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  max-width: 100%;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 8px;
    background-color: #f1e9c9;
    border-radius: 100px;
    width: 81px;
    height: 21px;
    font-weight: 700;
    font-size: 10px;
    color: #c47f17;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  strong {
    color: #403937;
    font-weight: 700;
    font-size: 20px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: #8d8686;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 29px;

  margin-bottom: 16px;

  strong {
    font-size: 20px;
    text-align: right;
    color: #574f4d;
  }
`;

export const CoffeAmout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;
  background: #e6e5e5;
  border-radius: 6px;

  button {
    border: none;
    background-color: transparent;
    color: #8047f8;
    cursor: pointer;
  }
  span{
    margin: 0 8px;
  }
`;

export const Cart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  width: 38px;
  height: 38px;
  color: ${({theme})=> theme.white};

  background: #4b2995;
  border-radius: 6px;
`;
