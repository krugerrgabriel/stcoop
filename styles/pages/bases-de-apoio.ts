import styled from "styled-components";

import { OrangeLayer } from "../../styles";

export const OqueSaoBox = styled.div`
    display: flex;
    align-items: center;

    position: relative;

    height: 562px;
`;

export const OrangeLayerEdit = styled(OrangeLayer)`
    height: 100%;
`;

export const ImageLayer = styled.div`
    position: relative;

    width: 745px;
    height: 419px;

    z-index: 2;
`;

export const BaseTitle = styled.p`
    color: ${({ theme }) => theme.colors.gray01};

    font-size: 47px;

    font-weight: 700;

    line-height: 47px;

    margin: 8px 0 14px 0;
`;

export const BaseText = styled.span`
    color: ${({ theme }) => theme.colors.gray02};

    font-size: 18px;
    font-weight: 400;

    line-height: 28px;

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
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;

    width: 100vw;
    height: 533px;

    position: relative;

    div.info{
        width: 500px;

        margin: 0 42px;

        p{
            color: ${({ theme }) => theme.colors.gray01};

            font-size: 28px;
            font-weight: 600;

            margin: 0 0 6px 0;
        }

        span{
            color: ${({ theme }) => theme.colors.gray01};

            font-size: 20px;
            font-weight: 400;

            line-height: 32px;
        }
    }
`;