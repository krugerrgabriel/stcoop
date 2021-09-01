import styled from "styled-components";

export const PartnersBox = styled.div`
    padding: 42px 0;
`;

export const Body = styled.div`
    position: relative;
`;

export const Company = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    padding: 32px 42px;

    border: 2px solid rgba(184, 184, 184, 0.5);

    box-shadow: rgba(0, 0, 0, 0.02) 0 3px 8px;
`;

export const TriggerButton = styled.div<{ left?: Boolean; right?: Boolean; }>`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.orange};

    padding: 9px 13px;

    cursor: pointer;

    width: 42px;
    height: 42px;

    position: absolute;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;

    ${(props) => props.left ? 'left: -30px' : 'right: -30px;'};
`;