import styled from "styled-components";

export const ValueBox = styled.div`
    padding: 42px 0;

    background-color: ${({ theme }) => theme.colors.gray06};
`;

export const Body = styled.div`
    position: relative;
`;

export const ValueInfo = styled.div`
    display: flex;
`;

export const Value = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    width: 100%;
    height: 100%;

    padding: 24px 36px;

    background-color: ${({ theme }) => theme.colors.white};

    box-shadow: rgba(0, 0, 0, 0.02) 0 3px 8px;

    span{
        font-size: 24px;
        font-weight: 400;

        text-align: center;

        line-height: 26px;

        margin-top: 12px;
    }
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