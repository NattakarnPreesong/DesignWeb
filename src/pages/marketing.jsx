import React from "react";
import { CardBody, Typography, } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { ComputerDesktopIcon } from "@heroicons/react/24/solid";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineMessage, AiOutlineTwitter   } from "react-icons/ai";
import { useTranslation } from "react-i18next";

export function Marketing() {
  const [t] = useTranslation("global");

return (
<>
  <header className="relative flex h-64 content-center items-center justify-center ">
    <div className="absolute top-0 h-full w-full bg-[url('/img/Marketing.jpg')] bg-blue-gray-900  bg-cover bg-center" />
    <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
    <div className="max-w-8xl container relative mx-auto">
      <div className="flex flex-wrap items-center">
        <div className="ml-auto mr-auto w-full px-4 text-center lg:w-9/12">
          <Typography variant="h2" color="white" className="mt-20 mb-6 font-black">
            {t("Website&Onlinemarketing.message")}
          </Typography>
        </div>
      </div>
    </div>
  </header>

  <section className="px-4 pb-20 pt-4">
  <div className="container mx-auto">
    <div className="flex flex-wrap">

      <div className="mx-auto w-full px-4 md:w-5/12">
        <div className="relative h-10" floated={false}>
          <Typography variant="h5" color="black" className="ml-4 mb-3 mt-2 font-bold flex items-center ">
            {t("WEBSITE.message")}
          </Typography>
        </div>
        <CardBody className="px-8 text-center">
          <div className="relative inline-block mt-8">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gray-900 rounded-full w-20 h-20 flex items-center justify-center">
              <ComputerDesktopIcon className="w-10 h-10 text-white" />
            </div>
            <Typography variant="h5" className="mb-2 mt-20 " color="blue-gray"> Website </Typography>
          </div>
        </CardBody>
      </div>

<div className="md:hidden mx-auto w-full bg-black h-0.5 my-10 "></div>

<div className="hidden md:block mx-auto w-0.5 bg-black my-10 "></div>

      <div className="mx-auto w-full px-4 md:w-5/12">
        <div className="relative h-10" floated={false}>
          <Typography variant="h5" color="black" className="ml-4 mb-3 mt-2 font-bold flex items-center">
            {t("ONLINEMARKETING.message")}
          </Typography>
        </div>
        <div className="p-2">
          <div className="relative" floated={false}>
            <div className="container mx-auto">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                <CardBody className="px-8 text-center">
                  <div className="relative inline-block mt-8">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gray-900 rounded-full w-20 h-20 flex items-center justify-center">
                      <AiOutlineFacebook  className="w-10 h-10 text-white" />
                    </div>
                    <Typography variant="h5" className="mb-2 mt-20" color="blue-gray"> Facebook </Typography>
                  </div>
                </CardBody>

                <CardBody className="px-8 text-center">
                  <div className="relative inline-block mt-8">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gray-900 rounded-full w-20 h-20 flex items-center justify-center">
                      <AiOutlineInstagram   className="w-10 h-10 text-white" />
                    </div>
                    <Typography  variant="h5" className="mb-2 mt-20" color="blue-gray"> Instagram </Typography>
                  </div>
                </CardBody>

                <CardBody className="px-8 text-center">
                  <div className="relative inline-block mt-8">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gray-900 rounded-full w-20 h-20 flex items-center justify-center">
                      <AiOutlineMessage  className="w-10 h-10 text-white" />
                    </div>
                    <Typography variant="h5" className="mb-2 mt-20" color="blue-gray"> Line </Typography>
                  </div>
                </CardBody>

                <CardBody className="px-8 text-center">
                  <div className="relative inline-block mt-8">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gray-900 rounded-full w-20 h-20 flex items-center justify-center">
                      <AiOutlineTwitter  className="w-10 h-10 text-white" />
                    </div>
                    <Typography variant="h5" className="mb-2 mt-20" color="blue-gray"> Twitter </Typography>
                  </div>
                </CardBody>

              </div>
            </div>
          </div>
        </div>
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

export default Marketing;