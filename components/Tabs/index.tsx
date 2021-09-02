import { useState } from "react";

import Image from "next/image";

import YouTube from "react-youtube";

import {
  Body,
  Header,
  TabsBox,
  Tab,
  TabText,
  VideoLayer,
  ImageBox,
} from "./styles";

import { Container, Row, Col } from "react-bootstrap";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const opts = {
    height: "535",
    width: "955",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <Body>
      <Container>
        <Row>
          <Col lg={6}>
            <Row>
              <Col lg={12}>
                <TabsBox>
                  <Header>
                    <Tab
                      active={activeTab == 0 ? true : false}
                      onClick={() => setActiveTab(0)}
                    >
                      Nossa missão
                    </Tab>
                    <Tab
                      active={activeTab == 1 ? true : false}
                      onClick={() => setActiveTab(1)}
                    >
                      Nossa visão
                    </Tab>
                    <Tab
                      active={activeTab == 2 ? true : false}
                      onClick={() => setActiveTab(2)}
                    >
                      A STCOOP
                    </Tab>
                  </Header>
                </TabsBox>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <TabText>
                  Fortalecer o cooperativismo, afim de promover qualidade de
                  vida, condições de trabalho, lucro e desenvolvimento social
                  aos caminhoneiros.
                </TabText>
              </Col>
            </Row>
          </Col>
          <Col lg={6}></Col>
        </Row>
      </Container>
      <VideoLayer>
        <ImageBox>
          {/* @ts-ignore */}
          <YouTube videoId="W0Wy1A1GWKQ" opts={opts} />
        </ImageBox>
      </VideoLayer>
    </Body>
  );
};

export default Tabs;
