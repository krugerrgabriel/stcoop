import React from "react";

import Image from "next/image";

import { Container, Row, Col } from "react-bootstrap";

import { Body, Company, TriggerButton } from "./styles";

import UNUSLogo from "../../public/images/stcoop-grupo-unus-logo.svg";
import TransdeskLogo from "../../public/images/stcoop-transdesk-logo.svg";
import TDKLogo from "../../public/images/stcoop-tdkcorretora-logo.svg";
import BRLogo from "../../public/images/stcoop-brcentertruck-logo.svg";
import CarouselLeftArrow from "/public/images/icons/stcoop-left-arrow.svg";
import CarouselRightArrow from "/public/images/icons/stcoop-right-arrow.svg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Partners: React.FC = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60,
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
    <Container>
      <Body>
        <Carousel
          ssr
          partialVisbile
          itemClass="image-item"
          responsive={responsive}
          infinite={true}
        >
          <Company>
            <Image
              src={UNUSLogo}
              alt="STCOOP Cooperativa Logística Grupo UNUS Logo"
              width={189}
              height={52}
            />
          </Company>
          <Company>
            <Image
              src={TransdeskLogo}
              alt="STCOOP Cooperativa Logística Transdesk Logo"
              width={189}
              height={36}
            />
          </Company>
          <Company>
            <Image
              src={TDKLogo}
              alt="STCOOP Cooperativa Logística TDK Corretora Logo"
              width={189}
              height={59}
            />
          </Company>
          <Company>
            <Image
              src={BRLogo}
              alt="STCOOP Cooperativa Logística BR Center Truck Logo"
              width={189}
              height={67}
            />
          </Company>
        </Carousel>
      </Body>
    </Container>
  );
};

export default Partners;
