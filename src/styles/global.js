import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle` 
  :root {
  --main-color: #707070;
  --contrast-main-color: #FFFF;
  --error-color: #DC143C;
  --green-color: #A9C5BA;
  --small-font: 0.875rem;
  --default-font: 1rem;
  --regular-font: 1.125rem;
  --medium-font: 1.25rem;
  --large-font: 1.875rem;
  --biggest-font: 2.188rem;
  --main-font: 'Mulish', sans-serif;
  --secondary-font: 'Lato', sans-serif;
  }

  * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    min-height: 100vh;
    background: #FFFFFF;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: var(--main-font);
  }
`;
