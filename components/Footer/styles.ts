import styled from "styled-components";

export const Body = styled.div`
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};

    padding: ${({ theme }) => theme.padding.default} 0;

    ul{
        padding: 0;
    }

    li{
        color: ${({ theme }) => theme.colors.white};

        font-size: 18px;
        font-weight: 400;

        margin: 8px 0;
    }
    li.title{
        color: ${({ theme }) => theme.colors.orange};

        font-size: 20px;
        font-weight: 600;

        margin: 0 0 4px 0;

        text-transform: uppercase;
    }

    .item-2,.item-3,.item-4{
        display: flex;
        justify-content: flex-end;
    }
    @media(max-width: 992px){
        .item-3{
            justify-content: flex-start;
        }
        .item-3, .item-4{
            margin: 24px 0 0 0;
        }
        .item-contact{
            justify-content: flex-start;
        }
    }
`;

export const Divider = styled.div`
    background-color: ${({ theme }) => theme.colors.white} !important;

    height: 2px !important;
    width: 100%;

    margin: 12px 0;
`;

export const LogoLayer = styled.div`
    position: relative;

    width: 225px;
    height: 64px;

    @media(max-width: 992px){
        width: 183px;
        height: 52px;
    }
    @media(max-width: 576px){
        width: 175px;
        height: 50px;
    }
`;

export const SocialMediaBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 75%;
`;

export const LinkBox = styled.div`
    position: relative;

    &.facebook, &.instagram{
        width: 26px;
        height: 26px;
    }
    &.youtube{
        width: 37px;
        height: 26px;
    }
`;

export const ContactBox = styled.div`
    display: flex;
    flex-direction: column;

    a{
        font-size: 15px;
        font-weight: 400;

        margin: 0;
    }

    @media(max-width: 992px){
        margin: 24px 0 0 0;
    }
`;

export const CopyrightText = styled.p`
    font-size: 14px;
    font-weight: 400;

    @media(max-width: 992px){
        margin: 24px 0 0 0;
    }
`;