import React from "react";

import type { NextPage } from "next";

import Head from "next/head";

import Navbar from "../../components/Navbar";
import RotaCard from "../../components/RotaCard";
import RotaHorizontalCard from "../../components/RotaHorizontalCard";
import RotaBigCard from "../../components/RotaBigCard";
import RotaSmallCard from "../../components/RotaSmallCard";
import Footer from "../../components/Footer";

import { Container, Row, Col } from "react-bootstrap";

import {
  MaisVistosBox,
  NoticiasBox,
  Divider,
  BoxNews,
  MarginMd,
} from "../../styles/pages/rota-da-informacao";

const RotaDaInformacao: NextPage = () => {
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
        <title> STCOOP | Rota da Informação </title>
      </Head>

      <Navbar />

      <MaisVistosBox>
        <Container>
          <Row className="justify-content-center">
            <Col>
              <p className="title"> ROTA DA INFORMAÇÃO </p>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <RotaCard large item={items[0]} />
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <RotaCard item={items[1]} />
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <RotaCard item={items[2]} />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <RotaCard item={items[3]} />
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <RotaCard item={items[4]} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </MaisVistosBox>

      <Container>
        <Row>
          <Col lg={8} md={12} sm={12}>
            <NoticiasBox>
              {items
                .filter((item) => item.big == false)
                .map((item, index) => {
                  return (
                    <div key={index}>
                      <RotaHorizontalCard item={item} />
                      <Divider />
                    </div>
                  );
                })}
              <RotaBigCard item={items[5]} />
              <Divider />
              {items
                .filter((item) => item.big == false)
                .map((item, index) => {
                  return (
                    <div key={index}>
                      <RotaHorizontalCard item={item} />
                      {items.filter((item) => item.big == false).length - 1 !=
                      index ? (
                        <Divider />
                      ) : null}
                    </div>
                  );
                })}
            </NoticiasBox>
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
            <BoxNews>
              <h1> MAIS VISTOS </h1>
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
      </Container>

      <MarginMd />

      <Footer />
    </>
  );
};

export default RotaDaInformacao;
