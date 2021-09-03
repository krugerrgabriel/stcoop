import type { NextPage } from "next";

import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";
import TabsBases from "../components/TabsBases";

import { FullBanner } from "../styles";
import { InfoBox } from "../styles/pages/quem-somos";
import {
  OrangeLayerEdit,
  OqueSaoBox,
  ImageLayer,
  BaseTitle,
  BaseText,
} from "../styles/pages/bases-de-apoio";
import Map from "../components/Map";
import { MapBox } from "../components/Map/styles";
import { TitleBox, Title, Subtitle } from "../styles/";

import { Container, Row, Col } from "react-bootstrap";

import BasesDeApoioBanner from "../public/images/stcoop-bases-de-apoio.png";
import BasesImage from "../public/images/stcoop-bases-image.png";

// import { Container } from './styles';

const BasesDeApoio: NextPage = () => {
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
                  <BaseTitle> O QUE SÃO </BaseTitle>
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

      <MapBox>
        <Container>
          <TitleBox>
            <Title> ONDE ESTÃO LOCALIZADAS </Title>
            <Subtitle> Lorem ipsum dolor sit </Subtitle>
          </TitleBox>
        </Container>
        <Map type="bases" />
      </MapBox>
    </>
  );
};

export default BasesDeApoio;
