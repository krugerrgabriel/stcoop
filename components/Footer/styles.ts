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
`;

export const CopyrightText = styled.p`
    font-size: 14px;
    font-weight: 400;
`;