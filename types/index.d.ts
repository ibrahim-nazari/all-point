import { AppPathnames } from "@config";
import React, { MouseEventHandler } from "react";

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface CarCardProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMPG: number;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}
export interface NavigationsType {
  title: string;
  link: AppPathnames;
  id: string;
  submenu: { title: string; link: string; id: string }[];
}

export interface ProductType {
  title: { en: string; es: string };
  description:{ en: [{title:string,description:string}]; es: [{title:string,description:string}] } ;
  image: string;
  slug: string;
  id: number;
}
export interface ServiceType {
  title: { en: string; es: string };
  description: { en: string[]; es: string[] };
  image: string;
  slug: string;
  id: number;
}
export interface HeroContentType {
  title: string;
  description: string;
  buttonViewProducts: string;
  buttonRequestQuote: string;
}
export interface AboutContentType {
  title: string;
  description: string;
  buttonContactText: string;
}
export interface ContactType {
  title: string;
  subTitle: string;
  email: string;
  phone: string;
  address: string;
  addressValue: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  message: string;
  placeholderFirstName: string;
  placeholderLastName: string;
  placeholderEmail: string;
  placeholderPhone: string;
  placeholderMessage: string;
  buttonSend: string;
}
export interface ContactInfoType {
  title: string;
  label: string;
  linkText?: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | any;
  value: string;
  link: string;
  id: number;
}
export interface WhoWeAreDataType {
  experience: string;
  title: string;
  description: string;
  contactButtonText: string;
}

export interface defaultProps {
  params: { locale: string,slug:string};
}
