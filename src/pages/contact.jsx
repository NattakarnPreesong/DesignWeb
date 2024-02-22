import React from "react";
import { Card, CardBody, CardHeader, Typography, } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { MapPinIcon, ChatBubbleLeftRightIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";

export function Contact() {
  const [t] = useTranslation("global");

return (
<>
  <header className="relative flex h-60 content-center items-center justify-center ">
    <div className="absolute top-0 h-full w-full  bg-blue-gray-900  bg-cover bg-center" />
    <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
  </header>

  <section className="-mt-24 bg-white px-4 pb-20 pt-6">
    <div className="container mx-auto">
      <div className="mt-14 flex flex-wrap">
        <div className="mx-auto w-full px-4 md:w-6/12">
          <Card className="shadow-lg border rounded-lg">
            <CardHeader className="relative h-10 bg-gradient-to-r from-cyan-500 to-blue-500" floated={false}>
              <Typography variant="h5" color="white" className="mb-3 mt-2 font-bold flex items-center">
                <ChatBubbleLeftRightIcon className="ml-4 w-6 h-6 mr-2 text-white-gray-500" />{t("ContactForm.message")}
              </Typography>
            </CardHeader>
            <CardBody className="p-2 border-t border-gray-200">
              <CardHeader className="relative" floated={false}>
                <form className="ml-2 mr-2 space-y-4">
                  <div className="mb-4">
                    <label htmlFor="company_name" className="block text-gray-600 text-sm font-medium mb-1">{t("Companyname.message")}</label>
                    <input type="text" id="company_name" name="company_name"
                      className="mt-1 p-2 w-full border rounded-md shadow-sm" placeholder={t("Pleaseinputcompanyname.message")} />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-1">{t("name.message")}</label>
                    <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md shadow-sm"
                      placeholder={t("Pleaseinputname.message")} />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-1">{t("E-mail.message")}</label>
                    <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md shadow-sm"
                      placeholder= {t("Pleaseinputemail.message")}/>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone_number" className="block text-gray-600 text-sm font-medium mb-1">{t("Phonenumber.message")}</label>
                    <input type="text" id="phone_number" name="phone_number"
                      className="mt-1 p-2 w-full border rounded-md shadow-sm" placeholder= {t("Pleaseinputphonenumber.message")}/>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-600 text-sm font-medium mb-1">{t("Contentinquiry.message")}</label>
                    <textarea id="message" name="message" rows="4"
                      className="mt-1 p-2 w-full border rounded-md shadow-sm" placeholder={t("Contentinquiry.message")}></textarea>
                  </div>

                </form>
               
              </CardHeader>
              <div className="-mt-14 container mx-auto">
                <div className="mt-14 flex flex-wrap">
                  <div className="mx-auto w-full px-4 md:w-1/2">
                    <button type="submit"
                      className="w-full bg-gradient-to-r from-gray-500 to-gray-700 text-white py-2 px-4 rounded-md mt-4 ">{t("Confirm.message")}</button>
                  </div>
                  <div className="mx-auto w-full px-4 md:w-1/2">
                    <button type="submit"
                      className=" w-full bg-gradient-to-r from-cyan-500 to-indigo-400  text-white py-2 px-4 rounded-md mt-4 ">{t("Reset.message")}</button>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>


        <div className="mx-auto w-full px-4 md:w-6/12">
          <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
            <CardHeader className="relative h-10 bg-gradient-to-r from-green-500 to-lime-500" floated={false}>
              <Typography variant="h5" color="white" className="mb-3 mt-2 font-bold flex items-center">
                <MapPinIcon className="ml-4 w-6 h-6 mr-2 text-white-gray-500" />{t("Inquiry.message")}
              </Typography>
            </CardHeader>
            <CardBody className="p-2">
              <CardHeader className="relative" floated={false}>
                <Typography className="ml-3 text-gray-600 text-sm font-medium">
                  {t("ContactUs1.message")}<br /><br />
                  {t("ContactUs2.message")}
                </Typography> <br />
                <Typography className="ml-2 text-gray-600 text-sm font-medium flex items-center">
                  <p className="ml-1  w-6 h-6 mr-2 text-white bg-gray-600 pointer-events-none rounded-lg ">
                    <PhoneIcon className="w-4 h-4 ml-1 mt-1" />
                  </p>02-664-1674
                </Typography> <br />
              </CardHeader>
            </CardBody>
          </Card>
        </div>
      </div>

    </div>
  </section>
  <div className="bg-white">
    <Footer />
  </div>
</>
);
}

export default Contact;
