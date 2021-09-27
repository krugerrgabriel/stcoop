import styled from 'styled-components';

import Image from 'next/image';
import { Col } from 'react-bootstrap';
import { OrangeLayer } from "../../styles/";

export const Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(255, 255, 255, 0.99);
    backdrop-filter: blur(1px);

    height: 113px;
    width: 100%;

    margin: 0;

    *{
        z-index: 995;
    }
`;

export const LogoLayer = styled.div`
    position: relative;

    width: 225px;
    height: 64px;

    @media(max-width: 1200px) {
        width: 218px;
        height: 62px;
    }
    @media(max-width: 768px) {
        width: 168px;
        height: 48px;
    }
`;

export const Logo = styled(Image)`
    height: 100px;
`;

export const Button = styled.a<{ disabled?: Boolean }>`
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};

    font-size: 16px;
    font-weight: 600;

    width: 100%;

    text-align: center;

    padding: 12px 24px;

    cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointer'};

    @media(max-width: 1400px) {
        font-size: 13px;

        padding: 12px 12px;
    }

    &:hover{
        color: ${({ theme }) => theme.colors.white} !important;
    }

    a{  
        cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointer'};

        &:hover{
            color: ${({ theme }) => theme.colors.white} !important;
        }
    }
`;

export const ColEdit = styled(Col)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;

    &.links{
        a{
            font-size: 16px;
            font-weight: 500;

            @media(max-width: 1400px) {
                font-size: 13px;
            }
            @media(max-width: 1200px) {
                font-size: 12px;
            }
            @media(max-width: 992px) {
                display: none;
            }
        }
    }
`;

export const OrangeLayerEdit = styled(OrangeLayer)`
    height: 100%;

    z-index: 994;
`;