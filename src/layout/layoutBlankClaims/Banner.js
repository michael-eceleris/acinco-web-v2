import clsx from "clsx";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
  imageBackground: {
    backgroundImage: (props) => `url(${props.bannerBackground})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
}));

const Banner = ({ bannerBackground }) => {
  const classes = useStyle({ bannerBackground });
  return (
    <section className={clsx("p-0 bg-white", classes.imageBackground)}>
      <div className='container min-h75vh d-middle pt-5'>
        <div className='row text-center-xs'>
          <div
            className='col-12 col-md-6 order-2 order-md-1 pb-5 pl-md-5'
            data-aos='fade-in'
            data-aos-delay='0'
          >
            <div className='mt-7'>
              <h1 className='font-weight-light mb-4'>
                <span className='font-weight-medium'>Reclamación</span>
              </h1>
            </div>
            <p className=' lead mb-5'>
              <span className='font-weight-medium '> ¡Es muy simple!</span> Con
              tan solo 5 sencillos pasos puedes realizar tu reclamación.
            </p>
          </div>
          <div className='col-12 col-md-6 order-2 order-md-2 show2'>
            <div style={{ width: "350px", height: "400px" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
