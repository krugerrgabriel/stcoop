import styled from "styled-components";

export const Body = styled.div<{ active?: Boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.colors.white};

    position: fixed;
    top: 20%;
    left: ${(props) => props.active ? '0' : '-250vw'};
    right: 0;
    margin-left: auto;
    margin-right: auto;

    width: 550px;

    padding: 42px;

    transition: 0.4s;

    @media (max-width: 576px){
        width: 95%;
    }

    div.closeBox{
        position: absolute;
        right: 18px;
        top: 12px;

        cursor: pointer;
    }

    div.closeWrapper{
        position: relative;
        width: 32px;
        height: 32px;
    }

    div.wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;

        margin: 0 0 42px 0;
    }

    p{
        font-size: 24px;
        font-weight: 700;

        line-height: 28px;

        text-transform: uppercase;
        text-align: center;

        margin: 0 0 8px 0;
    }

    span{
        font-size: 18px;
        font-weight: 500;

        text-align: center;

        line-height: 22px;
    }

    div.buttonWrapper{
        width: 90%;
    }

    z-index: 701;
`;

export const Overlay = styled.div<{ active?: Boolean }>`
    background-color: rgba(0, 0, 0, 0.5);

    backdrop-filter: blur(5px);

    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    left: ${(props) => props.active ? '0' : '-200vw'};

    z-index: 700;

    transition: 0.4s;
`;