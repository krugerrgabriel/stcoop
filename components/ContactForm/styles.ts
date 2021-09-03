import styled from "styled-components";

export const Body = styled.div`
    background-color: ${({ theme }) => theme.colors.gray06};

    position: relative;

    padding: 42px 0;

    display: flex;
`;

export const ContactWrapper = styled.div<{ left?: Boolean }>`
    position: absolute;
    top: 0;
    ${(props) => props.left ? 'left: 0;' : 'right: 0'}
`;