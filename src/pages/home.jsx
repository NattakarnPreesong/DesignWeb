import React from "react";
import { Card, CardBody, CardHeader, Typography, } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { FeatureCard} from "@/widgets/cards";
import { featuresData } from "@/data";
import { DocumentTextIcon, BookmarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Home() {
  const [t] = useTranslation("global");
  

return (
<>
  <header className="relative flex h-96 content-center items-center justify-center ">
    <div
      className="absolute top-0 h-full w-full bg-[url('/img/Marketing.jpg')] bg-blue-gray-900  bg-cover bg-center" />
    <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
    <div className="max-w-8xl container relative mx-auto">
      <div className="flex flex-wrap items-center">
        <div className="ml-auto mr-auto w-full px-4 text-center lg:w-9/12">
          <Typography variant="h3" color="white" className="mt-20 mb-6 font-black">
            Japan System {t("title.message")}
          </Typography>
         
        </div>
      </div>
    </div>
  </header>

  <section className="-mt-14 bg-white px-4 pb-20 pt-4 ">
    <div className="container mx-auto">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-5 ">
            {featuresData.map(({ color, key, icon, href  }) => (
              <Link to={href}key={key}>
              <FeatureCard
                key={key}
                color={color}
                title={t(key + ".message")}
                icon={React.createElement(icon, {
                  className: "w-8 h-8 text-white",
                })}
              />
              </Link>
            ))}
          </div>

      <div className="mt-14 flex flex-wrap">  
        <div className="mx-auto w-full px-4 ">
          <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">

            <CardHeader className="relative h-10 bg-gradient-to-r from-cyan-500 to-blue-500" floated={false}>
              <Typography variant="h5" color="white" className="mb-3 mt-2 font-bold flex items-center">
                <DocumentTextIcon className="ml-4 w-6 h-6 mr-2 text-white-gray-500" />
                {t("New Release.message")}
              </Typography>
            </CardHeader>

            <CardBody className="p-6">

              <CardHeader className="relative" floated={false}>
                <Typography color="black" className="mb-3 mt-2 font-bold flex items-center flex-grow-1">
                  <BookmarkIcon className="ml-2 w-6 h-6 mr-2 text-blue-gray-500" />e-Tax Invoice & e-Receipt

                </Typography>

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

export default Home;
