import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const FooterDiv = styled.footer`
  background-color: ${props => props.bgColor};

`;

const Footer = ({ colorPrimary }) => {

  return (
    <FooterDiv id="footer" className="text-white" bgColor={colorPrimary} >
      <div className="bg-distinct py-3 clearfix">
        <div className="container clearfix font-weight-light text-center-xs position-relative font-italic">
          <div className="clearfix float-start float-none-xs">
            <div className="fs--16 py-2 float-start float-none-xs m-0-xs">
              Copyright &copy; 2020 Acinco S.A.S
            </div>
          </div>
          <div className="fs--16 py-2 float-end float-none-xs m-0-xs">
            Made by E-celeris Software Factory
          </div>
        </div>
      </div>
    </FooterDiv>
  );
};

Footer.propTypes = {
  colorPrimary: PropTypes.string.isRequired,
}

export default Footer;
