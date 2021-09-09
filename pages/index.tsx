import type { NextPage } from "next";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Benefit from "../components/Benefit";
import Button from "../components/Button";
import ContactForm from "../components/ContactForm";

import { Container, Row, Col } from "react-bootstrap";

import { TitleBox, Title, Subtitle } from "../styles/";
import { BenefitsBox } from "../styles/pages/index";
import Partners from "../components/Partners";
import { PartnersBox } from "../components/Partners/styles";
import Lorem from "../components/Lorem";
import { LoremBox, OrangeLayerWidth } from "../components/Lorem/styles";
import NewsCard from "../components/NewsCard/";
import { NewsCardBox } from "../components/NewsCard/styles";
import Footer from "../components/Footer";

import BenefitsData from "../public/json/benefits.json";
import LoremData from "../public/json/lorem.json";
import NewsData from "../public/json/news.json";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> STCOOP Cooperativa Logística </title>
      </Head>

      <Navbar />

      <Carousel active={1} orangeLayer="right" />

      <BenefitsBox>
        <Container>
          <TitleBox>
            <Title> VANTAGENS DE SER COOPERADO </Title>
            <Subtitle> Lorem ipsum dolor sit </Subtitle>
          </TitleBox>
          <Row>
            {BenefitsData.map((item, index) => {
              return (
                <Col lg={4} key={index}>
                  <Benefit
                    title={item.title}
                    description={item.description}
                    image={item.image}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </BenefitsBox>

      <PartnersBox>
        <Container>
          <TitleBox>
            <Title> NOSSOS PARCEIROS </Title>
            <Subtitle> Nossas empresas parceiras </Subtitle>
          </TitleBox>
        </Container>
        <Partners />
      </PartnersBox>

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

      <NewsCardBox>
        <Container>
          <TitleBox>
            <Title> ROTA DA INFORMAÇÃO </Title>
            <Subtitle> Veja o que há de novo no mundo do caminhoneiro</Subtitle>
          </TitleBox>
          <Row>
            {NewsData.map((item, index) => {
              return (
                <Col lg={4} key={item._id}>
                  <NewsCard item={item} />
                </Col>
              );
            })}
          </Row>
          <Row className="justify-content-center margin-top-28px">
            <Col lg={2}>
              <Button> VER TUDO </Button>
            </Col>
          </Row>
        </Container>
      </NewsCardBox>

      <ContactForm />

      <Footer />
    </>
  );
};

export default Home;
