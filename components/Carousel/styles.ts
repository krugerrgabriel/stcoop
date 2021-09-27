import styled from 'styled-components';

import { OrangeLayer } from "../../styles/";
import { DefaultText } from '../../styles/globalStyle';

export const Body = styled.div`
    height: auto;

    padding: ${({ theme }) => theme.padding.default} 0 0 0;

    *{
        z-index: 500;
    }
    @media(max-width: 576px) {
        padding: 24px 0 0 0;
    }
`;

export const CarouselPanel = styled.div`
    @media(max-width: 768px){
        margin: 16px 0 0 0;
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
            font-size: 10px;
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
            font-size: 24px;

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
            font-size: 12px;

            line-height: 12px;
        }
        @media(max-width: 768px) {
            font-size: 16px;
            
            line-height: 20px;
        }
    }
`;

export const OrangeLayerEdit = styled(OrangeLayer)`
    height: 685px;

    z-index: -1;
`;

export const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    padding: 30px 12px 0 0;

    @media(max-width: 768px){
        display: none;
    }
`;

export const CarouselButtonBox = styled.div`
    display: flex;
    align-items: center;    
    justify-content: flex-end;
`;

export const CarouselButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.orange};

    margin: 30px 12px;

    padding: 9px 13px;

    cursor: pointer;
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

export const MediaLayer = styled.div`
    .youtube-frame{
        width: 760px;
        height: 428px;
        @media(max-width: 1400px) {
            width: 740px;
            height: 417px;
        }
        @media(max-width: 1400px) {
            width: 600px;
            height: 338px;
        }
        @media(max-width: 992px) {
            width: 450px;
            height: 250px;
        }
        @media(max-width: 768px) {
            width: 576px;
            height: 325px;
        }
        @media(max-width: 576px) {
            width: 459px;
            height: 260px;
        }
    }
`;