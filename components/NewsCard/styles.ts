import styled from "styled-components";

import { DefaultText } from '../../styles/globalStyle';

import Image from 'next/image';

export const NewsCardBox = styled.div`
    padding: 42px 0;
`;

export const Body = styled.div`
    box-shadow: rgba(0, 0, 0, 0.05) 4px 4px 12px;

    margin: 0 0 12px 0;

    div.imageLayer{
        position: relative;

        width: 100%;
        height: 225px;

        @media (max-width: 1400px){
            height: 200px;
        }
        @media (max-width: 1200px){
            height: 175px;
        }
        @media (max-width: 992px){
            height: 150px;
        }
        @media (max-width: 768px){
            height: 275px;
        }
    }

    p{
        color: ${({ theme }) => theme.colors.gray01};

        font-size: 24px;
        font-weight: 600;

        line-height: 24px;

        margin: 0 0 6px 0;

        @media(max-width: 1200px){
            font-size: 22px;

            line-height: 26px;
        }
        @media(max-width: 992px){
            font-size: 18px;

            line-height: 22px;
        }
        @media (max-width: 768px){
            font-size: 24px;
        }
    }

    span{
        color: ${({ theme }) => theme.colors.gray01};

        ${DefaultText};

        @media(max-width: 992px){
            font-size: 13px;

            line-height: 14px;
        }

        @media(max-width: 768px){
            ${DefaultText};
        }
    }

    strong{
        @media(max-width: 1200px){
            font-size: 13px;
        }
        @media(max-width: 992px){
            font-size: 9px;
        }
        @media (max-width: 768px){
            font-size: 12px;
        }
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

            @media(max-width: 992px){
                width: 115px;

                h6{
                    font-size: 13px;
                }
            }
            @media (max-width: 768px){
                width: 142px;

                h6{
                    font-size: 14px;
                }
            }
        }
    }
`;

export const NewsImage = styled(Image)``;