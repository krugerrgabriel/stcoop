import styled from "styled-components";

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

    z-index: 999;
`;

export const ImageBox = styled.div`
    display: flex;
    justify-content: flex-end;

    position: relative;

    .youtube-frame{
        width: 900px;
        height: 505px;

        @media(max-width: 1600px){
            width: 750px;
            height: 422px;
        }
        @media(max-width: 1400px){
            width: 650px;
            height: 366px;
        }
        @media(max-width: 1200px){
            width: 550px;
            height: 310px;
        }
        @media(max-width: 992px){
            width: 375px;
            height: 211px;
        }
        @media(max-width: 768px){
            width: 540px;
            height: 304px;
        }
        @media(max-width: 768px){
            width: 100vw;
            height: calc(100vw/1.78);
        }
    }

`;

export const FaqBox = styled.div`
    padding: ${({ theme }) => theme.padding.default} 0;
`;