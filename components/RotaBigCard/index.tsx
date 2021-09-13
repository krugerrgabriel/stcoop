import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Body, ImageLayer } from "./styles";

import { IRotaCard } from "../RotaCard/interfaces";

const RotaBigCard: React.FC<IRotaCard> = ({ item }) => {
  return (
    <Link href={`/rota-da-informacao/${item._id}`}>
      <a>
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
          <span> {item.description} </span>
          <div className="metadata">
            <h6> Por: {item.author} </h6>
            <h5> {item.createdAt} </h5>
          </div>
        </Body>
      </a>
    </Link>
  );
};

export default RotaBigCard;
