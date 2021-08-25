import type { NextPage } from "next";

import { Container, Row, Col } from "react-bootstrap";

import { TestStyle } from "../../styles/pages";

const Test: NextPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <TestStyle>Teste</TestStyle>
        </Col>
      </Row>
      <Row>
        <Col> Teste </Col>
      </Row>
      <Row>
        <Col> Teste </Col>
        <Col> Teste </Col>
      </Row>
      <Row>
        <Col> Teste </Col>
        <Col> Teste </Col>
        <Col> Teste </Col>
      </Row>
      <Row>
        <Col> Teste </Col>
        <Col> Teste </Col>
        <Col> Teste </Col>
        <Col> Teste </Col>
      </Row>
    </Container>
  );
};

export default Test;
