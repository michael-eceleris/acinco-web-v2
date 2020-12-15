import React, { useContext, Fragment } from "react";
import FormContext from "../context/form/formContext";

const Devices = () => {
  const formContext = useContext(FormContext);
  const { devicesUser } = formContext;
  return (
    <Fragment>
      {devicesUser
        ? devicesUser.map((device) => (
            <option key={device.id} value={device.id}>
              {device.dispositivo.nombre} - IMEI {device.imei_uno} - Linea{" "}
              {device.linea_uno}
            </option>
          ))
        : null}
    </Fragment>
  );
};

export default Devices;
