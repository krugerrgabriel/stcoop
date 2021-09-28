import styled from "styled-components";

import { OrangeLayer } from "../../styles";
import { DefaultText } from '../../styles/globalStyle';

export const OrangeLayerEdit = styled(OrangeLayer)`
    height: 100%;
    width: 35vw;

    z-index: -1;
`;

export const OrangeLayerEditTwo = styled(OrangeLayer)`
    height: 100%;
    width: 35vw;

    z-index: -1;

    @media (max-width: 576px){
        width: 2.5vw;
    }
`;

export const BeneficiosBox = styled.div`
    position: relative;

    padding: ${({ theme }) => theme.padding.default} 0 12px 0;

    @media(max-width: 992px){
        .black-992px{
            color: ${({ theme }) => theme.colors.black};
        }
    }
`;

export const Body = styled.div`
    height: 100%;

    @media (max-width: 992px){
        .offset-control-3{
            margin-left: calc(25% + 12px);
        }
        .offset-control-4{
            margin-left: 33.33333333%;
        }
    }
    @media (min-width: 992px){
        .offset-control-992px{
            margin-left: 8%;
        }
    }
    @media(max-width: 576px){
        .offset-control-3{
            margin-left: 0;
        }
        .offset-control-4{
            margin-left: 0;
        }
    }
`;

export const YouTubeLayer = styled.div`
    z-index: 501;

    .youtube-frame{
        width: 700px;
        height: 394px;
        @media(max-width: 1400px) {
            width: 665px;
            height: 374.5px;
        }
        @media(max-width: 1200px) {
            width: 560px;
            height: 315px;
        }
        @media(max-width: 992px) {
            width: 720px;
            height: 405px;
        }
        @media(max-width: 768px) {
            width: 540px;
            height: 304px;
        }
        @media(max-width: 576px) {
            width: 100vw;
            height: calc(100vw / 1.78);
        }
    }
`;

export const InfoPanel = styled.div`
    @media(max-width: 992px) {
        margin: 12px 0 0 12px;
    }
    strong{
        color: ${({ theme }) => theme.colors.orange};

        font-size: 18px;
        font-weight: 700;

        @media(max-width: 1400px) {
            font-size: 16px;
        }
        @media(max-width: 1200px) {
            font-size: 14px;
        }
        @media(max-width: 992px) {
            font-size: 11px;
        }
        @media(max-width: 768px) {
            font-size: 12px;
        }
    }

    p{
        color: ${({ theme }) => theme.colors.gray01};

        font-size: 47px;

        font-weight: 700;

        line-height: 47px;

        margin: 8px 0 14px 0;

        @media(max-width: 1400px) {
            font-size: 38px;

            line-height: 38px;
        }
        @media(max-width: 1200px) {
            font-size: 32px;

            line-height: 32px;
        }
        @media(max-width: 992px) {
            font-size: 25px;

            line-height: 26px;

            margin: 4px 0 4px 0;
        }
        @media(max-width: 768px) {
            font-size: 28px;
            
            line-height: 28px;
        }
    }

    span{
        color: ${({ theme }) => theme.colors.gray02};

        ${DefaultText};

        margin: 0 0 36px 0;

        @media(max-width: 992px) {
            font-size: 13px;

            line-height: 12px;
        }
        @media(max-width: 768px) {
            font-size: 16px;
            
            line-height: 20px;
        }
    }
`;

export const CarouselButtonBox = styled.div`
    display: flex;
    align-items: center;    
    justify-content: flex-end;

    @media(max-width: 992px){
        justify-content: flex-start;
    }
    @media(max-width: 576px){
        justify-content: center;
    }
`;

export const CarouselButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.orange};

    margin: 30px 12px;

    padding: 9px 13px;

    cursor: pointer;

    @media(max-width: 992px){
        justify-content: flex-start;

        margin: 30px 12px 0 0;
    }
    @media(max-width: 576px){
        justify-content: center;
    }
`;

export const CarouselCounterBox = styled.div`
    display: flex;
    align-items: center;
`;

export const CarouselCounter = styled.div<{ active: Boolean; }>`
    background-color: ${({ theme }) => theme.colors.orange};

    width: 32px;
    height: 8px;

    margin: 44px 2px;

    opacity: ${(props) => props.active ? '1' : '0.5'};

    cursor: pointer;
`;