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

import CarouselLeftArrow from "../../public/images/icons/stcoop-left-arrow.svg";
import CarouselRightArrow from "../../public/images/icons/stcoop-right-arrow.svg";
import VideoLayer from "/public/images/stcoop-video-layer.png";

import ProductsData from "../../public/json/products.json";

const Beneficios: React.FC = () => {
  const [item, setItem] = useState(0);

  const nextItem = () => {
    setItem(item >= 3 ? 0 : item + 1);
  };
  const previousItem = () => {
    setItem(item <= 0 ? 3 : item - 1);
  };

  const opts = {
    height: "350",
    width: "622",
  };
  return (
    <Body>
      <Container>
        <Row>
          <Col lg={6}>
            <YouTubeLayer>
              {/* @ts-ignore */}
              {ProductsData[item].image != "null" ? (
                <Image
                  src={VideoLayer}
                  alt="STCOOP Cooperativa Logística Video Layer"
                  width={745}
                  height={422}
                />
              ) : (
                <YouTube videoId={ProductsData[item].video} opts={opts} />
              )}
            </YouTubeLayer>
          </Col>
          <Col lg={6}>
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
                  <Button> VER MAIS </Button>
                </Col>
              </Row>
            </InfoPanel>
          </Col>
        </Row>
        <Row>
          <Col lg={3} />
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
        </Row>
      </Container>
    </Body>
  );
};

export default Beneficios;
