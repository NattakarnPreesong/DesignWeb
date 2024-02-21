import React from "react";
import { Card, CardBody, CardHeader, Typography, } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { ItSystemCard} from "@/widgets/cards";
import { itsystemData } from "@/data";
import { useTranslation } from "react-i18next";

export function ItSystem() {
  const [t] = useTranslation("global");

return (
<>
  <header className="relative flex h-64 content-center items-center justify-center ">
    <div className="absolute top-0 h-full w-full bg-[url('/img/ItSystem.jpg')] bg-blue-gray-900  bg-cover bg-center" />
    <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
    <div className="max-w-8xl container relative mx-auto">
      <div className="flex flex-wrap items-center">
        <div className="ml-auto mr-auto w-full px-4 text-center lg:w-9/12">
          <Typography variant="h2" color="white" className="mt-20 mb-6 font-black">
            {t("ITSystem.message")}
          </Typography>
        </div>
      </div>
    </div>
  </header>

  <section className="-mt-14 bg-white px-4 pb-20 pt-4 ">
    <div className="container mx-auto">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
            {itsystemData.map(({ color, key, icon  }) => (
              <ItSystemCard
                key={key}
                color={color}
                title={t(key + ".message")}
                icon={React.createElement(icon, {
                  className: "w-8 h-8 text-white",
                })}
              />
            ))}
          </div>

      
    </div>
  </section>

  <div className="bg-white">
    <Footer />
  </div>
</>
);
}

export default ItSystem;