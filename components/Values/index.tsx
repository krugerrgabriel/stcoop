import React from "react";

import Image from "next/image";

import { Container } from "react-bootstrap";

import { Body, ValueInfo, Value } from "./styles";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import FeIcon from "../../public/images/icons/stcoop-vantagem-fe.svg";
import AprendizadoIcon from "../../public/images/icons/stcoop-vantagem-aprendizado.svg";
import CompromissoIcon from "../../public/images/icons/stcoop-vantagem-compromisso.svg";
import EticaIcon from "../../public/images/icons/stcoop-vantagem-etica.svg";
import ExcelenciaIcon from "../../public/images/icons/stcoop-vantagem-excelencia.svg";
import SustentabilidadeIcon from "../../public/images/icons/stcoop-vantagem-sustentabilidade.svg";
import ValorizacaoIcon from "../../public/images/icons/stcoop-vantagem-valorizacao.svg";

const Values: React.FC = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      paritialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
  };
  return (
    <Body>
      <Container>
        <Carousel
          ssr
          itemClass="image-item"
          responsive={responsive}
          infinite={true}
          swipeable={true}
          draggable={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        >
          <Value>
            <Image
              src={FeIcon}
              alt="STCOOP Cooperativa Logística Fé Icon"
              width={59}
              height={82}
            />
            <span> Fé em Deus </span>
          </Value>
          <Value>
            <Image
              src={AprendizadoIcon}
              alt="STCOOP Cooperativa Logística Aprendizado contínuo Icon"
              width={118}
              height={82}
            />
            <span> Aprendizado contínuo </span>
          </Value>
          <Value>
            <Image
              src={ExcelenciaIcon}
              alt="STCOOP Cooperativa Logística Excelência na prestação de serviços Icon"
              width={90}
              height={82}
            />
            <span> Excelência na prestação de serviços </span>
          </Value>
          <Value>
            <Image
              src={SustentabilidadeIcon}
              alt="STCOOP Cooperativa Logística Sustentabilidade econômica e social Icon"
              width={109}
              height={82}
            />
            <span> Sustentabilidade econômica e social </span>
          </Value>
          <Value>
            <Image
              src={EticaIcon}
              alt="STCOOP Cooperativa Logística Ética e integridade em suas relações Icon"
              width={113}
              height={82}
            />
            <span> Ética e integridade em suas relações </span>
          </Value>
          <Value>
            <Image
              src={ValorizacaoIcon}
              alt="STCOOP Cooperativa Logística Valorização das pessoas e da família Icon"
              width={82}
              height={82}
            />
            <span> Valorização das pessoas e da família </span>
          </Value>
          <Value>
            <Image
              src={CompromissoIcon}
              alt="STCOOP Cooperativa Logística Compromisso com resultados diretos Icon"
              width={66}
              height={82}
            />
            <span> Compromisso com resultados diretos </span>
          </Value>
        </Carousel>
      </Container>
    </Body>
  );
};

export default Values;
