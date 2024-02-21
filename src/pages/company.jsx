import React from "react";
import { Card, CardBody, CardHeader, Typography, } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { MapPinIcon, BuildingOffice2Icon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";

export function Company() {
  
  const [t] = useTranslation("global");

return (
<>
  <header className="relative flex h-80 content-center items-center justify-center ">
    <div className="absolute top-0 h-full w-full bg-[url('/img/company.jpg')] bg-blue-gray-900  bg-cover bg-center" />
    <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
    <div className="max-w-8xl container relative mx-auto">
      <div className="flex flex-wrap items-center">
        <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
          <Typography variant="h3" color="white" className="font-black">
          {t("COMPANYPROFILE.message")}
          </Typography>
        </div>
      </div>
    </div>
  </header>

  <section className="-mt-24 bg-white px-4 pb-20 pt-4">
    
    <div className="container mx-auto">
      <div className="mt-14 flex flex-wrap">
        <div className="mx-auto w-full px-4 md:w-7/12">
          <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
            <CardHeader className="relative h-10 bg-gradient-to-r from-cyan-500 to-blue-500" floated={false}>
              <Typography variant="h5" color="white" className="mb-3 mt-2 font-bold flex items-center">
                <BuildingOffice2Icon className="ml-4 w-6 h-6 mr-2 text-white-gray-500" />{t("AboutUs.message")}
              </Typography>
            </CardHeader>
            <CardBody className="p-2">
              <CardHeader className="relative" floated={false}>
                <table className="table-auto border-collapse ">
                  <tbody>
                    <tr>
                      <td className="border p-2">{t("Companyname.message")}</td>
                      <td className="border p-2">Japan System Co.,Ltd <br /> Japan System (Thailand) Co.,Ltd</td>
                    </tr>
                    <tr>
                      <td className="border p-2">{t("Companyaddress.message")}</td>
                      <td className="border p-2">28th Fl, 253 Asoke Building, Sukhumvit 21 Rd.(Asoke), <br /> Klogntoey nua, Wattana, Bangkok 10110</td>
                    </tr>
                    <tr>
                      <td className="border p-2">{t("Tel.message")}</td>
                      <td className="border p-2">(02)664-1674</td>
                    </tr>
                    <tr>
                      <td className="border p-2">{t("E-mail.message")}</td>
                      <td className="border p-2">info@jpsys-th.com</td>
                    </tr>
                    <tr>
                      <td className="border p-2">{t("Establishment.message")}</td>
                      <td className="border p-2">2015/12</td>
                    </tr>
                    <tr>
                      <td className="border p-2">{t("Capital.message")}</td>
                      <td className="border p-2">2,000,000 THB</td>
                    </tr>
                    <tr>
                      <td className="border p-2">{t("Representative.message")}</td>
                      <td className="border p-2">Tsubasa Hoshino</td>
                    </tr>
                    <tr>
                      <td className="border p-2">{t("OurService.message")}</td>
                      <td className="border p-2">
                        {t("OurService1.message")}<br />
                        {t("OurService2.message")}<br />
                        {t("OurService3.message")}<br />
                        {t("OurService4.message")}<br />
                        {t("OurService5.message")}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CardHeader>
            </CardBody>
          </Card>
        </div>

        <div className="mx-auto w-full px-4 md:w-5/12">
          <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
            <CardHeader className="relative h-10 bg-gradient-to-r from-green-500 to-lime-500" floated={false}>
              <Typography variant="h5" color="white" className="mb-3 mt-2 font-bold flex items-center">
                <MapPinIcon className="ml-4 w-6 h-6 mr-2 text-white-gray-500" />{t("Location.message")}
              </Typography>
            </CardHeader>
            <CardBody className="p-2">
              <CardBody className="p-2">
                <CardHeader className="relative" floated={false}>
                  <div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3875.523483555466!2d100.56266!3d13.747275!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29eefce6316bf%3A0xd901ed3b43c03941!2sJapan%20System%20(Thailand)%20Co.%2C%20Ltd.!5e0!3m2!1sth!2sth!4v1708054835851!5m2!1sth!2sth"
                      width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </CardHeader>
              </CardBody>
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

export default Company;