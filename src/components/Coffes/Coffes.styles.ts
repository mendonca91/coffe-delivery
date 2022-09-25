import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 32px 80px;
  gap: 32px;

  h2 {
    font-weight: 800;
    font-size: 32px;
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
`;
