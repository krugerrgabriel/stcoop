import React from "react";

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
      <NewsImage
        src={NewsImageSrc}
        width={416}
        height={225}
        alt={`STCOOP Cooperativa Logistica ${item.title}`}
      />
      <Info>
        <p> {item.title} </p>
        <span> {item.description} </span>
        <div className="side-a-side">
          <Button gray> VER MAIS</Button>
          <strong> {item.createdAt} </strong>
        </div>
      </Info>
    </Body>
  );
};

export default NewsCard;
