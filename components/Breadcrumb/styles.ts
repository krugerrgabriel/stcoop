import styled from "styled-components";

import { Container } from "react-bootstrap";

export const Body = styled.div`
    background-color: #F1F1F1;

    width: 100%;
    height: 42px;
`;

export const ContainerEdit = styled(Container)`
    height: 100%;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    height: 100%;

    a, span{
        color: ${({ theme }) => theme.colors.black};

        font-size: 14px;
        font-weight: 400;
    }
    span{
        font-weight: 500;
    }
`;

export const ArrowWrapper = styled.div`
    position: relative;

    width: 7px;
    height: 12px;

    margin: 0 12px 0;
`;