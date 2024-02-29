import React from "react";
import Contact from "./Contact";
import { useTranslations } from "next-intl";

const ContactWrapper = () => {
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
    <div className="container mx-auto px-10 sm:px-14">
      <Contact contactData={contactData} />
    </div>
  );
};

export default ContactWrapper;
