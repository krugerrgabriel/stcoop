import styled from "styled-components";

import { DefaultText } from '../../styles/globalStyle';

export const Body = styled.div<{ image: String; }>`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;

    width: 100%;
    height: 450px;

    background-color: ${({ theme }) => theme.colors.gray05};

    box-shadow: rgba(0, 0, 0, 0.02) 0 3px 8px;

    padding: 24px;

    @media(max-width: 1200px){
        height: 400px;
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
    }

    span{
        color: ${({ theme }) => theme.colors.black};

        ${DefaultText};
    }
`;