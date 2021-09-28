import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    flex-direction: column;

    cursor: pointer;

    &:hover{
        p{
            text-decoration: underline;
        }
    }

    strong{
        color: ${({ theme }) => theme.colors.orange};

        font-size: 16px;
        font-weight: 600;
    }

    p{
        color: ${({ theme }) => theme.colors.gray01};

        font-size: 18px;
        font-weight: 700;

        line-height: 20px;

        margin: 0 0 8px 0;
    }

    div.metadata{
        display: flex;
        
        flex-direction: row;

        h6, h5{
            color: ${({ theme }) => theme.colors.gray01};
            
            font-size: 14px;
            font-weight: 500;

            margin-top: 10px;
        }
        h6{
            margin-right: 42px;
        }
    }
`;

export const ImageLayer = styled.div`
    position: relative;
    width: 100%;
    height: 200px;

    @media(max-width: 576px){
        height: calc(100vw / 2.12);
    }
`;