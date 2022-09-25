import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme?.gray900};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #f3f2f2;
  padding: 40px;
  gap: 32px;
  border-radius: 6px;
  box-shadow: 0px 2px 4px rgba(25, 31, 35, 0.24);
`;
