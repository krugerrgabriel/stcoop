import React from "react";

import { useState } from "react";

import {
  Body,
  YouTubeLayer,
  InfoPanel,
  CarouselButton,
  CarouselButtonBox,
  CarouselCounter,
  CarouselCounterBox,
} from "./styles";

import { Container, Row, Col } from "react-bootstrap";

import Button from "../Button/";
import Margin from "../Margin/";

import YouTube from "react-youtube";

import Image from "next/image";
import Link from "next/link";

import CarouselLeftArrow from "../../public/images/icons/stcoop-left-arrow.svg";
import CarouselRightArrow from "../../public/images/icons/stcoop-right-arrow.svg";
import VideoLayer from "../../public/images/stcoop-video-layer.png";

import ProductsData from "../../public/json/products.json";

const Beneficios: React.FC = () => {
  const [item, setItem] = useState(0);

  const nextItem = () => {
    setItem(item >= 3 ? 0 : item + 1);
  };
  const previousItem = () => {
    setItem(item <= 0 ? 3 : item - 1);
  };

  const opts = {};
  return (
    <Body>
      <Container>
        <Row>
          <Col lg={7} md={12}>
            <YouTubeLayer>
              {ProductsData[item].image != "null" ? (
                <Image
                  src={VideoLayer}
                  alt="STCOOP Cooperativa Logística Video Layer"
                  width={745}
                  height={422}
                />
              ) : (
                <YouTube
                  className="youtube-frame"
                  videoId={ProductsData[item].video}
                  opts={opts}
                />
              )}
            </YouTubeLayer>
          </Col>
          <Col lg={5} md={8} sm={10} xs={12} className="offset-control-4">
            <InfoPanel>
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
              <Row>
                <Col lg={5}>
                  {ProductsData[item].link ? (
                    <Link href={ProductsData[item].link}>
                      <a>
                        <Button> VER MAIS </Button>
                      </a>
                    </Link>
                  ) : null}
                </Col>
              </Row>
            </InfoPanel>
          </Col>
        </Row>
        <Row>
          <Col lg={3} md={1} sm={1} />
          <Col
            lg={2}
            md={2}
            sm={3}
            xs={6}
            className="offset-control-3 offset-control-992px"
          >
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
          <Col lg={2} md={4} sm={4} xs={6}>
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
        </Row>
      </Container>
    </Body>
  );
};

export default Beneficios;
