import styled from "styled-components";

import { DefaultText } from '../../styles/globalStyle';

export const Body = styled.div`
    position: relative;

    height: 500px;

    @media(max-width: 1600px){
        height: 450px;
    }
    @media(max-width: 1400px){
        height: 400px;
    }
    @media(max-width: 1200px){
        height: 350px;
    }
    @media(max-width: 992px){
        height: unset;

        padding: calc(100vw/1.78 - 48px) 0 36px 0;
    }
`;

export const TabsBox = styled.div`
    width: 100%;

    padding: 96px 0 0 0;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;    
`;

export const Tab = styled.div<{ active?: Boolean }>`
    font-size: 18px;
    font-weight: ${(props) => props.active ? 500 : 400};

    text-align: center;

    width: 100%;

    cursor: pointer;
    
    ${(props) => props.active ? `border-bottom: 3px solid ${props.theme.colors.orange};` : 'border-bottom: 3px solid #707070;'};

    transition: 0.2s;
`;

export const TabText = styled.p`
    ${DefaultText};

    padding: 26px 42px;
`;

export const VideoLayer = styled.div`
    position: absolute;

    right: 0;
    top: 0;

    z-index: 999;
`;

export const ImageBox = styled.div`
    position: relative;

    display: flex;
    justify-content: flex-end;

    .youtube-frame{
        width: 810px;
        height: calc(810px / 1.7777777777777777777777777777778);

        @media(max-width: 1600px){
            width: 712px;
            height: calc(712px / 1.7777777777777777777777777777778);
        }
        @media(max-width: 1400px){
            width: 610px;
            height: calc(610px / 1.7777777777777777777777777777778);
        }
        @media(max-width: 1200px){
            width: 505px;
            height: calc(505px / 1.7777777777777777777777777777778);
        }
        @media(max-width: 992px){
            width: 100vw;
            height: calc(100vw / 1.7777777777777777777777777777778);
        }
    }
`;