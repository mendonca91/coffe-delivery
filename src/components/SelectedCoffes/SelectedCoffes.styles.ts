import styled from "styled-components";


export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
width: 500px;
`;

export const DetailsContainer = styled.div`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`;

export const ConfirmationSectionContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button{
    padding: 16px;
    background-color: ${({theme})=>theme.yellow500};
    color: ${({theme})=>theme.white};
    font-weight: 700;
  }

 
`;