import { useState } from "react";
import type { NextPage } from "next";

import { useRouter } from "next/router";
import Head from "next/head";

import Navbar from "../../components/admin/Navbar";
import Card from "../../components/admin/Card";
import Footer from "../../components/Footer";
import Modal from "../../components/admin/Modal";

import { Body, Title } from "../../styles/pages/admin";

import { Container, Row, Col } from "react-bootstrap";

const Dashboard: NextPage = () => {
  const [modalActive, setModalActive] = useState(false);
  const [modalType, setModalType] = useState("");
  const router = useRouter();
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
              <Card
                type="produtos"
                value={7}
                label="Produtos/Serviços"
                handleAdd={() => {
                  setModalActive(true);
                  setModalType("produtos");
                }}
              />
            </Col>
            <Col lg={4}>
              <Card
                type="noticias"
                value={9}
                label="Notícias"
                handleAdd={() => {
                  router.push("/admin/noticias/cadastro");
                }}
              />
            </Col>
            <Col lg={4}>
              <Card
                type="parceiros"
                value={5}
                label="Parceiros"
                handleAdd={() => {
                  setModalActive(true);
                  setModalType("parceiros");
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Card
                type="bases"
                value={3}
                label="Bases de Apoio"
                handleAdd={() => {
                  setModalActive(true);
                  setModalType("bases");
                }}
              />
            </Col>
            <Col lg={4}>
              <Card
                type="perguntas"
                value={14}
                label="Perguntas Frequentes"
                handleAdd={() => {
                  setModalActive(true);
                  setModalType("perguntas");
                }}
              />
            </Col>
            <Col lg={4}>
              <Card
                type="visitantes"
                value={257}
                label="Visitantes"
                handleAdd={() => {
                  setModalActive(true);
                  setModalType("visitantes");
                }}
              />
            </Col>
          </Row>
        </Container>
      </Body>
      <Footer withoutSitemap={true} />
      <Modal active={modalActive} handleClose={() => setModalActive(false)} />
    </>
  );
};

export default Dashboard;
