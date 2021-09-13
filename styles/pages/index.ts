import styled from "styled-components";

export const UserPanel = styled.div`
    background-color: ${({ theme }) => theme.colors.black};
`;

export const BenefitsBox = styled.div`
    background-color: ${({ theme }) => theme.colors.gray06};

    padding: ${({ theme }) => theme.padding.default} 0;
    margin: 6px 0 0 0;
`;