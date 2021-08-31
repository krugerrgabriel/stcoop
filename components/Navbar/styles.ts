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

    margin: 0 0 42px 0;

    *{
        z-index: 995;
    }
`;

export const Logo = styled(Image)`
    height: 100px;
`;

export const Button = styled.a`
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};

    font-size: 16px;
    font-weight: 600;

    width: 100%;

    text-align: center;

    padding: 12px 24px;
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
        }
    }
`;

export const OrangeLayerEdit = styled(OrangeLayer)`
    height: 100%;

    z-index: 994;
`;