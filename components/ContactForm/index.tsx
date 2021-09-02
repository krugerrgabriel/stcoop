import React, { useState } from "react";

import Image from "next/image";

import { InputField, SelectField } from "../ContactElements";

import { Body, ContactWrapper } from "./styles";
import { TitleBox, Title, Subtitle } from "../../styles/";

import { Container, Row, Col } from "react-bootstrap";

import Button from "../Button";

import ContactBackground from "../../public/images/stcoop-contact-background.png";

const ContactForm: React.FC = () => {
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
        <TitleBox>
          <Title> CONTATO </Title>
          <Subtitle> Fale conosco </Subtitle>
        </TitleBox>
        <Row>
          <Col lg={3}>
            <InputField
              type="text"
              id="user"
              label="Nome completo"
              value={name}
              onType={(data: string) => setName(data)}
            />
          </Col>
          <Col lg={3}>
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
          <Col lg={3}>
            <InputField
              type="text"
              id="phone"
              label="Telefone"
              value={phone}
              onType={(data: string) => setPhone(data)}
            />
          </Col>
          <Col lg={3}>
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
          <Col lg={6}>
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
          <Col lg={4} />
          <Col lg={2}>
            <Button> ENVIAR </Button>
          </Col>
        </Row>
      </Container>
      <ContactWrapper>
        <Image
          src={ContactBackground}
          width={857}
          height={394}
          alt="STCOOP Cooperativa Logística Contato"
        />
      </ContactWrapper>
    </Body>
  );
};

export default ContactForm;
