import styled from 'styled-components';

import Button from "../Button/";

import { OrangeLayer } from "../../styles/";

export const Body = styled.div`
    height: auto;

    margin: 42px 0 0 0;

    *{
        z-index: 500;
    }
`;

export const CarouselPanel = styled.div`
    strong{
        color: ${({ theme }) => theme.colors.orange};

        font-size: 18px;
        font-weight: 700;
    }

    p{
        color: ${({ theme }) => theme.colors.gray01};

        font-size: 47px;

        font-weight: 700;

        line-height: 47px;

        margin: 8px 0 14px 0;
    }

    span{
        color: ${({ theme }) => theme.colors.gray02};

        font-size: 18px;
        font-weight: 400;

        line-height: 28px;

        margin: 0 0 36px 0;
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

export const MediaLayer = styled.div``;