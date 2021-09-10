import Button from "../Button";

import { Body, Overlay } from "./styles";

import Image from "next/image";

const Alert: React.FC<{
  title: string;
  message: string;
  active?: boolean;
  handleClose: Function;
}> = (props) => {
  const { title, message, active } = props;
  return (
    <>
      <Body active={active ? true : false}>
        <div className="closeBox" onClick={() => props.handleClose()}>
          <div className="closeWrapper">
            <Image
              src={require("../../public/images/icons/stcoop-close.svg")}
              layout="fill"
              objectFit="cover"
              alt="STCOOP Cooperativa Logística Logo Branca"
            />
          </div>
        </div>
        <div className="wrapper">
          {title ? <p>{title}</p> : null}
          {message ? <span>{message}</span> : null}
        </div>
        <div className="buttonWrapper">
          <Button onClick={() => props.handleClose()}> FECHAR </Button>
        </div>
      </Body>
      <Overlay active={active ? true : false} />
    </>
  );
};

export default Alert;
