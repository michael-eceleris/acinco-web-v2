import React from "react";
import Banner from "../components/componentsTotalProtection/Banner";
import HowToActive from "../components/componentsTotalProtection/HowToActive";
import Coverages from "../components/componentsTotalProtection/Coverages";
import Recoveries from "../components/componentsTotalProtection/Recoveries";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import LogoProteccion from "../assets/images/proteccion-icon_v2020-01.png";
import IconAppStore from "../assets/images/app-store-min.png";
import IconGooglePlayStore from "../assets/images/google-play-min.png";
const TotalProtection = () => {
  return (
    <>
      <Banner />
      <HowToActive />
      <section className="p-0 bg-transparent position-relative z-index-2 mt--n50">
        <div className="container">
          <div className="bg-white shadow-primary-xs rounded pt-4 pb-4">
            <div className="d-flex justify-content-center px-5 pl-2">
              <div className="row">
                <div className="col-6 col-md-6 py-3 d-flex justify-content-center">
                  <img src={LogoProteccion} />
                </div>
                <div className="col-6 col-md-6 py-3 d-flex justify-content-center">
                  <div className="row">
                    <h4 className="ml-3">Protección Móvil Descargala en:</h4>
                    <div className="ml-5 row">
                      <div className="mr-2">
                        <img src={IconAppStore} />
                      </div>
                      <div className="ml-2">
                        <img src={IconGooglePlayStore} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Coverages />
      <Recoveries />
      <ContactUs />
      <Footer />
    </>
  );
};

export default TotalProtection;
