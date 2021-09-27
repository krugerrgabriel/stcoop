import React, { useState } from "react";

import Image from "next/image";

import { InputField, SelectField } from "../ContactElements";

import { Body, ContactWrapper, ContactLayer } from "./styles";
import { TitleBox, Title, Subtitle } from "../../styles/";

import { Container, Row, Col } from "react-bootstrap";

import Button from "../Button";
import Alert from "../Alert";

import ContactBackground from "../../public/images/stcoop-contact-background.png";

const ContactForm: React.FC<{ left?: Boolean }> = (props) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [motivo, setMotivo] = useState("null");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [alertActive, setAlertActive] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

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

  const handleSubmit = () => {
    let data = {
      name,
      mail,
      phone,
      motivo,
      message,
    };

    if (
      name.length <= 1 ||
      mail.length <= 1 ||
      phone.length <= 1 ||
      motivo.length <= 1 ||
      message.length <= 1
    ) {
      setAlertTitle("Todos os campos precisam sem preenchidos!");
      setAlertMessage("Preencha todos os campos antes de realizar o envio.");
      setAlertActive(true);
    } else {
      setButtonDisabled(true);

      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        setButtonDisabled(false);
        if (res.status === 200) {
          setSubmitted(true);
          setName("");
          setMail("");
          setPhone("");
          setMotivo("null");
          setMessage("");
          setAlertTitle("Contato enviado com êxito :D");
          setAlertMessage(
            "Em breve um de nossos consultores entrará em contato com você!"
          );
          setAlertActive(true);
        } else {
          setAlertTitle("Erro inexperado :(");
          setAlertMessage(
            "Desculpe pela inconveniência! Tente novamente mais tarde."
          );
          setAlertActive(true);
        }
      });
    }
  };

  return (
    <Body id="contato">
      <Container>
        <Row>
          {props.left ? <Col lg={6} md={6} /> : null}
          <Col lg={6}>
            <TitleBox>
              <Title> CONTATO </Title>
              <Subtitle> Fale conosco </Subtitle>
            </TitleBox>
          </Col>
        </Row>
        <Row>
          {props.left ? <Col lg={6} md={6} /> : null}
          <Col lg={6} md={6}>
            <Row>
              <Col lg={6}>
                <InputField
                  type="text"
                  id="user"
                  label="Nome completo"
                  value={name}
                  onType={(data: string) => setName(data)}
                  max={255}
                />
              </Col>
              <Col lg={6}>
                <InputField
                  type="mail"
                  id="mail"
                  label="Email"
                  value={mail}
                  onType={(data: string) => setMail(data)}
                  max={255}
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
                  max={255}
                  mask="+4\9 99 999 99"
                />
              </Col>
              <Col lg={6}>
                <SelectField
                  type="text"
                  id="motivo"
                  label="Motivo do contato"
                  value={motivo}
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
                  max={1000}
                />
              </Col>
            </Row>
            <Row>
              <Col lg={8} />
              <Col lg={4}>
                <Button
                  onClick={() => handleSubmit()}
                  disabled={buttonDisabled}
                >
                  ENVIAR
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <ContactWrapper left={props.left}>
        <ContactLayer>
          <Image
            src={ContactBackground}
            layout="fill"
            objectFit="cover"
            className={props.left ? "rotated" : ""}
            alt="STCOOP Cooperativa Logística Contato"
          />
        </ContactLayer>
      </ContactWrapper>
      <Alert
        title={alertTitle}
        message={alertMessage}
        active={alertActive}
        handleClose={() => setAlertActive(false)}
      />
    </Body>
  );
};

export default ContactForm;
