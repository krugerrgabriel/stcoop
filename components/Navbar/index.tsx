import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { Container, Row, Col } from "react-bootstrap";
import { Body, Logo, Button, ColEdit, LogoLayer, Sidenav } from "./styles";

import LogoSTCOOP from "../../public/images/stcoop-logo01.svg";
import SidenavIcon from "../../public/images/icons/stcoop-sidenav.svg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Body className="orange-layer-navbar">
        <Container className="position-relative">
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
              <Button className="main" disabled>
                <a> SOU COOPERADO </a>
              </Button>
            </ColEdit>

            <div className="sidenav-trigger" onClick={() => setIsOpen(!isOpen)}>
              <div className="wrapper">
                <Image
                  src={SidenavIcon}
                  layout="fill"
                  objectFit="cover"
                  alt="STCOOP Cooperativa Logística Sidenav Icon"
                />
              </div>
            </div>
          </Row>
        </Container>
      </Body>
      <Sidenav active={isOpen}>
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
          <a className="last"> BASES DE APOIO </a>
        </Link>
        <Button disabled>
          <a> SOU COOPERADO </a>
        </Button>
      </Sidenav>
    </>
  );
};

export default Navbar;
