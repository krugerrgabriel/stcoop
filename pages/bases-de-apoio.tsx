import React from "react";

import type { NextPage } from "next";

import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";
import TabsBases from "../components/TabsBases";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

import { FullBanner, MiniTitle } from "../styles";
import { InfoBox } from "../styles/pages/quem-somos";
import {
  OrangeLayerEdit,
  OqueSaoBox,
  ImageLayer,
  BaseText,
  ItemBox,
  ItemImage,
  ItemImageAbsolute,
  Item,
} from "../styles/pages/bases-de-apoio";
import Map from "../components/Map";
import { MapBox } from "../components/Map/styles";

import { Container, Row, Col } from "react-bootstrap";

import BasesDeApoioBanner from "../public/images/stcoop-bases-de-apoio.png";
import BasesImage from "../public/images/stcoop-bases-image.png";

// import { Container } from './styles';

const BasesDeApoio: NextPage = () => {
  const items = [
    {
      title: "ESPAÇO DE LAZER",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
      image: require("../public/images/stcoop-espaco-lazer.png"),
      left: true,
    },
    {
      title: "ESTACIONAMENTO",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
      image: require("../public/images/stcoop-estacionamento.png"),
      left: false,
    },
    {
      title: "COMODIDADE",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
      image: require("../public/images/stcoop-comodidade.png"),
      left: true,
    },
    {
      title: "BANHEIROS",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
      image: require("../public/images/stcoop-banheiros.png"),
      left: false,
    },
  ];
  return (
    <>
      <Head>
        <title> STCOOP | Bases de Apoio </title>
      </Head>

      <Navbar />

      <FullBanner>
        <Image
          src={BasesDeApoioBanner}
          layout="fill"
          objectFit="cover"
          alt="STCOOP Cooperativa Logística Bases de Apoio Banner"
        />
        <Container>
          <h1> BASES DE APOIO </h1>
        </Container>
      </FullBanner>

      <InfoBox>
        <TabsBases />
      </InfoBox>

      <OqueSaoBox>
        <Container>
          <Row>
            <Col lg={7}>
              <ImageLayer>
                <Image
                  src={BasesImage}
                  layout="fill"
                  objectFit="cover"
                  alt="STCOOP Cooperativa Logística Imagem Bases de Apoio"
                />
              </ImageLayer>
            </Col>
            <Col
              lg={5}
              className="display-flex justify-content-center flex-column"
            >
              <Row>
                <Col lg={12}>
                  <MiniTitle>O QUE SÃO</MiniTitle>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <BaseText>
                    O sonho de todo caminhoneiro está aqui, um espaço apropriado
                    para descansar com conforto, tranquilidade e segurança. A
                    Base contempla de estacionamento amplo, cozinha, banheiro,
                    lavanderia, conveniência e ainda, ambiente para lazer e
                    descontração. A unidade é um benefício para os cooperados da
                    associação Segtruck e STCOOP.
                  </BaseText>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <OrangeLayerEdit left />
      </OqueSaoBox>

      <MapBox id="onde-estao" gray>
        <Container>
          <TitleBox>
            <Title> ONDE ESTÃO LOCALIZADAS </Title>
            <Subtitle> Lorem ipsum dolor sit </Subtitle>
          </TitleBox>
        </Container>
        <Map type="bases" />
      </MapBox>

      <ItemBox>
        {items.map((item, index) => {
          return (
            <Item key={index}>
              <ItemImageAbsolute left={item.left}>
                <ItemImage>
                  <Image
                    src={item.image}
                    layout="fill"
                    objectFit="cover"
                    alt="STCOOP Cooperativa Logística Imagem Espaço de Lazer"
                  />
                </ItemImage>
              </ItemImageAbsolute>
              <Container>
                <Row>
                  {item.left ? <Col lg={6} /> : null}
                  <Col lg={6}>
                    <div className="info">
                      <p> {item.title} </p>
                      <span>{item.description}</span>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Item>
          );
        })}
      </ItemBox>

      <ContactForm left />

      <Footer />
    </>
  );
};

export default BasesDeApoio;
