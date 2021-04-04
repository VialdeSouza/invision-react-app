import styled from 'styled-components';

export const WrapperBanner = styled.div`
    width: 100%;
    background-color: var(--green-color);
`;
export const Caption = styled.div`
    align-items: center;
    margin: 40px 0;
    color: var(--contrast-main-color)
`;

export const Title = styled.h4`
    font-size: var(--large-font);
    font-weight: normal;
    margin: 15px 0;
`;

export const Description = styled.p`
    font-size: var(--medium-font);
`;

export const ImageBanner = styled.div`
    height: 80%;
    width: 80%;
    margin: auto;
`;

export const Indicator = styled.button`
    background-color: rgba(255, 255, 255, 0.25);
    width: 11px;
    height: 11px;
    border: none;
    border-radius: 90px;
    display: inline-block;
    margin: 0 8px;
    cursor: pointer;
    ${(props) => props.isSelected && `
    background-color: #FFFFFF;
    width: 26px;
  `}
`;
