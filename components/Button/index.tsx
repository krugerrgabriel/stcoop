import React from "react";

import Image from "next/image";

import { Body, ArrowLayer } from "./styles";

import ArrowImage from "/public/images/icons/stcoop-arrow.svg";

const Button: React.FC<{ gray?: Boolean }> = (props) => {
  let color = props.gray ? "gray" : "white";
  return (
    <Body color={color}>
      <h6>{props.children}</h6>
      <ArrowLayer color={color}>
        <Image src={ArrowImage} alt="STCOOP Cooperativa Logistica Arrow" />
      </ArrowLayer>
    </Body>
  );
};

export default Button;
