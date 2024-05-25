import React from "react";

import Claims from "../../../components/claims/Claims";

const ClaimsComponent = () => {
  return (
    <section className="flex w-full justify-center p-0">
      <div className="container w-full px-20 py-20">
        <div className="rounded-xl px-10 py-5 shadow-xl">
          <Claims />
        </div>
      </div>
    </section>
  );
};

export default ClaimsComponent;
