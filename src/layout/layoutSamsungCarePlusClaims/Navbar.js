import React from "react";

const Navbar = ({ clientName, logo }) => {
  return (
    <header className={`shadow-xs mb-5`}>
      <div className={`z-index-99 position-fixed w-100 bg-white top-0`}>
        <nav className="navbar navbar-expand-lg navbar-light justify-content-lg-between justify-content-md-inherent h--80">
          <div className="navcustom">
            <div className="navbar-brand">
              <img
                alt={`logo_${clientName}`}
                src={logo}
                className="max-w-500"
              />
            </div>
          </div>
          <div
            className={`navbar-collapse navbar-animate-fadein collapse justify-content-center w-75`}
          >
            <div className="navbar-xs d-none">
              <div className="navbar-brand">
                <img alt={`logo_${clientName}`} src={logo} />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
