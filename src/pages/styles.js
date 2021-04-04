import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.input`
    height: 2.813rem;
    width: 10.94rem;
    border: none;
    border-radius: 100px;
    background-color: var(--main-color);
    font-size: var(--default-font);
    color:  var(--contrast-main-color);
    margin: 40px auto;
`;

export const Logo = styled.h1`
    font-size: var(--biggest-font);
    color: #000000;
    letter-spacing: -2px;
    align-self: flex-end;
`;

export const Title = styled.h3`
    font-size: var(--large-font);
    font-weight: normal;
    color:  var(--main-color);
    letter-spacing: -1px;
    margin: 30px 0 20px 0;
`;

export const Helper = styled.span`
    display: block;
    text-align: center;
    font-size: var(--small-font);
    color: var(--main-color);
    margin-top: 5px;
    ${(props) => props.right && `
    text-align: right;
  `}
`;

export const TextLine = styled.span`
    display: block;
    text-align: center;
    font-size: var(--small-font);
    color: var(--main-color);
    width: 100%;
    max-width: 356px;
    &:after {
    display: inline-block;
    content: "";
    border-top: 1px solid var(--main-color);
    width: 140px;
    margin: 0 5px;
  }
  &:before {
    display: inline-block;
    content: "";
    border-top: 1px solid var(--main-color);
    width: 140px;
    margin: 0 5px;
  }
`;

export const StyledLink = styled(Link)`
    color: var(--green-color);
`;

export const WrapperContent = styled.div`
    display: flex;
    max-width: 720px;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 430px;
`;
