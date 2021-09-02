import styled from "styled-components";

import Image from 'next/image';

export const NewsCardBox = styled.div`
    padding: 42px 0;
`;

export const Body = styled.div`
    box-shadow: rgba(0, 0, 0, 0.05) 4px 4px 12px;

    p{
        color: ${({ theme }) => theme.colors.gray01};

        font-size: 24px;
        font-weight: 600;

        margin: 0 0 6px 0;
    }

    span{
        color: ${({ theme }) => theme.colors.gray01};

        font-size: 18px;
        font-weight: 400;
    }
`;

export const Info = styled.div`
    padding: 14px 24px 24px 24px;

    div.side-a-side{
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        margin: 18px 0 0 0;

        div.button{
            width: 142px;
        }
    }
`;

export const NewsImage = styled(Image)``;