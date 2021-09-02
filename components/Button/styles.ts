import styled from 'styled-components';

export const ArrowLayer = styled.div<{ color?: String; }>`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    padding-right: 15.9px;

    position: absolute;
    right: 0;
    top: 0;

    background-color: ${(props) => props.color == 'gray' ? '#555555' : props.theme.colors.orange01};

    width: 42px;
    height: 42px;

    z-index: 499;

    transition: 0.2s;
`;

export const Body = styled.div<{ color?: String; }>`
    background-color: ${(props) => props.color == 'gray' ? '#7A7A7A' : props.theme.colors.orange};
    
    width: 100%;
    height: 42px;
    
    position: relative;

    cursor: pointer;

    div.info{
        display: flex;
        align-items: center;
        justify-content: center;

        width: calc(100% - 42px);
        height: 100%;

        z-index: 501;
    }

    h6{
        z-index: 500;

        color: ${({ theme }) => theme.colors.white};

        font-size: 16px;
        font-weight: 500;

        padding: 0;
        margin: 0;
    }

    &:hover{
        ${ArrowLayer}{
            width: 100%;
        }
    }
`;