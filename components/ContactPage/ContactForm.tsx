"use client";

import { ContactType } from "@types";
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
const ContactForm = ({ contactData }: Props) => {
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

        <div className="mt-16">
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

export default ContactForm;
