import { useState } from "react";

import Navbar from "../../../components/admin/Navbar";
import Footer from "../../../components/Footer";
import { InputField } from "../../../components/ContactElements";

import { Container, Row, Col } from "react-bootstrap";

import { Body, Title } from "../../../styles/pages/admin/";

const CadastroNoticia: React.FC = () => {
  const [titulo, setTitulo] = useState("");
  const [linhaFina, setLinhaFina] = useState("");
  const [visibleTag, setVisibleTag] = useState("");
  const [invisibleTag, setInvisibleTag] = useState("");
  const [value, setValue] = useState("");
  return (
    <>
      <Body>
        <Navbar />
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <Title> CADASTRO DE NOTÍCIAS </Title>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <InputField
                type="email"
                id="mail"
                label="E-mail"
                value={titulo}
                onType={(data: string) => setTitulo(data)}
              />
            </Col>
            <Col lg={6}></Col>
          </Row>
          <Row>
            <Col lg={6}>
              <InputField
                type="email"
                id="mail"
                label="E-mail"
                value={linhaFina}
                onType={(data: string) => setLinhaFina(data)}
              />
            </Col>
            <Col lg={3}>
              <InputField
                type="email"
                id="mail"
                label="E-mail"
                value={visibleTag}
                onType={(data: string) => setVisibleTag(data)}
              />
            </Col>
            <Col lg={3}>
              <InputField
                type="email"
                id="mail"
                label="E-mail"
                value={invisibleTag}
                onType={(data: string) => setInvisibleTag(data)}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={12}></Col>
          </Row>
        </Container>
      </Body>
      <Footer withoutSitemap />
    </>
  );
};

export default CadastroNoticia;
