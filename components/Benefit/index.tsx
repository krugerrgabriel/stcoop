import React from "react";

import { Body } from "./styles";

const Benefit: React.FC<{ title: String; description: String; image: String }> =
  (props) => {
    return (
      <Body image={props.image}>
        <p> {props.title} </p>
        <span> {props.description} </span>
      </Body>
    );
  };

export default Benefit;
