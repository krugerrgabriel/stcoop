import React from "react";

import Link from "next/link";

import Button from "../Button/";

import { Body, NewsImage, Info } from "./styles";

import NewsImageSrc from "../../public/images/news01.png";

const NewsCard: React.FC<{
  item: {
    _id: Number;
    title: String;
    description: String;
    image: String;
    createdAt: String;
  };
}> = ({ item }) => {
  return (
    <Body>
      <div className="imageLayer">
        <NewsImage
          src={NewsImageSrc}
          layout="fill"
          objectFit="cover"
          alt={`STCOOP Cooperativa Logistica ${item.title}`}
        />
      </div>
      <Info>
        <p> {item.title} </p>
        <span> {item.description} </span>
        <div className="side-a-side">
          <div className="button">
            <Link href={`/rota-da-informacao/${item._id}`}>
              <a>
                <Button gray> VER MAIS</Button>
              </a>
            </Link>
          </div>
          <strong> {item.createdAt} </strong>
        </div>
      </Info>
    </Body>
  );
};

export default NewsCard;
