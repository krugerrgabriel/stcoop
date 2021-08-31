import React from "react";

import { IMargin } from "./interfaces";

import { Body } from "./styles";

const Margin: React.FC<IMargin> = (props) => {
  return <Body margin={props.margin} />;
};

export default Margin;
