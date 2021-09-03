import styled from "styled-components";

export const Body = styled.div`
    position: relative;

    height: 535px;
`;

export const TabsBox = styled.div`
    width: 100%;

    padding: 96px 0 0 0;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;    
`;

export const Tab = styled.div<{ active?: Boolean }>`
    font-size: 18px;
    font-weight: ${(props) => props.active ? 500 : 400};

    text-align: center;

    width: 100%;

    cursor: pointer;
    
    ${(props) => props.active ? `border-bottom: 3px solid ${props.theme.colors.orange};` : 'border-bottom: 3px solid #707070;'};

    transition: 0.2s;
`;

export const TabText = styled.p`
    font-size: 24px;
    font-weight: 400;

    line-height: 32px;

    padding: 26px 42px;
`;

export const VideoLayer = styled.div`
    position: absolute;

    width: 950px;
    height: 535px;

    right: 0;
    top: 0;

    z-index: 999;
`;

export const ImageBox = styled.div`
    position: relative;

    width: 950px;
    height: 535px;
`;