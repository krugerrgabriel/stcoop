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

import STCoopLogo from "../../public/images/stcoop-white-logo.svg";
import FacebookIcon from "../../public/images/icons/stcoop-facebook.svg";
import InstagramIcon from "../../public/images/icons/stcoop-instagram.svg";
import YoutubeIcon from "../../public/images/icons/stcoop-youtube.svg";

const Footer: React.FC<{ withoutSitemap?: Boolean }> = (props) => {
  return (
    <Body>
      <Container>
        {!props.withoutSitemap ? (
          <>
            <Row>
              <Col lg={3} md={6} sm={6} xs={6} className="item-1">
                <ul>
                  <li className="title">
                    <Link href="/seja-cooperado">
                      <a>SEJA COOPERADO</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/seja-cooperado">
                      <a>Beneficios</a>
                    </Link>
                  </li>
                  <li> Unidade mais próxima </li>
                  <li>
                    <Link href="/rota-da-informacao">
                      <a>Rota da informação</a>
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col lg={3} md={6} sm={6} xs={6} className="item-2">
                <ul>
                  <li className="title">
                    <Link href="/quem-somos">
                      <a>QUEM SOMOS NÓS</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/quem-somos#cooperativismo">
                      <a>O que é uma cooperativa</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/quem-somos?tab=3">
                      <a>A COOPERATIVA</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/quem-somos?tab=0">
                      <a>Nossa missão</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/quem-somos?tab=1">
                      <a>Nossa visão</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/quem-somos#nossos-valores">
                      <a>Nossos valores</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/quem-somos#nossos-beneficios">
                      <a>Nossos benefícios</a>
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col lg={3} md={6} sm={6} xs={6} className="item-3">
                <ul>
                  <li className="title">
                    <Link href="#contato">
                      <a> CONTATO </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/seja-cooperado#faq">
                      <a>FAQ</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/seja-cooperado#nossas-unidades">
                      <a>Nossas unidades</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#contato">
                      <a> Formulário </a>
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col lg={3} md={6} sm={6} xs={6} className="item-4">
                <ul>
                  <li className="title">
                    <Link href="/bases-de-apoio">
                      <a>BASES DE APOIO</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/bases-de-apoio">
                      <a>Ver</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/bases-de-apoio#onde-estao">
                      <a>Localização</a>
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg={5}>
                <Divider />
              </Col>
            </Row>
          </>
        ) : null}
        <Row className="margin-top-28px">
          <Col lg={3} md={6} sm={6} xs={6} className="vertical-center">
            <LogoLayer>
              <Image
                src={STCoopLogo}
                layout="fill"
                objectFit="cover"
                alt="STCOOP Cooperativa Logística Logo Branca"
              />
            </LogoLayer>
          </Col>
          <Col lg={2} md={6} sm={6} xs={6} className="centered vertical-center">
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
          <Col
            lg={3}
            md={6}
            sm={6}
            xs={6}
            className="centered vertical-center item-contact"
          >
            <ContactBox>
              <a href="tel:08009999999"> 0800 999 9999 </a>
              <a href="mailto:contato@stcoop.com.br"> contato@stcoop.com.br </a>
            </ContactBox>
          </Col>
          <Col lg={4} md={6} sm={6} xs={6} className="vertical-center">
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
