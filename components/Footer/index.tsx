import React from "react";

import Image from "next/image";
import Link from "next/link";

import {
  Body,
  Divider,
  LogoLayer,
  SocialMediaBox,
  LinkBox,
  ContactBox,
  CopyrightText,
} from "./styles";

import { Container, Row, Col } from "react-bootstrap";

import STCoopLogo from "/public/images/stcoop-white-logo.svg";
import FacebookIcon from "/public/images/icons/stcoop-facebook.svg";
import InstagramIcon from "/public/images/icons/stcoop-instagram.svg";
import YoutubeIcon from "/public/images/icons/stcoop-youtube.svg";

const Footer: React.FC = () => {
  return (
    <Body>
      <Container>
        <Row>
          <Col lg={3}>
            <ul>
              <li className="title">
                <Link href="/seja-cooperado">
                  <a>SEJA COOPERADO</a>
                </Link>
              </li>
              <li> Beneficios </li>
              <li> Unidade mais próxima </li>
              <li> Rota da informação</li>
            </ul>
          </Col>
          <Col lg={3} className="flex-center">
            <ul>
              <li className="title">
                <Link href="/quem-somos">
                  <a>QUEM SOMOS NÓS</a>
                </Link>
              </li>
              <li> O que é uma cooperativa </li>
              <li> A STCOOP </li>
              <li> Nossa missão </li>
              <li> Nossa visão </li>
              <li> Nossos valores </li>
              <li> Nossos benefícios </li>
            </ul>
          </Col>
          <Col lg={3} className="flex-end">
            <ul>
              <li className="title">
                <Link href="#contato">
                  <a> CONTATO </a>
                </Link>
              </li>
              <li> FAQ </li>
              <li> Nossas unidades </li>
              <li> Formulário </li>
            </ul>
          </Col>
          <Col lg={3} className="flex-end">
            <ul>
              <li className="title">
                {" "}
                <Link href="/bases-de-apoio">
                  <a>BASES DE APOIO</a>
                </Link>{" "}
              </li>
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
        <Row className="margin-top-28px">
          <Col lg={3} className="vertical-center">
            <LogoLayer>
              <Image
                src={STCoopLogo}
                layout="fill"
                objectFit="cover"
                alt="STCOOP Cooperativa Logística Logo Branca"
              />
            </LogoLayer>
          </Col>
          <Col lg={2} className="centered vertical-center">
            <SocialMediaBox>
              <a
                href="https://facebook.com/stcoop"
                target="_blank"
                rel="noreferrer"
              >
                <LinkBox className="facebook">
                  <Image
                    src={FacebookIcon}
                    layout="fill"
                    objectFit="cover"
                    alt="STCOOP Cooperativa Logística Facebook Icon"
                  />
                </LinkBox>
              </a>
              <a
                href="https://instagram.com/stcoop"
                target="_blank"
                rel="noreferrer"
              >
                <LinkBox className="instagram">
                  <Image
                    src={InstagramIcon}
                    layout="fill"
                    objectFit="cover"
                    alt="STCOOP Cooperativa Logística Instagram Icon"
                  />
                </LinkBox>
              </a>
              <a
                href="https://youtube.com/c/stcoop"
                target="_blank"
                rel="noreferrer"
              >
                <LinkBox className="youtube">
                  <Image
                    src={YoutubeIcon}
                    layout="fill"
                    objectFit="cover"
                    alt="STCOOP Cooperativa Logística Youtube Icon"
                  />
                </LinkBox>
              </a>
            </SocialMediaBox>
          </Col>
          <Col lg={3} className="centered vertical-center">
            <ContactBox>
              <a href="tel:08009999999"> 0800 999 9999 </a>
              <a href="mailto:contato@stcoop.com.br"> contato@stcoop.com.br </a>
            </ContactBox>
          </Col>
          <Col lg={4} className="vertical-center">
            <CopyrightText>
              Copyright © 2020 - 2021 ST COOP Cooperativa Logística. Todos os
              Direitos Reservados.
            </CopyrightText>
          </Col>
        </Row>
        <div className="margin-top-28px" />
      </Container>
    </Body>
  );
};

export default Footer;
