import styled from "styled-components";

import { DefaultText } from '../../styles/globalStyle';

export const InfoBox = styled.div``;

export const CooperativismoBox = styled.div`
    padding: ${({ theme }) => theme.padding.default} 0;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;

    margin: 12px 0;

    span{
        color: ${({ theme }) => theme.colors.white};
        
        font-size: 22px;
        font-weight: 700;

        background-color: ${({ theme }) => theme.colors.orange};

        width: 36px;
        height: 36px;

        text-align: center;

        margin: 0;
    }
    p{
        font-size: 22px;
        font-weight: 600;
        
        margin: 0 0 0 12px;
    }
`;

export const TextDevelop = styled.p`
    color: ${({ theme }) => theme.colors.black};

    ${DefaultText};

    margin: 8px 0;
`;