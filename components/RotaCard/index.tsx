import { Body } from "./styles";

import Image from "next/image";
import Link from "next/link";

import { IRotaCard } from "./interfaces";

const RotaCard: React.FC<IRotaCard> = (props) => {
  const { item } = props;
  return (
    <Link href={`/rota-da-informacao/${item._id}`}>
      <a>
        <Body large={props.large ? true : false}>
          <Image // @ts-ignore
            src={item.image}
            layout="fill"
            objectFit="cover"
            alt="STCOOP Cooperativa Logística Facebook Icon"
          />
          <div className="info">
            <span> {item.tag} </span>
            <p> {item.title} </p>
          </div>
          <strong> {item.createdAt} </strong>
          <div className="overlay"></div>
        </Body>
      </a>
    </Link>
  );
};

export default RotaCard;
