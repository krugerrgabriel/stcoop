import React from "react";

import Image from "next/image";

import { Body, SeeMoreButton } from "./styles";

import RightArrow from "../../public/images/icons/stcoop-right-arrow.svg";

const Lorem: React.FC<{ title: String; description: String; link?: String }> = (
  props
) => {
  return (
    <Body>
      <p> {props.title} </p>
      <div className="side-a-side">
        <span> {props.description} </span>
        <SeeMoreButton>
          <Image
            src={RightArrow}
            alt="STCOOP Cooperativa Logística Right Arrow"
            width={10}
            height={18}
          />
        </SeeMoreButton>
      </div>
    </Body>
  );
};

export default Lorem;
