import React, { useEffect, useState } from "react";
import _ from "lodash";
import { format } from "date-fns";

import { useReclamationContext } from "../../../../providers/reclamation/reclamation.provider";
import { getMeInsurranceService } from "../../../../services/microservice/claim/auth/auth-service";
import { IClientClaim } from "../../../../services/microservice/claim/types/claims";
import PrimaryButton from "../../../buttons/PrimaryButton";
import { useStepContext } from "../stepper.provider";
import {
  ICitiesInsurrance,
  ICoverageDevicePlanUser,
  ICreateInsurrance,
  IDeviceUserInsurrance,
  IDocumentsCoveragesInsurrance,
  IGenderInsurrance,
  IPolicyDeviceUserInsurrance,
} from "../../../../providers/reclamation/types/claims";
import { toFormData } from "../../../../util/toFormData";
import { useCreateClaim } from "../../../../services/microservice/claim/create/use-claim";

interface ICreateFormValues {
  client: {
    name: string;
    password: string;
  };
  device: IDeviceUserInsurrance | null;
  plan: IPolicyDeviceUserInsurrance | null;
  coverage: ICoverageDevicePlanUser | null;
  documents: IDocumentsCoveragesInsurrance[];
  gender: IGenderInsurrance | null;
  description: string | null;
  linePrincipal: string | null;
  claimDate: Date | null;
  claimCity: ICitiesInsurrance | null;
}

const SendStepComponet = () => {
  const { globalForm, documents } = useReclamationContext();
  const { setCurrentStep } = useStepContext();
  const [user, setUser] = useState<IClientClaim>();
  const { mutateAsync: createClaim, isLoading } = useCreateClaim();

  const formatSumbitData = (values: ICreateFormValues): ICreateInsurrance => {
    const documentData = {};

    Object.keys(values.documents).forEach((value) => {
      _.set(documentData, String(value), values.documents[value][0]);
    });
    return {
      principalIMEI: values.device?.imei_uno,
      planID: values.plan?.plan?.id,
      coverageID: values.coverage?.id,
      message: values.description,
      phoneAccident: values.linePrincipal,
      dateAccident: format(values.claimDate!, "yyyy-MM-dd"),
      genderID: values.gender?.id,
      cityID: values.claimCity?.id,
      ...documentData,
    };
  };

  const onSubmit = () => {
    const data = formatSumbitData(globalForm as ICreateFormValues);
    const form = toFormData<ICreateInsurrance>(data);
    createClaim({ data: form })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const handlePreviusStep = () => {
    setCurrentStep(4);
  };
  useEffect(() => {
    getMeInsurranceService().then((res) => setUser(res.data));
  }, []);
  return (
    <section>
      <h2 className="mb-5 text-center text-3xl font-bold">
        5. <span className="text-blueFinance">Enviar</span>
      </h2>
      <div>
        <table className="text-gray-700 table w-full">
          <tbody>
            <tr>
              <td className="border-t-0">
                <h6 className="mb-4 font-medium">Datos personales</h6>
              </td>
              <td className="border-b-0 border-t-0 pb-3 pt-1 text-end">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td className="border-b-0 border-t-0 pb-3 pt-1">Nombre(s):</td>
              <td className="border-b-0 border-t-0 pb-3 pt-1 text-end">
                {user?.name}
              </td>
            </tr>
            <tr>
              <td className="border-b-0 border-t-0 pb-3 pt-1">Apellido(s):</td>
              <td className="border-b-0 border-t-0 pb-3 pt-1 text-end">
                {user?.second_name}
              </td>
            </tr>
            <tr>
              <td className="border-b-0 border-t-0 pb-3 pt-1">
                Tipo de documento:
              </td>
              <td className="border-b-0 border-t-0 pb-3 pt-1 text-end">
                {user?.identification_type.name}
              </td>
            </tr>
            <tr>
              <td className="border-b-0 border-t-0 pb-3 pt-1">
                Número de documento:
              </td>
              <td className="border-b-0 border-t-0 pb-3 pt-1 text-end">
                {user?.identification_number}
              </td>
            </tr>
            <tr>
              <td className="border-b-0 border-t-0 pb-3 pt-1">Género:</td>
              <td className="border-b-0 border-t-0 pb-3 pt-1 text-end">
                {globalForm?.gender?.name}
              </td>
            </tr>
            <tr>
              <td className="border-b-0 border-t-0 pb-3 pt-1">Email:</td>
              <td className="border-b-0 border-t-0 pb-3 pt-1 text-end">
                {" "}
                {user?.email}
              </td>
            </tr>
            <tr>
              <td className="border-b-0 border-t-0 pb-3 pt-1">
                Línea Principal Asegurada:
              </td>
              <td className="border-b-0 border-t-0 pb-3 pt-1 text-end">
                {globalForm?.device?.linea_uno}
              </td>
            </tr>
            {globalForm?.device.linea_dos !== "" ? (
              <tr>
                <td className="border-b-0 border-t-0 pb-3 pt-1">
                  Línea Secundaria Asegurada:{" "}
                </td>
                <td className="border-b-0 border-t-0 pb-3 pt-1 text-end">
                  {globalForm?.device.linea_dos}
                </td>
              </tr>
            ) : null}
            <tr>
              <td className="border-t-0">
                <h6 className="mb-4 mt-4 font-medium">Datos del dispositivo</h6>
              </td>
              <td className="border-t-0">&nbsp;</td>
            </tr>
            <tr>
              <td className="border-b-0 border-t-0 pb-3 pt-1">
                Modelo del dispositivo:
              </td>
              <td className="border-b-0 border-t-0 pb-3 pt-1 text-end">
                {globalForm?.device?.dispositivo.nombre}
              </td>
            </tr>
            <tr>
              <td className="border-b-0 border-t-0 pb-3 pt-1">Fabricante:</td>
              <td className="border-b-0 border-t-0 pb-3 pt-1 text-end">
                {globalForm?.device.dispositivo.fabricante.nombre}
              </td>
            </tr>
            <tr>
              <td className="border-b-0 border-t-0 pb-3 pt-1">
                IMEI Principal Asegurado:
              </td>
              <td className="border-b-0 border-t-0 pb-3 pt-1 text-end">
                {globalForm?.device.imei_uno}
              </td>
            </tr>
            {globalForm?.imeiSecondary !== undefined ? (
              <tr>
                <td className="border-b-0 border-t-0 pb-3 pt-1">
                  IMEI Secundario Asegurado:
                </td>
                <td className="border-b-0 border-t-0 pb-3 pt-1 text-end">
                  {globalForm?.imeiSecondary}
                </td>
              </tr>
            ) : null}
            <tr>
              <td className="border-t-0">
                <h6 className="mb-4 mt-4 font-medium">Datos del evento</h6>
              </td>
              <td className="border-t-0">&nbsp;</td>
            </tr>
            <tr>
              <td className="border-b-0 border-t-0 pb-3 pt-1">
                Nombre del plan al que aplica:
              </td>
              <td className="border-b-0 border-t-0 pb-3 pt-1 text-end">
                {globalForm?.plan.plan.nombre}
              </td>
            </tr>
            <tr>
              <td className="border-b-0 border-t-0 pb-3 pt-1">
                Aplicando a la cobertura de:
              </td>
              <td className="border-b-0 border-t-0 pb-3 pt-1 text-end">
                {globalForm?.coverage.nombre}
              </td>
            </tr>
            <tr>
              <td className="border-b-0 border-t-0 pb-3 pt-1">
                Valor de cobertura
              </td>
              <td className="border-b-0 border-t-0 pb-3 pt-1 text-end">
                ${" "}
                {globalForm?.device.policy[0].valor_asegurado
                  .toString()
                  .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
              </td>
            </tr>
            <tr>
              <td className="border-b-0 border-t-0 pb-3 pt-1">
                Fecha del evento:
              </td>
              <td className="border-b-0 border-t-0 pb-3 pt-1 text-end">
                {globalForm?.claimDate.toISOString().split("T")[0]}
              </td>
            </tr>
            <tr>
              <td className="border-b-0 border-t-0 pb-3 pt-1">
                Hora del evento:
              </td>
              <td className="border-b-0 border-t-0 pb-3 pt-1 text-end">
                {globalForm?.claimHour?.toLocaleTimeString()}
              </td>
            </tr>
            <tr>
              <td className="border-b-0 border-t-0 pb-3 pt-1">
                Ciudad en donde sucedió el evento:
              </td>
              <td className="border-b-0 border-t-0 pb-3 pt-1 text-end">
                {globalForm?.claimCity.nombre}{" "}
              </td>
            </tr>
            <tr>
              <td className="border-b-0 border-t-0 pb-3 pt-1">
                Línea con la que sucedió el evento:
              </td>
              <td className="border-b-0 border-t-0 pb-3 pt-1 text-end">
                {globalForm?.linePrincipal}
              </td>
            </tr>
            <tr>
              <td className="border-b-0 border-t-0 pb-3 pt-1">
                Descripción del evento
              </td>
              <td className="border-b-0 border-t-0 pb-3 pt-1 text-end">
                {globalForm?.description}
              </td>
            </tr>
            <tr>
              <td className="border-t-0">
                <h6 className="mb-4 mt-4 font-medium">Documentos cargados</h6>
              </td>
              <td className="border-t-0">&nbsp;</td>
            </tr>
            {documents.map((doc) =>
              globalForm?.documents[doc.id] === null ? null : (
                <tr key={doc.id}>
                  <td className="border-b-0 border-t-0 pb-3 pt-1">
                    {doc?.nombre_documento_save}
                  </td>
                  <td className="border-b-0 border-t-0 pb-3 pt-1 text-end">
                    {globalForm?.documents[doc.id][0].name}
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
        <div className="mt-4 flex justify-between">
          <PrimaryButton
            title="Atras"
            className="rounded-2xl border px-5 text-textBlack"
            onClick={() => handlePreviusStep()}
            type="button"
          />
          <PrimaryButton
            onClick={() => onSubmit()}
            title="Siguiente"
            className="rounded-2xl bg-buttonBlack px-5 text-white"
            loading={isLoading}
            disabled={isLoading}
          />
        </div>
      </div>
    </section>
  );
};

export default SendStepComponet;
