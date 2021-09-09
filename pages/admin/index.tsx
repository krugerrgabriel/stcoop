import type { NextPage } from "next";

import Head from "next/head";

import Navbar from "../../components/admin/Navbar";
import Card from "../../components/admin/Card";
import Footer from "../../components/Footer";

import { Body, Title } from "../../styles/pages/admin";

import { Container, Row, Col } from "react-bootstrap";

const Dashboard: NextPage = () => {
  return (
    <>
      <Body>
        <Head>
          <title> STCOOP | Dashboard </title>
        </Head>
        <Navbar />

        <Container>
          <Row className="justify-content-center">
            <Col lg={4}>
              <Title>
                Boa tarde Gabriel, <br />
                Seja bem-vindo novamente :D
              </Title>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Card type="produtos" value={7} label="Produtos/Serviços" />
            </Col>
            <Col lg={4}>
              <Card type="noticias" value={9} label="Notícias" />
            </Col>
            <Col lg={4}>
              <Card type="parceiros" value={5} label="Parceiros" />
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Card type="bases" value={3} label="Bases de Apoio" />
            </Col>
            <Col lg={4}>
              <Card type="perguntas" value={14} label="Perguntas Frequentes" />
            </Col>
            <Col lg={4}>
              <Card type="visitantes" value={257} label="Visitantes" />
            </Col>
          </Row>
        </Container>
      </Body>
      <Footer withoutSitemap={true} />
    </>
  );
};

export default Dashboard;
