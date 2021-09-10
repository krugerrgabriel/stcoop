import styled from "styled-components";

export const Body = styled.div<{ active?: Boolean; }>`
    background-color: ${({ theme }) => theme.colors.white};

    position: fixed;
    top: 20%;
    left: ${(props) => props.active ? '0' : '-200vw'};
    right: 0;
    margin-left: auto;
    margin-right: auto;

    width: 825px;

    padding: 42px;

    z-index: 500;

    transition: 0.4s;

    p{
        color: ${({ theme }) => theme.colors.gray01};

        font-size: 28px;
        font-weight: 700;

        text-align: center;
        
        margin: 0 0 28px 0;
    }

    div.closeBox{
        position: absolute;
        right: 12px;
        top: 12px;

        cursor: pointer;

        div.closeWrapper{
            position: relative;

            width: 32px;
            height: 32px;
        }
    }

`;

export const Overlay = styled.div<{ active?: Boolean; }>`
    background-color: rgba(0, 0, 0, 0.5);

    backdrop-filter: blur(5px);

    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    left: ${(props) => props.active ? '0' : '-200vw'};

    transition: 0.4s;
`;