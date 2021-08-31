import React from "react";
import Link from "next/link";

import { Container, Row, Col } from "react-bootstrap";
import { Body, Logo, Button, ColEdit, OrangeLayerEdit } from "./styles";

import LogoSTCOOP from "/public/images/stcoop-logo01.svg";

const Navbar: React.FC = () => {
  return (
    <Body>
      <Container>
        <Row>
          <Col lg={3}>
            <Logo src={LogoSTCOOP} alt="STCOOP Logo" width={225} height={64} />
          </Col>

          <ColEdit className="links" lg={6}>
            <Link href="/">
              <a> SEJA COOPERADO </a>
            </Link>
            <Link href="/">
              <a> QUEM SOMOS NÓS </a>
            </Link>
            <Link href="/">
              <a> CONTATO </a>
            </Link>
            <Link href="/">
              <a> BASES DE APOIO </a>
            </Link>
          </ColEdit>

          <Col lg={1}></Col>

          <ColEdit lg={2}>
            <Button>
              <Link href="/">
                <a> SOU COOPERADO </a>
              </Link>
            </Button>
          </ColEdit>
        </Row>
      </Container>
      <OrangeLayerEdit />
    </Body>
  );
};

export default Navbar;
