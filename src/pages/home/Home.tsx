import React from "react";
import { Helmet } from "react-helmet";

import Img1 from "../../assets/images/woman_celular.png";
import Img2 from "../../assets/images/man_celular.png";
import Img3 from "../../assets/images/technician-repairing-mobile.png";

import Banner from "../../components/banner/Banner";
import ClientsSection from "./components/clients.component";
import OperationSection from "./components/operation.component";
import TecnologySection from "./components/tecnology.component";
import FraudelenceSection from "./components/fraudelence.component";
import InsurranceSection from "./components/insurance.component";
import AdvisorySection from "./components/advisory.component";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Acinco</title>
        <meta
          name="description"
          content="Aquí conocerás y podrás obtener información sobre los productos que tenemos disponibles para ti."
        />
      </Helmet>
      <Banner
        title={
          <>
            <h1 className="text-6xl font-bold text-textPrimary">
              Somos un TPA
            </h1>
            <h2 className="text-6xl font-bold text-textSecundary">
              como ningún otro
            </h2>
          </>
        }
        paragraph={
          <p className="mt-5 text-2xl text-textBlack">
            A través de nuestras aseguradoras aliadas, gestionamos programas
            completos de aseguramiento para celulares, desde la suscripción
            hasta la distribución, los reclamos y el cumplimiento.
          </p>
        }
        sectionImages={
          <div className="relative -mt-12 h-full w-full">
            <div className="absolute w-7/12">
              <img
                src={Img1}
                className="h-auto max-w-full"
                alt="banner_img_1"
              />
            </div>
            <div className="absolute -z-10 w-6/12 xl:right-0 xl:top-1/2 ">
              <img
                src={Img2}
                className="h-auto max-w-full"
                alt="banner_img_2"
              />
            </div>
            <div className="absolute -z-20 w-5/12 xl:-bottom-48 xl:left-1/4 2xl:-bottom-80">
              <img
                src={Img3}
                className="h-auto max-w-full"
                alt="banner_img_3"
              />
            </div>
          </div>
        }
      />
      <ClientsSection />
      <OperationSection />
      <TecnologySection />
      <FraudelenceSection />
      <InsurranceSection />
      <AdvisorySection />
      <Footer />
    </>
  );
};

export default Home;
