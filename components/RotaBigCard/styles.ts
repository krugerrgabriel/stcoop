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

        font-size: 18px;
        font-weight: 600;
    }

    p{
        color: ${({ theme }) => theme.colors.gray01};

        font-size: 28px;
        font-weight: 800;

        line-height: 36px;

        margin: 4px 0 12px 0;
    }

    span{
        color: #515151;

        font-size: 20px;
        font-weight: 400;

        line-height: 28px;

        margin: 12px 0 0 0;
    }

    div.metadata{
        display: flex;
        
        flex-direction: row;

        h6, h5{
            color: ${({ theme }) => theme.colors.gray01};
            
            font-size: 14px;
            font-weight: 500;

            margin-top: 14px;
        }
        h6{
            margin-right: 42px;
        }
    }
`;

export const ImageLayer = styled.div`
    position: relative;
    width: 100%;
    height: 400px;
`;