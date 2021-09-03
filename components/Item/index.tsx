import Image from "next/image";

import { ItemBox, ItemImageLayer, ItemLayer } from "./styles";
import { MiniTitle } from "../../styles";
import { TextDevelop } from "../../styles/pages/quem-somos";

import { Container, Row, Col } from "react-bootstrap";

const Item: React.FC = () => {
  const imagesArray = [
    require("../public/images/stcoop-espaco-lazer.png"),
    require("../public/images/stcoop-estacionamento.png"),
    require("../public/images/stcoop-comodidade.png"),
    require("../public/images/stcoop-banheiro.png"),
  ];
  return (
    <ItemBox>
      <ItemLayer>
        <ItemImageLayer>
          {/* <Image
            src={EspacoLazerImage}
            layout="fill"
            objectFit="cover"
            alt="STCOOP Cooperativa Logística Espaço de Lazer"
          /> */}
        </ItemImageLayer>
      </ItemLayer>
      <Container>
        <Row className="big-height">
          <Col lg={6} />
          <Col lg={6}>
            <Row>
              <Col lg={12}>
                <MiniTitle> ESPAÇO DE LAZER </MiniTitle>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <TextDevelop>
                  {" "}
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd{" "}
                </TextDevelop>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </ItemBox>
  );
};

export default Item;
