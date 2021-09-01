import React from "react";

import Image from "next/image";

import { Body, GrayLayer, IconLayer, Etc } from "./styles";

export const InputField: React.FC<{
  type: string;
  id: string;
  label: string;
  value: string;
  onType: Function;
}> = (props) => {
  return (
    <Body>
      <GrayLayer>
        {/* @ts-ignore */}
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
        <input
          type={props.type}
          placeholder={props.label}
          onChange={(event) => props.onType(event.target.value)}
        />
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
        {/* @ts-ignore */}
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
        <select onChange={(event) => props.onSelect(event.target.value)}>
          <option value="null" disabled selected>
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
