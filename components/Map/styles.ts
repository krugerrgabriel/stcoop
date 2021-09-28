import styled from "styled-components";

export const MapBox = styled.div<{ gray?: Boolean; }>`
    padding: ${({ theme }) => theme.padding.default} 0;
    ${(props) => props.gray ? `background-color: ${props.theme.colors.gray06}` : null}
`;

export const Body = styled.div``;

export const MapLayer = styled.div`
    position: relative;
    
    width: 465.05px;
    height: 480px;
`;

export const PinLayer = styled.div<{ top: String; bottom: String; left: String; right: String; }>`
    position: absolute;

    ${(props) => props.top != 'null' ? `top: calc(${props.top}px * 462.05 / 575);` : null}
    ${(props) => props.bottom != 'null' ? `bottom: calc(${props.bottom}px * 462.05 / 575);` : null}
    ${(props) => props.left != 'null' ? `left: calc(${props.left}px * 480 / 560);` : null}
    ${(props) => props.right != 'null' ? `right: calc(${props.right}px * 480 / 560 + 12px);` : null}
    
    cursor: pointer;

    transition: 0.2s;

    z-index: 2;

    &:hover{
        transform: scale(1.1);
    }
`;

export const PinBox = styled.div`
    position: relative;

    width: 18px;
    height: 24.7px;
`;

export const UnidadeShow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    margin: 24px 0 0 0;
    padding: 8px 18px;

    background-color: ${({ theme }) => theme.colors.orange};

    div.info{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        width: 100%;
        height: 100%;

        span{
            color: ${({ theme }) => theme.colors.white};

            font-size: 14px;
            font-weight: 500;
        }

        p{
            color: ${({ theme }) => theme.colors.white};

            font-size: 20px;
            font-weight: 600;

            text-transform: uppercase;

            margin: 0;
        }
    }
`;

export const ImageLayer = styled.div`
    position: relative;

    width: 21px;
    height: 26px;

    margin: 0 18px 0 0;
`;