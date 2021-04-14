import React from "react";
import IconGooglePlayStore from "../../../assets/icons/google-play-brands.svg";
import IconApple from "../../../assets/icons/apple-brands.svg";

const ClaimsMobile = () => {
  return (
    <>
      <section className="col-12 col-lg-12 mb-3 bg-gray-100 show3 show2">
        <div className="portlet w-75 m-auto">
          <div className="portlet-header border-bottom">
            <div className="container p-2">
              <h6 className="text-justify">
                Puedes realizar el proceso de reclamación facilmente desde la
                aplicación movil, computador de escritorio o portatil.
              </h6>
            </div>
          </div>
          <div className="portlet-body m-auto d-flex justify-content-around ">
            <a
              href="https://itunes.apple.com/co/app/protecci%C3%B3n-m%C3%B3vil-seguro/id1116274602?mt=8"
              className="btn btn-dark rounded-xl transition-hover-top d-flex btncustom w--150 m-auto"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={IconApple}
                height="35"
                className="mr-2"
                alt="logo_apple"
              />
              <span className="text-align-start w--100">
                <span className="d-block line-height-1 fs--13">
                  Disponible en
                </span>
                <span className="d-block line-height-1 fs--18 pt-1">
                  App Store
                </span>
              </span>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.hidesoft.tigo&amp;hl=es"
              className="btn btn-dark rounded-xl transition-hover-top d-flex btncustom w--150 m-auto mt-3-xs"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={IconGooglePlayStore}
                height="30"
                className="mr-2"

                alt="logo_play_store"
              />
              <span className="text-align-start w--100">
                <span className="d-block line-height-1 fs--13">
                  Disponible en
                </span>
                <span className="d-block line-height-1 fs--18 pt-1">
                  Play Store
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClaimsMobile;
