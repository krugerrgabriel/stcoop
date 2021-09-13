import React from "react";

import Image from "next/image";

import { Body, ArrowLayer } from "./styles";

import ArrowImage from "../../public/images/icons/stcoop-arrow.svg";

const Button: React.FC<{
  gray?: Boolean;
  onClick?: Function;
  disabled?: Boolean;
}> = (props) => {
  let color = props.gray ? "gray" : "white";
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <Body
      color={color}
      onClick={() => handleClick()}
      disabled={props.disabled ? true : false}
    >
      <div className="info">
        <h6>{props.children}</h6>
      </div>
      <ArrowLayer color={color}>
        <Image src={ArrowImage} alt="STCOOP Cooperativa Logistica Arrow" />
      </ArrowLayer>
    </Body>
  );
};

export default Button;
