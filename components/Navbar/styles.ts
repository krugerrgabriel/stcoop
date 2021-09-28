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

    div.sidenav-trigger{
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${({ theme }) => theme.colors.black};

        position: absolute;
        right: 12px;
        top: 0;
        bottom: 0;
        margin-top: auto;
        margin-bottom: auto;

        width: 52px;
        height: 52px;
        
        cursor: pointer;

        display: none;

        transition: 0.2s;

        z-index: 999;

        &:hover{
            transform: scale(1.005);

            box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
        }
        &:active{
            transform: scale(0.995);
        }

        @media(max-width: 992px) {
            display: flex;
        }

        div.wrapper{
            position: relative;
            width: 24px;
            height: 24px;
        }
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
    &.main{
        @media(max-width: 992px) {
            display: none;
        }
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

export const Sidenav = styled.div<{ active?: Boolean; }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    background-color: ${({ theme }) => theme.colors.orange};

    position: absolute;
    right: 0;
    top: ${(props) => props.active ? '0' : '-200vh'};

    width: 300px;

    margin: 112px 0 0 0;
    padding: 24px;

    transition: 0.2s;

    box-shadow: 1px 6px 8px rgba(0, 0, 0, 0.05);

    z-index: 997;

    a{
        color: ${({ theme }) => theme.colors.white};
        
        font-size: 16px;
        font-weight: 500;

        margin: 12px 0;

        &:hover{
            color: ${({ theme }) => theme.colors.gray05} !important;
        }
        &.last{
            margin: 12px 0 24px 0;
        }
    }
`;