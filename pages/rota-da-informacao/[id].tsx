import React from "react";

import type { NextPage } from "next";

import { useRouter } from "next/router";
import Head from "next/head";

import Navbar from "../../components/Navbar";
import Breadcrumb from "../../components/Breadcrumb";
import RotaSmallCard from "../../components/RotaSmallCard";

import Image from "next/image";

import { Container, Row, Col } from "react-bootstrap";

import {
  Title,
  FineLine,
  MoreInfo,
  MediaBox,
  MediaButton,
  MediaWrapper,
  ImageWrapper,
  Credits,
  Development,
  SocialButton,
  Wrapper,
  Divider,
  BoxNews,
} from "../../styles/pages/rota-da-informacao";

import FacebookImage from "../../public/images/icons/stcoop-facebook-two.svg";
import TwitterImage from "../../public/images/icons/stcoop-twitter.svg";
import WhatsappImage from "../../public/images/icons/stcoop-whatsapp.svg";
import MailImage from "../../public/images/icons/stcoop-mail.png";

import NewsImage from "../../public/images/news/news01.png";
import Footer from "../../components/Footer";

const Noticia: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const treeArray = [
    {
      name: "Inicio",
      url: "/",
    },
    {
      name: "Atualizações",
      url: "/rota-da-informacao",
    },
    {
      name: id,
      url: null,
    },
  ];

  const items = [
    {
      _id: 0,
      title: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      tag: "Lorem Ipsum",
      author: "Helena Rodrigues",
      createdAt: "Agosto 13, 2021",
      image: require("../../public/images/news/news01.png"),
      big: false,
    },
    {
      _id: 1,
      title: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr",
      description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr",
      tag: "Lorem Ipsum",
      author: "Helena Rodrigues",
      createdAt: "Agosto 13, 2021",
      image: require("../../public/images/news/news02.png"),
      big: false,
    },
    {
      _id: 2,
      title: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr",
      description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr",
      tag: "Lorem Ipsum",
      author: "Helena Rodrigues",
      createdAt: "Agosto 13, 2021",
      image: require("../../public/images/news/news03.png"),
      big: false,
    },
    {
      _id: 3,
      title: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr",
      description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr",
      tag: "Lorem Ipsum",
      author: "Helena Rodrigues",
      createdAt: "Agosto 13, 2021",
      image: require("../../public/images/news/news04.png"),
      big: false,
    },
    {
      _id: 4,
      title: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr",
      description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr",
      tag: "Lorem Ipsum",
      author: "Helena Rodrigues",
      createdAt: "Agosto 13, 2021",
      image: require("../../public/images/news/news05.png"),
      big: false,
    },
    {
      _id: 5,
      title: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo",
      tag: "Lorem Ipsum",
      author: "Helena Rodrigues",
      createdAt: "Agosto 13, 2021",
      image: require("../../public/images/news/news06.png"),
      big: true,
    },
  ];

  return (
    <>
      <Head>
        <title> STCOOP | {items[0].title} </title>
      </Head>

      <Navbar />
      {/* @ts-ignore */}
      <Breadcrumb tree={treeArray} />
      <Container>
        <Row>
          <Col lg={8}>
            <Row>
              <Col lg={12}>
                <Title>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam
                </Title>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <FineLine>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos
                </FineLine>
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <MoreInfo>
                  <p> Por: Helena Rodrigues </p>
                  <span> ATUALIZADO A 4 DIAS </span>
                </MoreInfo>
              </Col>
              <Col lg={4} />
              <Col lg={4} className="justify-content-end display-flex">
                <MediaBox>
                  <MediaButton type="facebook">
                    <MediaWrapper type="facebook">
                      <Image
                        src={FacebookImage}
                        layout="fill"
                        objectFit="cover"
                        alt="STCOOP Cooperativa Logística Facebook Icon"
                      />
                    </MediaWrapper>
                  </MediaButton>
                  <MediaButton type="twitter">
                    <MediaWrapper type="twitter">
                      <Image
                        src={TwitterImage}
                        layout="fill"
                        objectFit="cover"
                        alt="STCOOP Cooperativa Logística Facebook Icon"
                      />
                    </MediaWrapper>
                  </MediaButton>
                  <MediaButton type="whatsapp">
                    <MediaWrapper type="whatsapp">
                      <Image
                        src={WhatsappImage}
                        layout="fill"
                        objectFit="cover"
                        alt="STCOOP Cooperativa Logística Facebook Icon"
                      />
                    </MediaWrapper>
                  </MediaButton>
                  <MediaButton type="mail">
                    <MediaWrapper type="mail">
                      <Image
                        src={MailImage}
                        layout="fill"
                        objectFit="cover"
                        alt="STCOOP Cooperativa Logística Facebook Icon"
                      />
                    </MediaWrapper>
                  </MediaButton>
                </MediaBox>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <ImageWrapper>
                  <Image
                    src={NewsImage}
                    layout="fill"
                    objectFit="cover"
                    alt="STCOOP Cooperativa Logística Facebook Icon"
                  />
                </ImageWrapper>
                <Credits> Lorem Ipsum - 00/00/0000 </Credits>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <Development>
                  Ao longo dos anos, contemplando um extenso período de estrada
                  e sujeito aos diferentes desafios da profissão, o caminhoneiro
                  vivencia diferentes adversidades que expressam como é de fato
                  estar diariamente em evidência no trecho. Quando pensamos nos
                  diferentes desafios da profissão corriqueiramente lembramos
                  das contrariedades com; o alto custo do diesel, pneus,
                  assistência técnica, longas horas atrás do volante,
                  dificuldades em encontrar um local apropriado para descansar
                  com tranquilidade, entre outras circunstâncias. Mas entre um
                  frete e outro, há também a dificuldade em encontrar uma
                  entrega que de fato seja rentável para o motorista.
                </Development>
                <Development>
                  Quando surgem as viagens, o caminhoneiro está habituado a
                  considerar o valor que irá receber para levar a carga até o
                  destino, mas de fato não pondera os custos que terá ao
                  percorrer todo o trajeto e, até mesmo, se irá conseguir um
                  novo frete para realizar no seu percurso de retorno que de
                  fato seja benéfico e capaz de restituir os gastos que obteve.
                  Para os caminhoneiros associados a transportadoras, a
                  realidade é bem distinta, tanto em relação ao trajeto
                  percorrido durante o percurso, mas também, e principalmente,
                  na garantia em ter uma carga vantajosa como retorno para a
                  cidade em que reside.
                </Development>
                <Development>
                  A segurança na estrada é um enorme privilégio, ninguém espera
                  passar por um problema no caminho, mas é preciso estar sempre
                  preparado. Se tornar associado a uma transportadora é a
                  solução ideal para quem busca dirigir pelas estradas com
                  segurança, conforto e bem-estar, é válido considerar também,
                  que o caminhoneiro, tem a garantia sobre o faturamento, possui
                  uma carga horária específica a ser cumprida, tem a garantia de
                  amparo sobre quaisquer incidentes que possam acontecer ao
                  longo do trajeto, possui a segurança em conseguir um novo
                  frete ao voltar das entregas, plano de assistência 24 horas,
                  benefícios para o caminhão entre outros importantes e
                  relevantes recursos.
                </Development>
                <Development>
                  A segurança na estrada é um enorme privilégio, ninguém espera
                  passar por um problema no caminho, mas é preciso estar sempre
                  preparado. Se tornar associado a uma transportadora é a
                  solução ideal para quem busca dirigir pelas estradas com
                  segurança, conforto e bem-estar, é válido considerar também,
                  que o caminhoneiro, tem a garantia sobre o faturamento, possui
                  uma carga horária específica a ser cumprida, tem a garantia de
                  amparo sobre quaisquer incidentes que possam acontecer ao
                  longo do trajeto, possui a segurança em conseguir um novo
                  frete ao voltar das entregas, plano de assistência 24 horas,
                  benefícios para o caminhão entre outros importantes e
                  relevantes recursos.
                </Development>
                <Development>
                  É válido considerar, que os motoristas ao aceitarem as
                  entregas de cargas calculam moderadamente o valor que será
                  agregado pelo serviço somente na ida, mas não consideram os
                  custos que terão com o retorno para casa, ou até mesmo, a
                  possibilidade de conseguir uma entrega ao retornar. Ao ser
                  associado a uma transportadora ou associação, o motorista
                  garante um clube de benefícios coletivos que certificam mais
                  força e segurança para negociar com condições diferenciadas, e
                  o fator mais significativo sempre encontra um frete de retorno
                  que considera exclusivamente o lucro e a comodidade do
                  motorista.
                </Development>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <BoxNews>
              <h1> NOVOS </h1>
              <Row>
                {items
                  .filter((item) => item.big == false)
                  .map((item, index) => {
                    return (
                      <Col lg={12} md={6} sm={6} xs={12} key={index}>
                        <RotaSmallCard item={item} />
                        {items.filter((item) => item.big == false).length - 1 !=
                        index ? (
                          <Divider small />
                        ) : null}
                      </Col>
                    );
                  })}
              </Row>
            </BoxNews>
          </Col>
        </Row>
        <Row>
          <Col lg={3} md={6} sm={6}>
            <SocialButton type="facebook">
              <Wrapper type="facebook">
                <Image
                  src={FacebookImage}
                  layout="fill"
                  objectFit="cover"
                  alt="STCOOP Cooperativa Logística Facebook Icon"
                />
              </Wrapper>
              <span> COMPARTILHAR </span>
            </SocialButton>
          </Col>
          <Col lg={3} md={6} sm={6}>
            <SocialButton type="twitter">
              <Wrapper type="twitter">
                <Image
                  src={TwitterImage}
                  layout="fill"
                  objectFit="cover"
                  alt="STCOOP Cooperativa Logística Facebook Icon"
                />
              </Wrapper>
              <span> TWEETAR </span>
            </SocialButton>
          </Col>
          <Col lg={3} md={6} sm={6}>
            <SocialButton type="whatsapp">
              <Wrapper type="whatsapp">
                <Image
                  src={WhatsappImage}
                  layout="fill"
                  objectFit="cover"
                  alt="STCOOP Cooperativa Logística Facebook Icon"
                />
              </Wrapper>
              <span> ENCAMINHAR </span>
            </SocialButton>
          </Col>
          <Col lg={3} md={6} sm={6}>
            <SocialButton type="mail">
              <Wrapper type="mail">
                <Image
                  src={MailImage}
                  layout="fill"
                  objectFit="cover"
                  alt="STCOOP Cooperativa Logística Facebook Icon"
                />
              </Wrapper>
              <span> ENVIAR </span>
            </SocialButton>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={2}>
            <Divider second />
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Title italic second>
              RELACIONADOS
            </Title>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={6} sm={12} xs={12}>
            <RotaSmallCard item={items[0]} />
          </Col>
          <Col lg={4} md={6} sm={12} xs={12}>
            <RotaSmallCard item={items[1]} />
          </Col>
          <Col lg={4} md={6} sm={12} xs={12}>
            <RotaSmallCard item={items[2]} />
          </Col>
        </Row>
      </Container>

      <div className="margin-top-42px"></div>

      <Footer />
    </>
  );
};

export default Noticia;
