import InputMask from "react-input-mask";

import Image from "next/image";

import { Body, GrayLayer, IconLayer, Etc } from "./styles";

export const InputField: React.FC<{
  type: string;
  id: string;
  label: string;
  value: string;
  max: number;
  onType: Function;
  mask?: string;
}> = (props) => {
  return (
    <Body>
      <GrayLayer>
        <IconLayer className={props.id}>
          <Image
            src={require(`../../public/images/icons/stcoop-${props.id}.svg`)}
            layout="fill"
            objectFit="cover"
            alt={`STCOOP Cooperativa Logistica Ícone ${props.id}`}
          />
        </IconLayer>
      </GrayLayer>
      <Etc>
        {props.id == "phone" ? (
          <InputMask
            type={props.type}
            placeholder={props.label}
            value={props.value}
            onChange={(event) => {
              if (event.target.value.length >= props.max) {
                props.onType(event.target.value.slice(0, -1));
              } else {
                props.onType(event.target.value);
              }
            }}
            mask="99 99999-9999"
          />
        ) : (
          <input
            type={props.type}
            placeholder={props.label}
            value={props.value}
            onChange={(event) => {
              if (event.target.value.length >= props.max) {
                props.onType(event.target.value.slice(0, -1));
              } else {
                props.onType(event.target.value);
              }
            }}
          />
        )}
      </Etc>
    </Body>
  );
};

export const SelectField: React.FC<{
  type: string;
  id: string;
  label: string;
  options?: [
    {
      name: string;
      value: string;
    }
  ];
  value: string;
  onSelect: Function;
}> = (props) => {
  return (
    <Body>
      <GrayLayer>
        <IconLayer className={props.id}>
          <Image
            src={require(`../../public/images/icons/stcoop-motivo.svg`)}
            layout="fill"
            objectFit="cover"
            alt={`STCOOP Cooperativa Logistica Ícone ${props.id}`}
          />
        </IconLayer>
      </GrayLayer>
      <Etc>
        <select
          defaultValue="null"
          onChange={(event) => props.onSelect(event.target.value)}
          value={props.value}
        >
          <option value="null" disabled>
            {props.label}
          </option>
          {props.options?.map((item, index) => {
            return (
              <option key={index} value={item.value}>
                {item.name}
              </option>
            );
          })}
        </select>
      </Etc>
    </Body>
  );
};
