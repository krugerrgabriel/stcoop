import type { NextPage } from "next";

import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Benefit from "../components/Benefit";

import { Container, Row, Col } from "react-bootstrap";

import { BenefitsBox } from "../styles/pages/index";
import { TitleBox, Title, Subtitle } from "../styles/";

import BenefitsData from "../public/json/benefits.json";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    console.log(BenefitsData);
  }, []);
  return (
    <>
      <Navbar />

      <Carousel active={1} orangeLayer="right" />

      <BenefitsBox>
        <Container>
          <TitleBox>
            <Title> VANTAGENS DE SER COOPERADO </Title>
            <Subtitle> Lorem ipsum dolor sit </Subtitle>
          </TitleBox>
          <Row>
            {BenefitsData.map((item, index) => {
              return (
                <Col lg={4} key={index}>
                  <Benefit
                    title={item.title}
                    description={item.description}
                    image={item.image}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </BenefitsBox>
    </>
  );
};

export default Home;
