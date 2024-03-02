import { ContactInfoType } from "@types";
import { extractContactInfo } from "@utils";
import { useTranslations } from "next-intl";
import React from "react";

const ContactInfo = () => {
  const t = useTranslations("contactInfo");
  const contacts: ContactInfoType[] = extractContactInfo(t);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
      {contacts.map((contact) => (
        <div key={contact.id} className="text-center px-6 mt-6">
          <div className="size-20 bg-indigo-600/5 w-14 h-14 rounded-xl   flex align-middle justify-center items-center shadow-sm   mx-auto">
            <contact.Icon className="h-6 w-6" />
          </div>

          <div className="content mt-7">
            <h5 className="title h5 text-xl font-medium">{contact.label}</h5>
            <div className="max-w-sm text-center mx-auto">
              <p className="text-slate-400 mt-3  ">{contact.title}</p>
            </div>

            <div className="mt-5">
              <a
                href={contact.link}
                className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[&#39;&#39;] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
              >
                {contact.value}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
