import React, { useState } from "react";

import Image from "next/image";

import { InputField, SelectField } from "../ContactElements";

import { Body, ContactWrapper } from "./styles";
import { TitleBox, Title, Subtitle } from "../../styles/";

import { Container, Row, Col } from "react-bootstrap";

import Button from "../Button";

import ContactBackground from "../../public/images/stcoop-contact-background.png";

const ContactForm: React.FC<{ left?: Boolean }> = (props) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [motivo, setMotivo] = useState("");
  const [message, setMessage] = useState("");

  const selectOptions = [
    {
      name: "Opção 01",
      value: "opcao01",
    },
    {
      name: "Opção 02",
      value: "opcao02",
    },
    {
      name: "Opção 03",
      value: "opcao03",
    },
  ];

  return (
    <Body id="contato">
      <Container>
        <Row>
          {props.left ? <Col lg={6} /> : null}
          <Col lg={6}>
            <TitleBox>
              <Title> CONTATO </Title>
              <Subtitle> Fale conosco </Subtitle>
            </TitleBox>
          </Col>
        </Row>
        <Row>
          {props.left ? <Col lg={6} /> : null}
          <Col lg={6}>
            <Row>
              <Col lg={6}>
                <InputField
                  type="text"
                  id="user"
                  label="Nome completo"
                  value={name}
                  onType={(data: string) => setName(data)}
                />
              </Col>
              <Col lg={6}>
                <InputField
                  type="mail"
                  id="mail"
                  label="Email"
                  value={mail}
                  onType={(data: string) => setMail(data)}
                />
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <InputField
                  type="text"
                  id="phone"
                  label="Telefone"
                  value={phone}
                  onType={(data: string) => setPhone(data)}
                />
              </Col>
              <Col lg={6}>
                <SelectField
                  type="text"
                  id="motivo"
                  label="Motivo do contato"
                  value={phone}
                  onSelect={(data: string) => setMotivo(data)} /* @ts-ignore */
                  options={selectOptions}
                />
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <InputField
                  type="text"
                  id="message"
                  label="Mensagem"
                  value={message}
                  onType={(data: string) => setMessage(data)}
                />
              </Col>
            </Row>
            <Row>
              <Col lg={8} />
              <Col lg={4}>
                <Button> ENVIAR </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <ContactWrapper left={props.left}>
        <Image
          src={ContactBackground}
          width={857}
          height={394}
          className={props.left ? "rotated" : ""}
          alt="STCOOP Cooperativa Logística Contato"
        />
      </ContactWrapper>
    </Body>
  );
};

export default ContactForm;
