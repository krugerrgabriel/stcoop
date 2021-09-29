import React, { useState } from "react";

import type { NextPage } from "next";

import Head from "next/head";
import Image from "next/image";
import YouTube from "react-youtube";

import Navbar from "../components/Navbar";
import Map from "../components/Map";
import { MapBox } from "../components/Map/styles";

import { FullBanner, MiniTitle, TitleBox, Title, Subtitle } from "../styles/";
import {
  OqueBox,
  VideoLayer,
  ImageBox,
  FaqBox,
} from "../styles/pages/seja-cooperado";
import { TextDevelop } from "../styles/pages/quem-somos";

import { Container, Row, Col, Accordion, Card } from "react-bootstrap";

import SejaCooperadoBanner from "../public/images/stcoop-seja-cooperado.png";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

import FaqData from "../public/json/faq.json";

const SejaCooperado: NextPage = () => {
  const [youtubeReady, setYoutubeReady] = useState(false);
  const opts = {};
  return (
    <>
      <Head>
        <title> STCOOP | Seja Cooperado </title>
      </Head>

      <Navbar />

      <FullBanner>
        <Image
          src={SejaCooperadoBanner}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          alt="STCOOP Cooperativa Logística Facebook Icon"
        />
        <Container>
          <h1> SEJA COOPERADO </h1>
        </Container>
      </FullBanner>

      <OqueBox>
        <Container>
          <Row>
            <Col lg={5} md={6} className="margin-top-42px">
              <Row>
                <Col lg={12}>
                  <MiniTitle> LOREM IPSUM DOLOR SIT </MiniTitle>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <TextDevelop>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd
                  </TextDevelop>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <VideoLayer>
          <ImageBox ready={youtubeReady}>
            {/* @ts-ignore */}
            <YouTube
              videoId="2G6E7WcVIJc"
              opts={opts}
              className="youtube-frame"
              onReady={() => setYoutubeReady(true)}
            />
          </ImageBox>
        </VideoLayer>
      </OqueBox>

      <MapBox id="nossas-unidades" gray>
        <Container>
          <TitleBox>
            <Title> NOSSAS UNIDADES </Title>
            <Subtitle> Lorem ipsum dolor sit </Subtitle>
          </TitleBox>
        </Container>
        <Map type="unidades" />
      </MapBox>

      <FaqBox id="faq">
        <Container>
          <TitleBox>
            <Title> FAQ </Title>
            <Subtitle> Perguntas frequentes </Subtitle>
          </TitleBox>
          <Row>
            <Col lg={2} />
            <Col lg={10}>
              <Accordion>
                {FaqData.map((item, index) => {
                  return (
                    <Card className="test-class" key={item._id}>
                      <Accordion.Toggle as={Card.Header} eventKey={item._id}>
                        {item.question}
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey={item._id}>
                        <Card.Body>{item.answer}</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  );
                })}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </FaqBox>

      <ContactForm />

      <Footer />
    </>
  );
};

export default SejaCooperado;
