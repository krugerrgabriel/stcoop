import styled from "styled-components";

import { DefaultMiniTitle } from './globalStyle';

export const OrangeLayer = styled.div<{ left?: Boolean; }>`
    position: absolute;
    top: 0;
    ${(props) => props.left ? 'left: 0;' : 'right: 0;'};

    background-color: ${({ theme }) => theme.colors.orange};

    width: 30vw;
`;

export const TitleBox = styled.div`
    display: flex;
    align-items: baseline;

    margin: 0 0 28px 0;

    @media(max-width: 768px){
        flex-direction: column;
    }
`;

export const Title = styled.p<{ white?: Boolean; }>`
    color: ${(props) => props.white ? props.theme.colors.white : props.theme.colors.gray01};

    font-size: 32px;
    font-weight: 700;

    line-height: 36px;

    margin: 0;
`;

export const Subtitle = styled.span<{ white?: Boolean; }>`
    color: ${(props) => props.white ? props.theme.colors.white : props.theme.colors.gray02};

    font-size: 16px;
    font-weight: 400;

    margin: 0 0 0 12px;

    @media(max-width: 768px){
        margin: 0;
    }
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
        font-weight: 800;

        letter-spacing: 1.5px;

        margin: 0;

        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.10);

        z-index: 2;

        @media(max-width: 576px){
            font-size: 36px;
        }
    }

`;

export const MiniTitle = styled.p`
    color: ${({ theme }) => theme.colors.black};

    ${DefaultMiniTitle};

    margin: 0;
`;