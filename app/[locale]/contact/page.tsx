import {
  ContactForm,
  ContactHero,
  ContactInfo,
  Map,
} from "@components/ContactPage";

import { useTranslations } from "next-intl";

import React from "react";

const page = () => {
  const t = useTranslations("contactHome");
  const contactData = {
    title: t("title"),
    subTitle: t("subTitle"),
    email: t("email"),
    phone: t("phone"),
    address: t("address"),
    addressValue: t("addressValue"),
    firstName: t("firstName"),
    lastName: t("lastName"),
    emailAddress: t("emailAddress"),
    phoneNumber: t("phoneNumber"),
    message: t("message"),
    placeholderFirstName: t("placeholderFirstName"),
    placeholderLastName: t("placeholderLastName"),
    placeholderEmail: t("placeholderEmail"),
    placeholderPhone: t("placeholderPhone"),
    placeholderMessage: t("placeholderMessage"),
    buttonSend: t("buttonSend"),
  };
  return (
    <div>
      <ContactHero />
      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <ContactInfo />
        </div>
        <div className="container relative">
          <ContactForm contactData={contactData} />
        </div>
      </section>

      <Map />
    </div>
  );
};

export default page;
