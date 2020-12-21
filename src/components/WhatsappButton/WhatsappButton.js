import React from "react";
import styled from "styled-components";
import LogoWa from "../../assets/icons/whatsapp.svg";

const WhatsappDiv = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #25d366;
  border-radius: 60px;
  z-index: 9999;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06), 0 2px 32px rgba(0, 0, 0, 0.16);
  transition: all 0.4s ease-out;
  overflow: hidden;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

const WhatsappButton = () => {
  return (
    <a href="https://wa.me/5715142355" target="_blank" rel="noreferrer">
      <WhatsappDiv>
        <img
          src={LogoWa}
          width="30px"
          className="ml--15 mt--12"
          alt="logo-whatsapp"
        />
      </WhatsappDiv>
    </a>
  );
};

export default WhatsappButton;
