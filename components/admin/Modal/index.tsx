import Button from "../../Button";

import Image from "next/image";

import { Body, Overlay } from "./styles";

import { Row, Col } from "react-bootstrap";

const Modal: React.FC<{ active?: Boolean; handleClose: Function }> = (
  props
) => {
  return (
    <>
      <Body active={props.active ? true : false}>
        <div className="closeBox" onClick={() => props.handleClose()}>
          <div className="closeWrapper">
            <Image
              src={require("../../../public/images/icons/stcoop-close.svg")}
              layout="fill"
              objectFit="cover"
              alt="STCOOP Cooperativa Logística Logo Branca"
            />
          </div>
        </div>
        <Row>
          <Col lg={12}>
            <p> CADASTRO DE PRODUTOS/SERVIÇOS </p>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Button> CADASTRAR </Button>
          </Col>
        </Row>
      </Body>
      <Overlay active={props.active ? true : false} />
    </>
  );
};

export default Modal;
