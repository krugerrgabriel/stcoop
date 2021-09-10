import { useState } from "react";

import { Body, MapLayer } from "./styles";
import { Container, Row, Col } from "react-bootstrap";

import Image from "next/image";

import { TextDevelop } from "../../styles/pages/quem-somos";
import { PinLayer, PinBox, UnidadeShow, ImageLayer } from "./styles";

import MapImage from "../../public/images/stcoop-map.svg";
import PinIcon from "../../public/images/icons/stcoop-pin.svg";
import PinImage from "../../public/images/icons/stcoop-map-pin.svg";

interface Data {
  top: string;
  bottom: string;
  left: string;
  right: string;
  city: string;
  name: string;
  link?: string;
}

const Map: React.FC<{ type: String }> = (props) => {
  const [nameData, setNameData] = useState("NÃO DEFINIDO");
  const PinsData =
    props.type == "unidades"
      ? require("../../public/json/unidadesPins.json")
      : require("../../public/json/basesPins.json");
  return (
    <Body>
      <Container>
        <Row>
          <Col lg={6}>
            <MapLayer>
              {PinsData.map((item: Data, index: number) => {
                return (
                  <PinLayer
                    top={item.top}
                    bottom={item.bottom}
                    left={item.left}
                    right={item.right}
                    onMouseEnter={() => setNameData(item.city)}
                    key={index}
                  >
                    <a
                      href={
                        props.type == "bases"
                          ? item.link
                          : `https://www.google.com.br/maps/search/${item.link}/`
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      <PinBox>
                        <Image
                          src={PinIcon}
                          layout="fill"
                          objectFit="cover"
                          alt={`STCOOP Cooperativa Logística ${item.name}`}
                        />
                      </PinBox>
                    </a>
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
                    <span>
                      {props.type == "unidades"
                        ? "UNIDADE"
                        : "BASE DE APOIO AO CAMINHONEIRO"}
                    </span>
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
