import { Facebook, Instagram } from "@components/SocialMediaIcon";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export const navigation = [];
export const socialMedia = [
  { title: "Facebook", Icon: Facebook, id: 1 },
  { title: "Facebook", Icon: Instagram, id: 2 },
];

export const contactinfo = [
  {
    label: "Email",
    Icon: EnvelopeIcon,
    value: "ibrahimnazaryweb@gmail.com",
    id: 1,
    link: "mailto:ibrahimnazaryweb@gmail.com",
  },
  {
    label: "Phone",
    Icon: PhoneIcon,
    value: "(+1) 434 342 232",
    id: 2,
    link: "tel:+1434 342 232",
  },
  {
    label: "Address",
    Icon: MapPinIcon,
    value: "554 Fard Street, Fard Avenue, CA 9437 ",
    id: 2,
    link: "google map link",
  },
];
