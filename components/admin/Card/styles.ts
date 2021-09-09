import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: relative;

    background-color: ${({ theme }) => theme.colors.white};

    width: 100%;
    height: 175px;

    margin: 0 0 24px 0;
    padding: 24px 26px;

    box-shadow: 0 1px 12px rgba(0, 0, 0, 0.1);

    p{
        font-size: 42px;
        font-weight: 700;

        margin: 0;
    }
    
    span{
        color: #7A7A7A;

        font-size: 18px;
        font-weight: 600;
    }
`;

export const IconBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.orange};

    width: 44px;
    height: 44px;
`;

export const IconWrapper = styled.div<{ type: String; }>`
    position: relative;
    width: ${(props) => props.type == 'bases' ? '19.2px' : props.type == 'perguntas' ? '15px' : '24px'};
    height: ${(props) => props.type == 'produtos' ? '22.8px' : props.type == 'parceiros' ? '21.26px' : props.type == 'visitantes' ? '18px' : '24px'};
`;

export const OptionsBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;

    top: 16px;
    right: 16px;
`;

export const OptionsWrapper = styled.div`
    position: relative;
    height: 18px;
    width: 18px;
`;