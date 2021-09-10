import { useState } from "react";
import type { NextPage } from "next";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { InputField } from "../../components/ContactElements";
import Button from "../../components/Button";

import {
  Body,
  Floating,
  LogoLayer,
  LogoWrapper,
  FormLayer,
  SocialBox,
  IconWrapper,
  CloseBox,
  CloseWrapper,
} from "../../styles/pages/admin/login";

import { Container, Row, Col } from "react-bootstrap";

import STCoopLogo from "../../public/images/stcoop-white-vertical-logo.svg";
import UserIcon from "../../public/images/icons/stcoop-user-icon.svg";
import FacebookIcon from "../../public/images/icons/stcoop-facebook-gray.svg";
import InstagramIcon from "../../public/images/icons/stcoop-instagram-gray.svg";
import YoutubeIcon from "../../public/images/icons/stcoop-youtube-gray.svg";
import CloseIcon from "../../public/images/icons/stcoop-close.svg";

const AdminLogin: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = () => {
    router.push("/admin");
  };
  return (
    <Body>
      <Container>
        <Floating>
          <LogoLayer>
            <LogoWrapper>
              <Image
                src={STCoopLogo}
                layout="fill"
                objectFit="cover"
                alt="STCOOP Cooperativa Logística Logo Branca"
              />
            </LogoWrapper>
          </LogoLayer>

          <FormLayer>
            <Row className="justify-content-center">
              <Col lg={8}>
                <div className="title">
                  <div className="iconWrapper">
                    <Image
                      src={UserIcon}
                      layout="fill"
                      objectFit="cover"
                      alt="STCOOP Cooperativa Logística Logo Branca"
                    />
                  </div>
                  <p> ÁREA ADMINISTRATIVA </p>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg={8}>
                <InputField
                  type="email"
                  id="mail"
                  label="E-mail"
                  value={email}
                  onType={(data: string) => setEmail(data)}
                  max={255}
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg={8}>
                <InputField
                  type="password"
                  id="password"
                  label="Senha"
                  value={password}
                  onType={(data: string) => setPassword(data)}
                  max={255}
                />
              </Col>
            </Row>
            <Row className="margin-top-18px">
              <Col lg={2} />
              <Col lg={4}>
                <Button onClick={() => handleLogin()}> ENTRAR </Button>
              </Col>
            </Row>
            <SocialBox>
              <Link href="#!">
                <a>
                  <IconWrapper type="facebook">
                    <Image
                      src={FacebookIcon}
                      layout="fill"
                      objectFit="cover"
                      alt="STCOOP Cooperativa Logística Logo Branca"
                    />
                  </IconWrapper>
                </a>
              </Link>
              <IconWrapper type="instagram">
                <Image
                  src={InstagramIcon}
                  layout="fill"
                  objectFit="cover"
                  alt="STCOOP Cooperativa Logística Logo Branca"
                />
              </IconWrapper>
              <IconWrapper type="youtube">
                <Image
                  src={YoutubeIcon}
                  layout="fill"
                  objectFit="cover"
                  alt="STCOOP Cooperativa Logística Logo Branca"
                />
              </IconWrapper>
            </SocialBox>
            <CloseBox>
              <Link href="/">
                <a>
                  <CloseWrapper>
                    <Image
                      src={CloseIcon}
                      layout="fill"
                      objectFit="cover"
                      alt="STCOOP Cooperativa Logística Logo Branca"
                    />
                  </CloseWrapper>
                </a>
              </Link>
            </CloseBox>
          </FormLayer>
        </Floating>
      </Container>
    </Body>
  );
};

export default AdminLogin;
