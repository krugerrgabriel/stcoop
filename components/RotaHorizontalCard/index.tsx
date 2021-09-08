import React from "react";

import Image from "next/image";

import { Body, ImageLayer } from "./styles";

import { IRotaCard } from "../RotaCard/interfaces";

const RotaVerticalCard: React.FC<IRotaCard> = ({ item }) => {
  return (
    <Body>
      <ImageLayer>
        <Image // @ts-ignore
          src={item.image}
          layout="fill"
          objectFit="cover"
          alt="STCOOP Cooperativa Logística Facebook Icon"
        />
      </ImageLayer>
      <div className="info">
        <strong> {item.tag} </strong>
        <p> {item.title} </p>
        <span> {item.description} </span>
        <div className="metadata">
          <h6> Por: {item.author} </h6>
          <h5> {item.createdAt} </h5>
        </div>
      </div>
    </Body>
  );
};

export default RotaVerticalCard;
