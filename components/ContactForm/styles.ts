import styled from "styled-components";

import Image from "next/image";

export const Body = styled.div`
    background-color: ${({ theme }) => theme.colors.gray06};

    position: relative;

    padding: 42px 0;
`;

export const ContactImage = styled(Image)`
    
`;