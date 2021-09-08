import Link from "next/link";
import Image from "next/image";

import { Body, Wrapper, ArrowWrapper, ContainerEdit } from "./styles";

import ArrowRightImage from "../../public/images/icons/stcoop-right-arrow-black.svg";

interface IBreadcrump {
  tree: [
    {
      name: string;
      url: string;
    }
  ];
}

const Breadcrumb: React.FC<IBreadcrump> = (props) => {
  const { tree } = props;
  return (
    <Body>
      <ContainerEdit>
        <Wrapper>
          {tree.map((item, index) => {
            return (
              <>
                {item.url != null ? (
                  <Link href={item.url}>
                    <a>{item.name}</a>
                  </Link>
                ) : (
                  <span>{item.name}</span>
                )}
                {tree.length - 1 != index ? (
                  <ArrowWrapper>
                    <Image
                      src={ArrowRightImage}
                      layout="fill"
                      objectFit="cover"
                      alt="STCOOP Cooperativa Logística Facebook Icon"
                    />
                  </ArrowWrapper>
                ) : null}
              </>
            );
          })}
        </Wrapper>
      </ContainerEdit>
    </Body>
  );
};

export default Breadcrumb;
