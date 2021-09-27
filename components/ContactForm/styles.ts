import styled from "styled-components";

export const Body = styled.div`
    background-color: ${({ theme }) => theme.colors.gray06};

    position: relative;

    padding: ${({ theme }) => theme.padding.default} 0;

    display: flex;

    @media(max-width: 768px){
        padding: 42px 0 292px 0;
    }
`;

export const ContactWrapper = styled.div<{ left?: Boolean }>`
    position: absolute;
    top: 0;
    ${(props) => props.left ? 'left: 0;' : 'right: 0'};
    @media(max-width: 768px){
        top: unset;
        bottom: 0;
    }
`;

export const ContactLayer = styled.div`
    position: relative;

    width: calc((100vw - 48px)/2);
    height: 394px;

    @media (max-width: 1400px){
        height: 382px;
    }
    @media (max-width: 992px){
        height: 502px;
    }
    @media(max-width: 768px){
        width: 100vw;
        height: 250px;
    }
`;