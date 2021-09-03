import { useState } from "react";

import { Body, MapLayer } from "./styles";
import { Container, Row, Col } from "react-bootstrap";

import Image from "next/image";

import { TextDevelop } from "../../styles/pages/quem-somos";
import { PinLayer, PinBox, UnidadeShow, ImageLayer } from "./styles";

import MapImage from "../../public/images/stcoop-map.svg";
import PinIcon from "../../public/images/icons/stcoop-pin.svg";
import PinImage from "../../public/images/icons/stcoop-map-pin.svg";

const Map: React.FC<{ type: String }> = (props) => {
  const [nameData, setNameData] = useState("NÃO DEFINIDO");
  const PinsData =
    props.type == "unidade"
      ? require("../../public/json/basePins.json")
      : require("../../public/json/unidadePins.json");
  return (
    <Body>
      <Container>
        <Row>
          <Col lg={6}>
            <MapLayer>
              {/* @ts-ignore */}
              {PinsData.map((item, index) => {
                return (
                  <PinLayer
                    top={item.top}
                    bottom={item.bottom}
                    left={item.left}
                    right={item.right}
                    onMouseEnter={() => setNameData(item.city)}
                    key={index}
                  >
                    <PinBox>
                      <a href={item.link} target="_blank" rel="noreferrer">
                        <Image
                          src={PinIcon}
                          layout="fill"
                          objectFit="cover"
                          alt={`STCOOP Cooperativa Logística ${item.name}`}
                        />
                      </a>
                    </PinBox>
                  </PinLayer>
                );
              })}
              <Image
                src={MapImage}
                layout="fill"
                objectFit="cover"
                alt="STCOOP Cooperativa Logística Facebook Icon"
              />
            </MapLayer>
          </Col>
          <Col
            lg={6}
            className="display-flex justify-content-center flex-column"
          >
            <TextDevelop>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            </TextDevelop>
            <TextDevelop>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            </TextDevelop>
            <Row>
              <Col lg={7}>
                <UnidadeShow>
                  <ImageLayer>
                    <Image
                      src={PinImage}
                      layout="fill"
                      objectFit="cover"
                      alt="STCOOP Cooperativa Logística Facebook Icon"
                    />
                  </ImageLayer>
                  <div className="info">
                    <span> BASE DE APOIO AO CAMINHONEIRO </span>
                    <p> {nameData} </p>
                  </div>
                </UnidadeShow>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Body>
  );
};

export default Map;
