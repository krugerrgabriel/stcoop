import styled from "styled-components";

export const Body = styled.div<{ large?: Boolean; }>`
    position: relative;

    width: 100%;
    height: ${(props) => props.large ? '525px' : '254px'};
    @media(max-width: 1400px){
        height: ${(props) => props.large ? '546px' : '261px'};
    }
    @media(max-width: 1200px){
        height: ${(props) => props.large ? '456px' : '216px'};
    }
    @media(max-width: 992px){
        height: ${(props) => props.large ? '336px' : '156px'};
    }
    @media(max-width: 768px){
        height: ${(props) => props.large ? '516px' : '516px'};
    }
    @media(max-width: 576px){
        height: 100vw;
    }

    cursor: pointer;

    margin: 8px;

    div.overlay{
        position: absolute;

        left: 0;
        top: 0;

        width: 100%;
        height: 100%;

        background: ${(props) => props.large ? 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%)' : 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'}
    }

    div.info{
        position: absolute;
        left: ${(props) => props.large ? '24px' : '18px'};
        bottom: ${(props) => props.large ? '36px' : '32px'};
        
        width: ${(props) => props.large ? 'calc(100% - 42px)' : 'calc(100% - 36px)'};

        z-index: 995;
        
        span{
            color: ${({ theme }) => theme.colors.orange};

            font-size: ${(props) => props.large ? '18px' : '14px'};
            font-weight: 600;

            @media(max-width: 992px){
                font-size: ${(props) => props.large ? '16px' : '12px'};
            }
            @media(max-width: 768px){
                font-size: 18px;
            }
        }

        p{
            color: ${({ theme }) => theme.colors.white};

            font-size: ${(props) => props.large ? '32px' : '18px'};
            font-weight: 700;

            line-height: ${(props) => props.large ? '42px' : '26px'};

            margin: 0;

            @media(max-width: 992px){
                font-size: ${(props) => props.large ? '24px' : '14px'};

                line-height: ${(props) => props.large ? '28px' : '18px'};
            }
            @media(max-width: 768px){
                font-size: 32px;

                line-height: 42px;
            }
        }
    }

    strong{
        color: ${({ theme }) => theme.colors.orange};

        position: absolute;
        bottom: ${(props) => props.large ? '8px' : '8px'};
        right: ${(props) => props.large ? '16px' : '10px'};

        font-size: ${(props) => props.large ? '12px' : '10px'};
        font-weight: 500;

        z-index: 995;

        @media(max-width: 992px){
            font-size: ${(props) => props.large ? '10px' : '8px'};
        }
        @media(max-width: 768px){
            font-size: 12px;

            bottom: 8px;
            right: 16px;
        }
    }

    &:hover{
        div.info{
            p{
                text-decoration: underline;
            }
        }
    }
`;