import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.black};

    width: 100vw;
    height: 100vh;
`;

export const Floating = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoLayer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.orange};

    width: 100%;
    height: 561px;
`;

export const LogoWrapper = styled.div`
    position: relative;

    width: 373px;
    height: 301px;
`;

export const FormLayer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    position: relative;

    background-color: ${({ theme }) => theme.colors.white};

    height: 450px;
    width: 100%;

    div.title{
        display: flex;
        align-items: center;

        margin: 0 0 36px 0;

        div.iconWrapper{
            position: relative;

            width: 24px;
            height: 22.67px;
        }

        p{
            font-size: 22px;
            font-weight: 700;

            margin: 0 0 0 12px;
        }
    }
`;

export const SocialBox = styled.div`
    display: flex;
    justify-content: space-between;

    position: absolute;

    bottom: 24px;
    right: 24px;

    width: 150px;
`;

export const IconWrapper = styled.div<{ type?: String; }>`
    position: relative;

    width: ${(props) => props.type == 'youtube' ? '38px' : '27px'};
    height: 27px;
`;

export const CloseBox = styled.div`
    position: absolute;

    right: 12px;
    top: 12px;
`;

export const CloseWrapper = styled.div`
    position: relative;

    width: 36px;
    height: 36px;
`;