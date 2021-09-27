import styled from "styled-components";

import { DefaultText } from '../../styles/globalStyle';

export const OrangeLayerWidth = styled.div`
    background-color: ${({ theme }) => theme.colors.orange};

    width: 100%;
    height: 250px;

    position: absolute;
    top: 0;

    z-index: -1;
`;

export const LoremBox = styled.div`
    background-color: ${({ theme }) => theme.colors.gray06};

    position: relative;
    
    padding: ${({ theme }) => theme.padding.default} 0;

    z-index: -1;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    background-color: ${({ theme }) => theme.colors.gray05};

    width: 100%;
    height: 450px;

    padding: 24px;

    box-shadow: rgba(0, 0, 0, 0.02) 0 3px 8px;

    @media(max-width: 1200px){
        height: 375px;
    }
    @media(max-width: 992px){
        height: 325px;
    }
    @media(max-width: 768px){
        height: 400px;

        margin: 12px 0;
    }

    p{
        color: ${({ theme }) => theme.colors.black};

        font-size: 32px;
        font-weight: 600;

        margin: 0;

        @media(max-width: 1200px){
            font-size: 28px;
        }
        @media(max-width: 992px){
            font-size: 24px;
        }
        @media(max-width: 768px){
            font-size: 26px;
        }
    }

    span{
        color: ${({ theme }) => theme.colors.black};

        ${DefaultText};

        margin: 0;
    }

    div.side-a-side{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
`;

export const SeeMoreButton = styled.div`
    display: flex;  
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.orange};

    width: 42px;
    height: 42px;

    @media(max-width: 992px){
        width: 36px;
        height: 36px;
    }
    @media(max-width: 768px){
        width: 42px;
        height: 42px;
    }
`;