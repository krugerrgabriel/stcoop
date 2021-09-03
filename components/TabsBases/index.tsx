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

const TabsBases: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const textsArray = [
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
  ];

  const videosArray = ["E19qYSYBgqQ", "W0Wy1A1GWKQ", "fdS-aCIKrfQ"];

  const opts = {
    height: "535",
    width: "955",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <Body>
      <Container>
        <Row>
          <Col lg={7}>
            <Row>
              <Col lg={12}>
                <TabsBox>
                  <Header>
                    <Tab
                      active={activeTab == 0 ? true : false}
                      onClick={() => setActiveTab(0)}
                    >
                      Cascavel
                    </Tab>
                    <Tab
                      active={activeTab == 1 ? true : false}
                      onClick={() => setActiveTab(1)}
                    >
                      Rondonópolis
                    </Tab>
                    <Tab
                      active={activeTab == 2 ? true : false}
                      onClick={() => setActiveTab(2)}
                    >
                      Curitiba
                    </Tab>
                  </Header>
                </TabsBox>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <TabText>{textsArray[activeTab]}</TabText>
              </Col>
            </Row>
          </Col>
          <Col lg={6}></Col>
        </Row>
      </Container>
      <VideoLayer>
        <ImageBox>
          {/* @ts-ignore */}
          <YouTube videoId={videosArray[activeTab]} opts={opts} />
        </ImageBox>
      </VideoLayer>
    </Body>
  );
};

export default TabsBases;
