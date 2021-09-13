import styled from "styled-components";
import { theme } from "../themes/default";

export const MaisVistosBox = styled.div`
    background-color: ${({ theme }) => theme.colors.black};

    padding: 36px 0;

    border-bottom: 4px solid ${({ theme }) => theme.colors.orange};

    p.title{
        color: #f2f2f2;

        font-size: 42px;
        font-weight: 800;
        font-style: italic;

        letter-spacing: 1.5px;

        text-align: center;

        margin: 0 0 12px 0;
    }
`;

export const NoticiasBox = styled.div`
    padding: 32px 0;
`;

export const Divider = styled.div<{ small?: Boolean; second?: Boolean }>`
    background-color: #7A7A7A;

    height: 2px;
    width: ${(props) => props.small ? '50%' : '100%'};

    opacity: 0.5;

    margin: ${(props) => props.second ? '32px 0 8px 0' : '18px 0'};
`;

export const BoxNews = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;

    border: 1px solid #7A7A7A;

    padding: 12px;

    margin: 32px 0 0 0;

    h1{
        color: ${({ theme }) => theme.colors.gray01};

        font-size: 32px;
        font-weight: 800;
        font-style: italic;

        width: 100%;

        margin-bottom: 12px;
    }
`;

export const Title = styled.h1<{ italic?: Boolean; second?: Boolean; }>`
    color: ${({ theme }) => theme.colors.black};

    font-size: 32px;
    font-weight: 700;
    ${(props) => props.italic ? 'font-style: italic' : null};

    margin: ${(props) => props.second ? '24px 0;' : '42px 0 0 0'};
`;

export const FineLine = styled.p`
    color: ${({ theme }) => theme.colors.gray01};

    font-size: 18px;
    font-weight: 400;

    margin: 8px 0 0 0;
`;

export const MoreInfo = styled.div`
    p{
        color: ${({ theme }) => theme.colors.black};

        font-size: 14px;
        font-weight: 600;

        margin: 12px 0 4px 0;
    }
    span{
        color: ${({ theme }) => theme.colors.black};

        font-size: 14px;
        font-weight: 400;
    }
`;

export const MediaBox = styled.div`
    display: flex;
`;

export const MediaButton = styled.div<{ type: String }>`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => props.type == 'facebook' ? '#4267B2' : props.type == 'twitter' ? '#1DA1F2' : props.type == 'whatsapp' ? '#25D366' : '#7C7B7B'};

    width: 34px;
    height: 34px;

    margin: 4px;

    border-radius: 50%;

    cursor: pointer;
`;

export const MediaWrapper = styled.div<{ type: String }>`
    position: relative;

    width: ${(props) => props.type == 'facebook' ? '8.83px' : '17px'};
    height: ${(props) => props.type == 'mail' ? '12.95px' : props.type == 'twitter' ? '13.81px' :  '17px'};
`;

export const ImageWrapper = styled.div`
    position: relative;

    width: 100%;
    height: 400px;

    margin-top: 24px;
`;

export const Credits = styled.p`
    color: ${({ theme }) => theme.colors.black};

    font-size: 14px;
    font-weight: 400;

    margin-top: 4px;
`;

export const Development = styled.p`
    color: ${({ theme}) => theme.colors.black};

    font-family: 'Prelo', sans-serif;
    font-size: 20px;
    font-weight: 400;

    line-height: 34px;

    margin: 14px 0;
`;

export const SocialButton = styled.div<{ type: String }>`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => props.type == 'facebook' ? '#4267B2' : props.type == 'twitter' ? '#1DA1F2' : props.type == 'whatsapp' ? '#25D366' : '#7C7B7B'};

    height: 46px;
    width: 100%;

    cursor: pointer;

    margin-top: 24px;

    span{
        color: ${({ theme }) => theme.colors.white};

        font-size: 20px;
        font-weight: 600;
    }
`;

export const Wrapper = styled.div<{ type: String; }>`
    position: relative;

    height: ${(props) => props.type == 'facebook' ? '20px' : props.type == 'twitter' ? '16.25px' : props.type == 'whatsapp' ? '20px' : '15.23px'};
    width: ${(props) => props.type == 'facebook' ? '10.38px' : props.type == 'twitter' ? '20px' : props.type == 'whatsapp' ? '20px' : '20px'};

    margin-right: 12px;
`;