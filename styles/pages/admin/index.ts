import styled from "styled-components";

export const Body = styled.div`
    background-color: ${({ theme }) => theme.colors.gray06};

    min-width: 100vw;
    min-height: calc(100vh - 204px);
`;

export const Title = styled.p`
    font-size: 28px;
    font-weight: 600;

    line-height: 36px;

    text-align: center;

    margin: 42px 0 28px 0;
`;