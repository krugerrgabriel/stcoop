import styled from "styled-components";

import { OrangeLayer } from "../../styles";
import { DefaultText, DefaultMiniTitle } from '../../styles/globalStyle';

export const OqueSaoBox = styled.div`
    display: flex;
    align-items: center;

    position: relative;

    height: 562px;

    @media(max-width: 992px){
        .margin-top{
            margin: 24px 0 0 0;
        }
    }
    @media(max-width: 576px){
        .padding-576{
            padding-left: 0;
        }
    }
`;

export const OrangeLayerEdit = styled(OrangeLayer)`
    height: 100%;
    width: 35vw;

    z-index: -1;

    @media (max-width: 768px){
        width: 2.5vw;
    }
    @media (max-width: 600px){
        width: 1vw;
    }
`;

export const ImageLayer = styled.div`
    position: relative;

    width: 745px;
    height: 419px;
    @media(max-width: 1400px){
        width: 665px;
        height: 374px;
    }
    @media(max-width: 1200px){
        width: 560px;
        height: 315px;
    }
    @media(max-width: 992px){
        width: 420px;
        height: 236px;
    }
    @media(max-width: 768px){
        width: 540px;
        height: 304px;
    }
    @media(max-width: 576px){
        width: 100vw;
        height: calc(100vw/1.78);
    }

    z-index: 2;
`;

export const BaseText = styled.span`
    color: ${({ theme }) => theme.colors.gray02};

    ${DefaultText};

    margin: 0 0 36px 0;
`;

export const ItemBox = styled.div`
    width: 100vw;
`;

export const ItemImageAbsolute = styled.div<{ left?: Boolean; right?: Boolean; }>`
    position: absolute;

    ${(props) => props.left ? 'left: 0;' : 'right: 0;'};
    top: 0;
`;

export const ItemImage = styled.div`
    position: relative;

    width: 50vw;
    height: 533px;
    @media (max-width: 1400px){
        height: 475px;
    }
    @media (max-width: 1200px){
        height: 400px;
    }
    @media (max-width: 992px){
        height: 475px;
    }
    @media (max-width: 768px){
        width: 100vw;
        height: 325px;
    }
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;

    width: 100vw;
    height: 533px;
    @media (max-width: 1400px){
        height: 475px;
    }
    @media (max-width: 1200px){
        height: 400px;
    }
    @media (max-width: 992px){
        height: 475px;
    }
    @media (max-width: 768px){
        height: auto;
        &.item-1,&.item-2{
            margin: 42px 0 0 0;
        }
        &.item-3{
            margin: 42px 0;
        }
    }

    position: relative;

    div.info{
        width: 500px;

        margin: 0 42px;

        @media(max-width: 1200px){
            width: 385px;
        }
        @media(max-width: 992px){
            width: 275px;
        }
        @media(max-width: 768px){
            width: 100%;

            margin: 365px 0 0 0;
        }

        p{
            color: ${({ theme }) => theme.colors.gray01};

            ${DefaultMiniTitle};

            margin: 0 0 6px 0;
        }

        span{
            color: ${({ theme }) => theme.colors.gray01};

            ${DefaultText};
        }
    }
`;