import styled from 'styled-components';

export const Page = styled.div`
   display: flex;
   flex-direction: row;
   min-height:100vh;
   @media(max-width: 780px){
        flex-direction: column
   }
  
`;
