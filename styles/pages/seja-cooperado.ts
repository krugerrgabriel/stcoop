import styled from "styled-components";

export const OqueBox = styled.div`
    position: relative;

    height: 535px;
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

export const FaqBox = styled.div`
    padding: ${({ theme }) => theme.padding.default} 0;
`;