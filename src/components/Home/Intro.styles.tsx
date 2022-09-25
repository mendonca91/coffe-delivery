import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 160px;
`;

export const IntroText = styled.div`
  h1 {
    font-weight: 800;
    font-size: 48px;
    color: #272221;
  }

  p {
    font-weight: 400;
    font-size: 20px;
    color: #403937;
    font-stretch: 100;
  }
`;
export const IntroImage = styled.div`
  width: 480px;
`;

export const IntroAdvantages = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 60px;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      border-radius: 99px;
      padding: 8px;
      color: white;
    }
  }
`;
