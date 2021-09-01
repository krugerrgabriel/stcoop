import React from "react";

import { Body, Divider } from "./styles";

import { Container, Row, Col } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <Body>
      <Container>
        <Row>
          <Col lg={3}>
            <ul>
              <li className="title"> SEJA COOPERADO </li>
              <li> Beneficios </li>
              <li> Unidade mais próxima </li>
              <li> Rota da informação</li>
            </ul>
          </Col>
          <Col lg={3}>
            <ul>
              <li className="title"> QUEM SOMOS NÓS </li>
              <li> O que é uma cooperativa </li>
              <li> A STCOOP </li>
              <li> Nossa missão </li>
              <li> Nossa visão </li>
              <li> Nossos valores </li>
              <li> Nossos benefícios </li>
            </ul>
          </Col>
          <Col lg={3}>
            <ul>
              <li className="title"> CONTATO </li>
              <li> FAQ </li>
              <li> Nossas unidades </li>
              <li> Formulário </li>
            </ul>
          </Col>
          <Col lg={3}>
            <ul>
              <li className="title"> BASES DE APOIO </li>
              <li> Ver sobre </li>
              <li> Localização </li>
            </ul>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={5}>
            <Divider />
          </Col>
        </Row>
      </Container>
    </Body>
  );
};

export default Footer;
