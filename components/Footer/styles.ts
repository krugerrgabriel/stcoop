import styled from "styled-components";

export const Body = styled.div`
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};

    padding: 42px 0;

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