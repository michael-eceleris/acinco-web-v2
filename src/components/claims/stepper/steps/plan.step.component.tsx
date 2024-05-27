import React, { useEffect } from "react";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Dropdown from "../../../inputs/Dropdown";
import PrimaryButton from "../../../buttons/PrimaryButton";
import { useStepContext } from "../stepper.provider";
import { listDeviceUserInsurranceService } from "../../../../services/microservice/claim/device/device-service";
import { useLoginClaim } from "../../../../hooks/useLoginClaim";
import { useReclamationContext } from "../../../../providers/reclamation/reclamation.provider";
import { listPlanDeviceUserInsurrance } from "../../../../services/microservice/claim/plan/plan-service";
import {
  ICoverageDevicePlanUser,
  IDeviceUserInsurrance,
  IPlanDeviceUserInsurrance,
} from "../../../../providers/reclamation/types/claims";
import { listCoveragesPlanDeviceUserInsurrance } from "../../../../services/microservice/claim/coverages/coverage-service";
import { listDocumentsCoveragesPlanDeviceUserInsurrance } from "../../../../services/microservice/claim/documents/document-service";

type IFormInput = {
  device: IDeviceUserInsurrance;
  plan: IPlanDeviceUserInsurrance;
  coverage: ICoverageDevicePlanUser;
};

const schemaDevice = yup
  .object()
  .shape({
    device: yup.object().required("* Requerido"),
    plan: yup.object().required("* Requerido"),
    coverage: yup.object().required("* Requerido"),
  })
  .required();

const PlanStepComponent = () => {
  const {
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaDevice),
  });
  const { setCurrentStep } = useStepContext();
  const { logout } = useLoginClaim();
  const {
    devices,
    setDevices,
    plans,
    setPlans,
    coverages,
    setCoverages,
    setGlobalForm,
    setDocuments,
  } = useReclamationContext();
  const onSubmit: SubmitHandler<IFormInput> = (values) => {
    setGlobalForm({ ...values });
    setCurrentStep(3);
  };

  const handlePreviusStep = () => {
    setCurrentStep(1);
    logout();
  };

  useEffect(() => {
    listDeviceUserInsurranceService().then((res) =>
      setDevices(res.data.devices),
    );
  }, []);

  useEffect(() => {
    if (watch("device")) {
      setValue("plan", null);
      setValue("coverage", null);
      listPlanDeviceUserInsurrance({
        deviceId: (watch("device") as IDeviceUserInsurrance)?.id,
      })
        .then((res) => setPlans(res.data.plan))
        .catch((err) => console.log(err));
    }
  }, [watch("device")]);

  useEffect(() => {
    if (watch("plan")) {
      setValue("coverage", null);
      listCoveragesPlanDeviceUserInsurrance({
        planId: (watch("plan") as IPlanDeviceUserInsurrance)?.id,
      }).then((res) =>
        setCoverages(res.data.coverage[0].tipos_cobertura_cobertura),
      );
    }
  }, [watch("plan")]);

  useEffect(() => {
    if (watch("coverage")) {
      listDocumentsCoveragesPlanDeviceUserInsurrance({
        coverageId: (watch("coverage") as ICoverageDevicePlanUser)?.id,
      }).then((res) => setDocuments(res.data.documents));
    }
  }, [watch("coverage")]);

  return (
    <section>
      <h2 className="mb-5 text-center text-3xl font-bold">
        2. <span className="text-blueFinance">Selecciona</span> tu cobertura
      </h2>
      <div className="mb-10 w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="device"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={devices || []}
                label1="dispositivo"
                prop1="nombre"
                label2="IMEI"
                prop2="imei_uno"
                placeholder="Selecciona tu dispositivo"
                error={errors.device?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="plan"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={plans || []}
                placeholder="Selecciona tu plan"
                label1="plan"
                prop1="nombre"
                error={errors.plan?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="coverage"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={coverages || []}
                placeholder="Selecciona tu cobertura"
                label1="nombre"
                error={errors.coverage?.message}
                {...field}
              />
            )}
          />
          <div className="mt-4 flex justify-between">
            <PrimaryButton
              title="Atras"
              className="rounded-2xl border px-5 text-textBlack"
              onClick={() => handlePreviusStep()}
              type="button"
            />
            <PrimaryButton
              type="submit"
              title="Siguiente"
              className="rounded-2xl bg-buttonBlack px-5 text-white"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default PlanStepComponent;
