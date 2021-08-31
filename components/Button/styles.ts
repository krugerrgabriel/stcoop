import styled from 'styled-components';

export const ArrowLayer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    padding-right: 15.9px;

    position: absolute;
    right: 0;
    top: 0;

    background-color: ${({ theme }) => theme.colors.orange01};

    width: 42px;
    height: 42px;

    z-index: 499;

    transition: 0.2s;
`;

export const Body = styled.div<{ margin: String; }>`
    display: flex;
    align-items: center;
    
    background-color: ${({ theme }) => theme.colors.orange};
    
    width: 142px;
    height: 42px;
    
    position: relative;

    padding-left: 18px;

    cursor: pointer;

    margin: ${(props) => props.margin};

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
            width: 142px;
        }
    }
`;