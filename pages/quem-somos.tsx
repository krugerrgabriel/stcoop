import type { NextPage } from "next";

import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";

import { FullBanner } from "../styles/";

import { Container } from "react-bootstrap";

import QuemSomosBanner from "/public/images/stcoop-quem-somos.png";

// import { Container } from './styles';

const quemSomos: NextPage = () => {
  return (
    <>
      <Head>
        <title> STCOOP | Quem Somos Nós</title>
      </Head>
      <Navbar />
      <FullBanner>
        <Image
          src={QuemSomosBanner}
          layout="fill"
          objectFit="cover"
          alt="STCOOP Cooperativa Logística Facebook Icon"
        />
        <Container>
          <h1> QUEM SOMOS NÓS </h1>
        </Container>
      </FullBanner>
    </>
  );
};

export default quemSomos;
