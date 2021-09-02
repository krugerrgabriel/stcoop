import styled from "styled-components";

export const OrangeLayer = styled.div`
    position: absolute;
    top: 0;
    right: 0;

    background-color: ${({ theme }) => theme.colors.orange};

    width: 32.5vw;
`;

export const TitleBox = styled.div`
    display: flex;
    align-items: baseline;

    margin: 0 0 28px 0;
`;

export const Title = styled.p<{ white?: Boolean; }>`
    color: ${(props) => props.white ? props.theme.colors.white : props.theme.colors.gray01};

    font-size: 32px;
    font-weight: 700;

    margin: 0;
`;

export const Subtitle = styled.span<{ white?: Boolean; }>`
    color: ${(props) => props.white ? props.theme.colors.white : props.theme.colors.gray02};

    font-size: 16px;
    font-weight: 400;

    margin: 0 0 0 12px;
`;

export const FullBanner = styled.div`
    display: flex;
    align-items: flex-end;

    position: relative;

    width: 100vw;
    height: 300px;

    padding: 42px;

    z-index: -1;

    *{
        z-index: -1;
    }

    h1{
        color: ${({ theme }) => theme.colors.white};
        
        font-size: 48px;
        font-weight: 700;

        margin: 0;

        z-index: 2;
    }

`;