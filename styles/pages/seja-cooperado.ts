import styled from "styled-components";

import { LoadingState } from '../../styles/globalStyle';

export const OqueBox = styled.div`
    position: relative;

    padding: 0 0 42px 0;

    height: 560px;

    @media(max-width: 1600px){
        height: 500px;
    }
    @media(max-width: 1400px){
        height: 425px;
    }
    @media(max-width: 1200px){
        height: 375px;
    }
    @media(max-width: 768px){
        height: unset;

        padding: calc(100vw/1.78) 0 42px 0;
    }
`;

export const VideoLayer = styled.div`
    position: absolute;

    right: 0;
    top: 0;

    z-index: 994;
`;

export const ImageBox = styled.div<{ ready?: Boolean; }>`
    display: flex;
    justify-content: flex-end;

    position: relative;

    .youtube-frame{
        ${(props) => props.ready ? '' : LoadingState};
        width: 900px;
        height: calc(900px / 1.7777777777777777777777777777778);
        @media(max-width: 1400px) {
            width: 750px;
            height: calc(750px / 1.7777777777777777777777777777778);
        }
        @media(max-width: 1400px) {
            width: 650px;
            height: calc(650px / 1.7777777777777777777777777777778);
        }
        @media(max-width: 1200px){
            width: 505px;
            height: calc(505px / 1.7777777777777777777777777777778);
        }
        @media(max-width: 992px) {
            width: 375px;
            height: calc(375px / 1.7777777777777777777777777777778);
        }
        @media(max-width: 768px) {
            width: 100vw;
            height: calc(100vw / 1.7777777777777777777777777777778);
        }
    }

`;

export const FaqBox = styled.div`
    padding: ${({ theme }) => theme.padding.default} 0;
`;