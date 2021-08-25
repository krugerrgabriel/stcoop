import type { NextPage } from "next";

import { Container, Row, Col } from "react-bootstrap";

import { TestStyle } from "../styles/pages";

const Home: NextPage = () => {
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
    </Container>
  );
};

export default Home;
