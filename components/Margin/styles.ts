import styled from "styled-components";

import { IMargin } from './interfaces';

export const Body = styled.div<IMargin>`
    ${(props) => props.margin ? 'margin: '+props.margin : null};
`;