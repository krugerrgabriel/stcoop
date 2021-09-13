import React from "react";

import Image from "next/image";

import {
  Body,
  IconBox,
  IconWrapper,
  OptionsBox,
  OptionsWrapper,
} from "./styles";

const Card: React.FC<{
  type: String;
  value: Number;
  label: String;
  handleAdd: Function;
}> = (props) => {
  return (
    <Body>
      <IconBox>
        <IconWrapper type={props.type}>
          <Image
            src={require(`../../../public/images/icons/stcoop-${props.type}-admin.svg`)}
            layout="fill"
            objectFit="cover"
            alt="STCOOP Cooperativa Logística Logo Branca"
          />
        </IconWrapper>
      </IconBox>
      <p> {props.value} </p>
      <span> {props.label} </span>
      <OptionsBox onClick={() => props.handleAdd()}>
        <OptionsWrapper>
          <Image
            src={require(`../../../public/images/icons/stcoop-add.svg`)}
            layout="fill"
            objectFit="cover"
            alt="STCOOP Cooperativa Logística Logo Branca"
          />
        </OptionsWrapper>
      </OptionsBox>
    </Body>
  );
};

export default Card;
