import type { NextPage } from "next";

import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";
import Values from "../components/Values";
import { ValueBox } from "../components/Values/styles";
import Beneficios from "../components/Beneficios";
import {
  BeneficiosBox,
  OrangeLayerEdit,
} from "../components/Beneficios/styles";
import Map from "../components/Map";
import { MapBox } from "../components/Map/styles";

import { FullBanner } from "../styles/";
import {
  InfoBox,
  CooperativismoBox,
  Item,
  TextDevelop,
} from "../styles/pages/quem-somos";
import { TitleBox, Title, Subtitle, MiniTitle } from "../styles/";
import Lorem from "../components/Lorem";
import { LoremBox, OrangeLayerWidth } from "../components/Lorem/styles";

import { Container, Row, Col } from "react-bootstrap";

import QuemSomosBanner from "/public/images/stcoop-quem-somos.png";

import LoremData from "../public/json/lorem.json";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

// import { Container } from './styles';

const QuemSomos: NextPage = () => {
  return (
    <>
      <Head>
        <title> STCOOP | Quem Somos Nós </title>
      </Head>

      <Navbar />

      <FullBanner>
        <Image
          src={QuemSomosBanner}
          layout="fill"
          objectFit="cover"
          alt="STCOOP Cooperativa Logística Facebook Icon"
        />
        <Container>
          <h1> QUEM SOMOS NÓS </h1>
        </Container>
      </FullBanner>

      <InfoBox>
        <Tabs />
      </InfoBox>

      <ValueBox>
        <Container>
          <TitleBox>
            <Title> NOSSOS VALORES </Title>
            <Subtitle> Os valores de nossa empresa </Subtitle>
          </TitleBox>
        </Container>
        <Values />
      </ValueBox>

      <CooperativismoBox>
        <Container>
          <TitleBox>
            <Title> COOPERATIVISMO </Title>
            <Subtitle> O que é o cooperativismo </Subtitle>
          </TitleBox>
          <Row>
            <Col lg={6}>
              <Row>
                <Col lg={12}>
                  <MiniTitle> Princípios </MiniTitle>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <Item>
                    <span> 1. </span>
                    <p> Ajuda mútua </p>
                  </Item>
                  <Item>
                    <span> 2. </span>
                    <p> Responsabilidade </p>
                  </Item>
                  <Item>
                    <span> 3. </span>
                    <p> Democracia e igualdade </p>
                  </Item>
                  <Item>
                    <span> 4. </span>
                    <p> Equidade e solidariedade </p>
                  </Item>
                  <Item>
                    <span> 5. </span>
                    <p> Honestidade </p>
                  </Item>
                  <Item>
                    <span> 6. </span>
                    <p> Transparência </p>
                  </Item>
                  <Item>
                    <span> 7. </span>
                    <p> Responsabilidade social </p>
                  </Item>
                </Col>
              </Row>
            </Col>
            <Col lg={6}>
              <Row>
                <Col lg={12}>
                  <MiniTitle> Cooperativa de Transporte </MiniTitle>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <TextDevelop>
                    A cooperativa de transporte atua na prestação de serviços
                    logísticos de cargas e passageiros, no Brasil o modelo de
                    trabalho da cooperativa é muito difundido no agronegócio, já
                    no setor de transporte este modelo de trabalho ainda dá seus
                    passos iniciais, mas já é possível visualizar um futuro
                    promissor e de sucesso.
                  </TextDevelop>
                  <TextDevelop>
                    A cooperativa de transporte atua na prestação de serviços
                    logísticos de cargas e passageiros, no Brasil o modelo de
                    trabalho da cooperativa é muito difundido no agronegócio, já
                    no setor de transporte este modelo de trabalho ainda dá seus
                    passos iniciais, mas já é possível visualizar um futuro
                    promissor e de sucesso.
                  </TextDevelop>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </CooperativismoBox>

      <BeneficiosBox>
        <OrangeLayerEdit left />
        <Container>
          <TitleBox>
            <Title white> NOSSOS BENEFÍCIOS </Title>
          </TitleBox>
        </Container>
        <Beneficios />
      </BeneficiosBox>

      <MapBox>
        <Container>
          <TitleBox>
            <Title> LOREM IPSUM </Title>
            <Subtitle> Lorem ipsum dolor sit </Subtitle>
          </TitleBox>
        </Container>
        <Map type="bases" />
      </MapBox>

      <LoremBox>
        <OrangeLayerWidth />
        <Container>
          <TitleBox>
            <Title white> LOREM IPSUM </Title>
            <Subtitle white> Lorem ipsum dolor sit </Subtitle>
          </TitleBox>
          <Row>
            {LoremData.map((item, index) => {
              return (
                <Col lg={4} key={index}>
                  <Lorem title={item.title} description={item.description} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </LoremBox>

      <ContactForm left />

      <Footer />
    </>
  );
};

export default QuemSomos;
