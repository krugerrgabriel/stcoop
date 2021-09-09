import { Body, LogoWrapper, UserWrapper, LinksBox } from "./styles";

import Image from "next/image";
import Link from "next/link";

import { Container, Row, Col } from "react-bootstrap";

import STCoopLogo from "../../../public/images/stcoop-logo01.svg";
import UserImage from "../../../public/images/stcoop-user.jpg";

const Navbar: React.FC = () => {
  return (
    <Body>
      <Container>
        <Row>
          <Col lg={3}>
            <Link href="/">
              <a>
                <LogoWrapper>
                  <Image
                    src={STCoopLogo}
                    layout="fill"
                    objectFit="cover"
                    alt="STCOOP Cooperativa Logística Logo Branca"
                  />
                </LogoWrapper>
              </a>
            </Link>
          </Col>
          <Col lg={1} />
          <Col lg={6}>
            <LinksBox>
              <p>PRODUTOS OU SERVIÇOS</p>
              <p>VANTAGENS</p>
              <p>PARCEIROS</p>
              <p>BASES DE APOIO</p>
            </LinksBox>
          </Col>
          <Col lg={1} />
          <Col lg={1}>
            <UserWrapper>
              <Image
                src={UserImage}
                layout="fill"
                objectFit="cover"
                alt="STCOOP Cooperativa Logística Logo Branca"
              />
            </UserWrapper>
          </Col>
        </Row>
      </Container>
    </Body>
  );
};

export default Navbar;
