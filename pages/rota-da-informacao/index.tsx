import type { NextPage } from "next";

import Navbar from "../../components/Navbar";
import RotaCard from "../../components/RotaCard";
import RotaHorizontalCard from "../../components/RotaHorizontalCard";
import RotaBigCard from "../../components/RotaBigCard";
import RotaSmallCard from "../../components/RotaSmallCard";
import Footer from "../../components/Footer";

import Link from "next/link";

import { Container, Row, Col } from "react-bootstrap";

import {
  MaisVistosBox,
  NoticiasBox,
  Divider,
  BoxNews,
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
      <Navbar />

      <MaisVistosBox>
        <Container>
          <Row className="justify-content-center">
            <Col>
              <p className="title"> MAIS VISTOS RECENTEMENTE </p>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Link href={`/rota-da-informacao/${items[0]._id}`}>
                <a>
                  <RotaCard large item={items[0]} />
                </a>
              </Link>
            </Col>
            <Col lg={6}>
              <Row>
                <Col lg={6}>
                  <Link href={`/rota-da-informacao/${items[1]._id}`}>
                    <a>
                      <RotaCard item={items[1]} />
                    </a>
                  </Link>
                </Col>
                <Col lg={6}>
                  <Link href={`/rota-da-informacao/${items[2]._id}`}>
                    <a>
                      <RotaCard item={items[2]} />
                    </a>
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <Link href={`/rota-da-informacao/${items[3]._id}`}>
                    <a>
                      <RotaCard item={items[3]} />
                    </a>
                  </Link>
                </Col>
                <Col lg={6}>
                  <Link href={`/rota-da-informacao/${items[4]._id}`}>
                    <a>
                      <RotaCard item={items[4]} />
                    </a>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </MaisVistosBox>

      <Container>
        <Row>
          <Col lg={8}>
            <NoticiasBox>
              {items
                .filter((item) => item.big == false)
                .map((item, index) => {
                  return (
                    <>
                      <Link href={`/rota-da-informacao/${item._id}`}>
                        <a>
                          <RotaHorizontalCard item={item} />
                        </a>
                      </Link>
                      <Divider />
                    </>
                  );
                })}
              <RotaBigCard item={items[5]} />
              <Divider />
              {items
                .filter((item) => item.big == false)
                .map((item, index) => {
                  return (
                    <>
                      <Link href={`/rota-da-informacao/${item._id}`}>
                        <a>
                          <RotaHorizontalCard item={item} />
                        </a>
                      </Link>
                      {items.filter((item) => item.big == false).length - 1 !=
                      index ? (
                        <Divider />
                      ) : null}
                    </>
                  );
                })}
            </NoticiasBox>
          </Col>
          <Col lg={4}>
            <BoxNews>
              <h1> NOVOS </h1>
              {items
                .filter((item) => item.big == false)
                .map((item, index) => {
                  return (
                    <>
                      <Link href={`/rota-da-informacao/${item._id}`}>
                        <a>
                          <RotaSmallCard item={item} />
                        </a>
                      </Link>
                      {items.filter((item) => item.big == false).length - 1 !=
                      index ? (
                        <Divider small />
                      ) : null}
                    </>
                  );
                })}
            </BoxNews>
            <BoxNews>
              <h1> MAIS VISTOS </h1>
              {items
                .filter((item) => item.big == false)
                .map((item, index) => {
                  return (
                    <>
                      <Link href={`/rota-da-informacao/${item._id}`}>
                        <a>
                          <RotaSmallCard item={item} />
                        </a>
                      </Link>
                      {items.filter((item) => item.big == false).length - 1 !=
                      index ? (
                        <Divider small />
                      ) : null}
                    </>
                  );
                })}
            </BoxNews>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default RotaDaInformacao;
