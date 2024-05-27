import React from "react";

import Claims from "../../../components/claims/Claims";

const ClaimsComponent = () => {
  return (
    <section className="flex w-full justify-center p-0">
      <div className="container w-full px-4 py-20 md:px-20">
        <div className="rounded-xl py-5 shadow-xl md:px-10">
          <Claims />
        </div>
      </div>
    </section>
  );
};

export default ClaimsComponent;
