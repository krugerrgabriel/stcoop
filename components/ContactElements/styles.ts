import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 42px;

    border: 3px solid ${({ theme }) => theme.colors.gray03};

    overflow: hidden;

    margin: 9px 0;
`;

export const GrayLayer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.gray03};

    width: 42px;
    height: 42px;
`;

export const IconLayer = styled.div`
    position: relative;

    &.user{
        width: 18px;
        height: 19px;
    }
    &.mail, &.phone{
        width: 19px;
        height: 19px;
    }
    &.grund{
        width: 19px;
        height: 17px;
    }
    &.message{
        width: 17px;
        height: 19px;
    }
`;

export const Etc = styled.div`
    width: 100%;
    height: 100%;

    input, select{ 
        background-color: transparent;

        width: 100%;
        height: 100%;

        padding: 0 12px;

        white-space: nowrap;
        overflow: hidden;

        outline: 0;
        border: 0;
        appearance: none;

        color: ${({ theme }) => theme.colors.gray01};

        font-size: 16px;
        font-weight: 400;

        &:hover{
            outline: 0;
            border: 0;
        }

        &::placeholder{
            color: #AFAFAF;

            font-size: 18px;
            font-weight: 600;
        }
    }
    
    select{
        option:disabled{
        color: #AFAFAF;

            font-size: 18px;
            font-weight: 600;
    }
}
`;