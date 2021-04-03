import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;  
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;  
    text-align: left;
    font-size: var(--small-font);
    color: var(--main-color);
    height: 4.063rem;
`;

export const Input = styled.input`
    height: 2.625rem;
    border: none;
    border-bottom: 1px solid var(--main-color);
    font-size: var(--default-font);
    font-family: var(--main-font);
    color: #000000;
    ${(props) => props.error && `
    border-bottom: 1px solid var(--error-color);
  `}
`;

export const Warning = styled.p`
    font-size: var(--small-font);
    color: var(--error-color);
`;
