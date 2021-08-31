import React from "react";

import Image from "next/image";

import { Body, ArrowLayer } from "./styles";

import ArrowImage from "/public/images/icons/stcoop-arrow.svg";

const Button: React.FC = (props) => {
  return (
    <Body>
      <h6>{props.children}</h6>
      <ArrowLayer>
        <Image src={ArrowImage} alt="STCOOP Cooperativa Logistica Arrow" />
      </ArrowLayer>
    </Body>
  );
};

export default Button;
