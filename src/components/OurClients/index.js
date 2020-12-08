import React from 'react';

import LogoHuawei from "../../assets/icons/huawei.svg";
import LogoSamgung from "../../assets/icons/samsung.svg";
import LogoTigo from "../../assets/icons/Logo_Tigo.svg";
import LogoAxaColpatria from "../../assets/icons/logo-axa-colpatria.png";
import LogoTelefonicaTelecom from "../../assets/icons/telefonica_telecom_logo.svg";
import LogoTelefonicaData from "../../assets/icons/telefonica-data.svg";
import LogoEricsson from "../../assets/images/ericsson-logo.png";
import LogoAxaService from "../../assets/images/axa-service-logo.png"; 

const OurClients = () => {
  return ( 
    <section className="p-0 bg-transparent position-relative z-index-2 mt--n50">
      <div className="container">
				<div className="bg-white shadow-primary-xs rounded pt-4 pb-4">
          <h2 className="h1 text-left mb-2 ml-3">Clientes</h2>
          <p className="ml-3">Asesoramos empresas públicas y privadas del sector de telecomunicaciones en:</p>
          <div className="d-flex justify-content-center px-5 pl-2">
            <div className="row">
              <div className="col-6 col-md-3 py-3 d-flex justify-content-center" data-aos="fade-in" data-aos-delay="150" data-aos-offset="0">
                <img width="100" height="50" className="img-fluid opacity-4" src={LogoHuawei} alt="logo_huawei" />
              </div>
              <div className="col-6 col-md-3 py-3 d-flex justify-content-center" data-aos="fade-in" data-aos-delay="200" data-aos-offset="0">
                <img width="140" height="50" className="img-fluid opacity-4" src={LogoSamgung} alt="logo_samsung" />
              </div>
              <div className="col-6 col-md-3 py-3 d-flex justify-content-center" data-aos="fade-in" data-aos-delay="250" data-aos-offset="0">
                <img width="200" height="50" className="img-fluid opacity-4" src={LogoAxaColpatria} alt="logo_axa_colpatria"/>
              </div>
              <div className="col-6 col-md-3 py-3 d-flex justify-content-center" data-aos="fade-in" data-aos-delay="300" data-aos-offset="0">
                <img width="140" height="50" className="img-fluid opacity-4" src={LogoTigo} alt="logo_tigo"/>
              </div>
              <div className="col-6 col-md-3 py-3 d-flex justify-content-center" data-aos="fade-in" data-aos-delay="350" data-aos-offset="0">
                <img width="220" height="50" className="img-fluid opacity-4" src={LogoAxaService} alt="logo_axa_service"/>
              </div>
              <div className="col-6 col-md-3 py-3 d-flex justify-content-center" data-aos="fade-in" data-aos-delay="400" data-aos-offset="0">
                <img width="140" height="50" className="img-fluid opacity-4" src={LogoTelefonicaTelecom} alt="logo_telefonica_telecom"/>
              </div>
              <div className="col-6 col-md-3 py-3 d-flex justify-content-center" data-aos="fade-in" data-aos-delay="400" data-aos-offset="0">
                <img width="140" height="50" className="img-fluid opacity-4" src={LogoTelefonicaData} alt="logo_telefonica_data"/>
              </div>
              <div className="col-6 col-md-3 py-3" data-aos="fade-in" data-aos-delay="400" data-aos-offset="0">
                <img width="140" height="50" className="img-fluid opacity-4" src={LogoEricsson} alt="logo_ericsson"/>
              </div>
            </div>
					</div>
				</div>
			</div>
    </section>
   );
}
 
export default OurClients;