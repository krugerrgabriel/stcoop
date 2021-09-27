import React from "react";

import Link from "next/link";

import { Container, Row, Col } from "react-bootstrap";
import { Body, Logo, Button, ColEdit, LogoLayer } from "./styles";

import LogoSTCOOP from "../../public/images/stcoop-logo01.svg";

const Navbar: React.FC = () => {
  return (
    <Body className="orange-layer">
      <Container>
        <Row>
          <Col lg={3} md={4} sm={5} xs={6}>
            <Link href="/">
              <a>
                <LogoLayer>
                  <Logo
                    src={LogoSTCOOP}
                    layout="fill"
                    objectFit="cover"
                    alt="STCOOP Cooperativa Logística Logo Branca"
                  />
                </LogoLayer>
              </a>
            </Link>
          </Col>

          <ColEdit className="links" lg={6} md={1} sm={1} xs={1}>
            <Link href="/seja-cooperado">
              <a> SEJA COOPERADO </a>
            </Link>
            <Link href="/quem-somos">
              <a> QUEM SOMOS NÓS </a>
            </Link>
            <Link href="/rota-da-informacao">
              <a> ROTA DA INFORMAÇÃO </a>
            </Link>
            <Link href="/bases-de-apoio">
              <a> BASES DE APOIO </a>
            </Link>
          </ColEdit>

          <Col lg={1} md={3} sm={1} xs={1}></Col>

          <ColEdit lg={2} md={4} sm={5} xs={4}>
            <Button disabled>
              <a> SOU COOPERADO </a>
            </Button>
          </ColEdit>
        </Row>
      </Container>
      {/* <OrangeLayerEdit /> */}
    </Body>
  );
};

export default Navbar;
