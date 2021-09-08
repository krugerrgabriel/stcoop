import type { NextPage } from "next";

import Image from "next/image";

import { Body, ImageLayer } from "./styles";

import { IRotaCard } from "../RotaCard/interfaces";

const RotaSmallCard: NextPage<IRotaCard> = ({ item }) => {
  return (
    <Body>
      <strong> {item.tag} </strong>
      <p> {item.title} </p>
      <ImageLayer>
        <Image // @ts-ignore
          src={item.image}
          layout="fill"
          objectFit="cover"
          alt="STCOOP Cooperativa Logística Facebook Icon"
        />
      </ImageLayer>
      <div className="metadata">
        <h6> Por: {item.author} </h6>
        <h5> {item.createdAt} </h5>
      </div>
    </Body>
  );
};

export default RotaSmallCard;
