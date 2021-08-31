import React, { useEffect, useState } from "react";
import Image from "next/image";

import { ICarousel } from "./interfaces";

import Button from "../Button/";
import Margin from "../Margin/";

import { Container, Row, Col } from "react-bootstrap";
import {
  Body,
  CarouselPanel,
  OrangeLayerEdit,
  SocialMedia,
  CarouselButtonBox,
  CarouselButton,
  CarouselCounterBox,
  CarouselCounter,
} from "./styles";

import VideoLayer from "/public/images/stcoop-video-layer.png";
import FacebookIcon from "/public/images/icons/stcoop-facebook.svg";
import InstagramIcon from "/public/images/icons/stcoop-instagram.svg";
import YoutubeIcon from "/public/images/icons/stcoop-youtube.svg";
import CarouselLeftArrow from "/public/images/icons/stcoop-left-arrow.svg";
import CarouselRightArrow from "/public/images/icons/stcoop-right-arrow.svg";

import ProductsData from "../../public/json/products.json";

const Carousel: React.FC<ICarousel> = () => {
  const [item, setItem] = useState(0);

  const nextItem = () => {
    setItem(item >= 3 ? 0 : item + 1);
  };
  const previousItem = () => {
    setItem(item <= 0 ? 3 : item - 1);
  };

  return (
    <Body>
      <Container>
        <Row>
          <Col lg={5}>
            <CarouselPanel>
              <strong> NOSSOS PRODUTOS E SERVIÇOS </strong>
              <p>
                {ProductsData[item].title
                  ? ProductsData[item].title
                  : "NÃO DEFINIDO"}
              </p>
              <span>
                {ProductsData[item].description
                  ? ProductsData[item].description
                  : "NÃO DEFINIDO"}
              </span>
              <Margin margin="36px 0 0 0" />
              <Button> VER MAIS </Button>
            </CarouselPanel>
          </Col>
          <Col lg={7}>
            <Image
              src={VideoLayer}
              alt="STCOOP Cooperativa Logística Video Layer"
              width={745}
              height={422}
            />
          </Col>
        </Row>
        <Row className="justify-content-end">
          <Col lg={2}>
            <CarouselCounterBox>
              <CarouselCounter
                active={item == 0 ? true : false}
                onClick={() => {
                  setItem(0);
                }}
              />
              <CarouselCounter
                active={item == 1 ? true : false}
                onClick={() => {
                  setItem(1);
                }}
              />
              <CarouselCounter
                active={item == 2 ? true : false}
                onClick={() => {
                  setItem(2);
                }}
              />
              <CarouselCounter
                active={item == 3 ? true : false}
                onClick={() => {
                  setItem(3);
                }}
              />
            </CarouselCounterBox>
          </Col>
          <Col lg={2}>
            <CarouselButtonBox>
              <CarouselButton
                onClick={() => {
                  previousItem();
                }}
              >
                <Image
                  src={CarouselLeftArrow}
                  alt="STCOOP Cooperativa Logística Carousel Controller"
                  width={10}
                  height={18}
                />
              </CarouselButton>
              <CarouselButton
                onClick={() => {
                  nextItem();
                }}
              >
                <Image
                  src={CarouselRightArrow}
                  alt="STCOOP Cooperativa Logística Carousel Controller"
                  width={10}
                  height={18}
                />
              </CarouselButton>
            </CarouselButtonBox>
          </Col>
          <Col lg={1}></Col>
          <Col lg={2}>
            <SocialMedia>
              <Image
                src={FacebookIcon}
                alt="STCOOP Cooperativa Logística Facebook Icon"
                width={24}
                height={24}
              />
              <Image
                src={InstagramIcon}
                alt="STCOOP Cooperativa Logística Instagram Icon"
                width={24}
                height={24}
              />
              <Image
                src={YoutubeIcon}
                alt="STCOOP Cooperativa Logística Youtube Icon"
                width={34}
                height={24}
              />
            </SocialMedia>
          </Col>
        </Row>
      </Container>
      <OrangeLayerEdit />
    </Body>
  );
};

export default Carousel;
