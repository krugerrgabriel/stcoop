import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.white};

    width: 100vw;
    height: 112px;

    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
`;

export const LogoWrapper = styled.div`
    position: relative;

    width: 225px;
    height: 64px;
`;

export const UserWrapper = styled.div`
    position: relative;

    width: 64px;
    height: 64px;

    border-radius: 50%;
`;

export const LinksBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 100%;

    p{
        color: ${({ theme }) => theme.colors.gray02};

        font-size: 16px;
        font-weight: 400;

        cursor: pointer;

        margin: 0;
    }
`;