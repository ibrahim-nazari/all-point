"use client";

import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { ContactType } from "@types";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { object, string, mixed } from "yup";
let contactSchema = object({
  firstName: string().required(),
  lastName: string().default("").nullable(),
  email: string().email(),
  phone: mixed<string>().required().concat(mixed<number>().required()),
  message: string().required().min(5).max(500),
});

interface Props {
  contactData: ContactType;
}
const Contact = ({ contactData }: Props) => {
  const contactinfo = [
    {
      label: contactData.email,
      Icon: EnvelopeIcon,
      value: "ibrahimnazaryweb@gmail.com",
      id: 1,
      link: "mailto:ibrahimnazaryweb@gmail.com",
    },
    {
      label: contactData.phone,
      Icon: PhoneIcon,
      value: "(+1) 434 342 232",
      id: 2,
      link: "tel:+1434 342 232",
    },
    {
      label: contactData.address,
      Icon: MapPinIcon,
      value: contactData.addressValue,
      id: 2,
      link: "google map link",
    },
  ];
  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);
  const [errors, setErrors] = useState<string[]>([]);

  const handleFocus = () => {
    setErrors([]);
  };
  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    //sent to backend from here
    try {
      const data = {
        firstName: firstName.current?.value,
        lastName: lastName.current?.value,
        email: email.current?.value,
        phone: phone.current?.value,
        message: message.current?.value,
      };
      const formdata = await contactSchema.validate(data);
    } catch (error: any) {
      setErrors(error.errors);
    }
  };
  return (
    <section id="contact" className="py-20 ">
      <div className="container">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl font-semibold mb-3">{contactData.title}</h2>
          <p className="text-base font-normal text-gray-500">
            {contactData.subTitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-center mt-16">
          <div>
            <div className="flex items-center gap-6  ">
              <img src="/allpoint-logo.png" className="h-20" alt="" />
            </div>
            {contactinfo.map((info) => (
              <>
                <div key={info.id} className="flex items-center gap-5 mt-10">
                  <div className="h-10 w-10 rounded-md bg-blue-100 flex items-center justify-center">
                    <info.Icon className="h-5 w-5" />
                  </div>
                  <h5 className="text-xl font-medium">{info.label}</h5>
                </div>

                <p className="flex items-center gap-1 text-gray-500 mt-2">
                  <Link href={info.link} className="text-base font-normal">
                    {info.value}
                  </Link>
                </p>
              </>
            ))}
          </div>
          {/* <!-- end grid col --> */}

          <div className="lg:col-span-2 lg:ms-24">
            <div className="p-12 rounded-md shadow-lg bg-white">
              <form>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="formFirstName"
                      className="block text-sm/normal font-semibold text-gray-500 mb-2"
                    >
                      {contactData.firstName}
                    </label>
                    <input
                      type="text"
                      className="block w-full text-sm rounded-md py-2 px-3 border outline-none border-gray-200 focus:border-gray-300 focus:ring-transparent"
                      id="formFirstName"
                      placeholder={contactData.placeholderFirstName}
                      required
                      ref={firstName}
                      onFocus={handleFocus}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="formLastName"
                      className="block text-sm/normal font-semibold text-gray-500 mb-2"
                    >
                      {contactData.lastName}
                    </label>
                    <input
                      type="text"
                      className="block w-full text-sm rounded-md py-2 px-3 border outline-none border-gray-200 focus:border-gray-300 focus:ring-transparent"
                      id="formLastName"
                      placeholder={contactData.placeholderLastName}
                      required
                      ref={lastName}
                      onFocus={handleFocus}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="formEmail"
                      className="block text-sm/normal font-semibold text-gray-500 mb-2"
                    >
                      {contactData.emailAddress}
                    </label>
                    <input
                      type="email"
                      className="block w-full text-sm rounded-md py-2 px-3 border outline-none border-gray-200 focus:border-gray-300 focus:ring-transparent"
                      id="formEmail"
                      placeholder={contactData.placeholderEmail}
                      required
                      ref={email}
                      onFocus={handleFocus}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="formPhone"
                      className="block text-sm/normal font-semibold text-gray-500 mb-2"
                    >
                      {contactData.phoneNumber}
                    </label>
                    <input
                      type="text"
                      className="block w-full text-sm rounded-md py-2 px-3 border outline-none border-gray-200 focus:border-gray-300 focus:ring-transparent"
                      id="formPhone"
                      placeholder={contactData.placeholderPhone}
                      required
                      ref={phone}
                      onFocus={handleFocus}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <div className="mb-4">
                      <label
                        htmlFor="formMessages"
                        className="block text-sm/normal font-semibold text-gray-500 mb-2"
                      >
                        {contactData.message}
                      </label>
                      <textarea
                        className="block w-full text-sm rounded-md py-2 px-3 border outline-none border-gray-200 focus:border-gray-300 focus:ring-transparent"
                        id="formMessages"
                        rows={4}
                        placeholder={contactData.placeholderMessage}
                        required
                        ref={message}
                        onFocus={handleFocus}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    className="py-2 px-6 rounded-md text-white bg-gradient-to-r from-blue-600 to-blue-300"
                    onClick={handleSubmit}
                  >
                    {contactData.buttonSend}
                  </button>
                  <div className="text-red-500 font-semibold">
                    {errors[0]
                      ? errors[0].charAt(0).toUpperCase() + errors[0].slice(1)
                      : ""}
                  </div>
                </div>
              </form>
              {/* <!-- From End --> */}
            </div>
          </div>
          {/* <!-- end grid col --> */}
        </div>
        {/* <!-- Grid End --> */}
      </div>
      {/* <!-- Container End --> */}
    </section>
  );
};

export default Contact;
