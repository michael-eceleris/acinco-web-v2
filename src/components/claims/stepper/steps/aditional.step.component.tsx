import React, { useEffect, useState } from "react";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Dropdown from "../../../inputs/Dropdown";
import Input from "../../../inputs/Input";
import TextArea from "../../../inputs/TextArea";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import PrimaryButton from "../../../buttons/PrimaryButton";
import DropdownFilter from "../../../inputs/DropdownFilter";
import { listGenderInsurrance } from "../../../../services/microservice/claim/gender/gender-service";
import { useReclamationContext } from "../../../../providers/reclamation/reclamation.provider";
import {
  ICitiesClaim,
  IGenderClaim,
} from "../../../../services/microservice/claim/types/claims";
import { listCityInsurrance } from "../../../../services/microservice/claim/city/city-service";
import { useStepContext } from "../stepper.provider";

type IFormInput = {
  gender: {
    id: number;
    name: string;
  };
  claimCity: {
    id: number;
    nombre: string;
    departamento: {
      nombre: string;
    };
  };
  claimDate: Date;
  claimHour: Date;
  address: string;
  cityResidence: string;
  country: string;
  imeiSecondary: string;
  linePrincipal: string;
  description: string;
};
const messageRequired = "* Requerido";
const schemaAditionalInfo = yup
  .object()
  .shape({
    gender: yup.object().required(messageRequired),
    claimCity: yup.object().required(messageRequired),
    claimDate: yup.date().required(messageRequired),
    claimHour: yup.date().required(messageRequired),
    address: yup.string().required(messageRequired),
    cityResidence: yup.string().required(messageRequired),
    country: yup.string().required(messageRequired),
    imeiSecondary: yup
      .string()
      .matches(/^\d+$/, { message: messageRequired })
      .max(15, "Máximo 15 dígitos")
      .min(15, "Minimo 15 dígitos")
      .required(messageRequired),
    linePrincipal: yup
      .string()
      .matches(/^\d+$/, { message: messageRequired })
      .max(10, "Máximo 10 dígitos")
      .min(10, "Minimo 10 dígitos")
      .required(messageRequired),
    description: yup.string().required(messageRequired),
  })
  .required(messageRequired);
const AditionalStepComponent = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaAditionalInfo) });
  const [genders, setGenders] = useState<IGenderClaim[]>();
  const [cities, setCities] = useState<ICitiesClaim[]>();
  const { setCurrentStep } = useStepContext();
  const { setGlobalForm } = useReclamationContext();
  const onSubmit: SubmitHandler<IFormInput> = (values) => {
    setGlobalForm((prevState) => ({ ...prevState, ...values }));
    setCurrentStep(5);
  };

  const handlePreviusStep = () => {
    setCurrentStep(3);
  };

  useEffect(() => {
    listGenderInsurrance().then((res) => setGenders(res.data.cities));
  }, []);
  useEffect(() => {
    listCityInsurrance().then((res) => setCities(res.data.cities));
  }, []);

  return (
    <section>
      <h2 className="mb-5 text-center text-3xl font-bold">
        4. <span className="text-blueFinance">Información</span> adicional
      </h2>
      <div className="mb-10 w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={genders || []}
                label1="name"
                placeholder="Selecciona tu género"
                error={errors.gender?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="claimCity"
            control={control}
            render={({ field }) => (
              <DropdownFilter
                options={cities || []}
                label="nombre"
                placeholder="Selecciona la ciudad en la que ocurrió el evento"
                error={errors.claimCity?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="claimDate"
            control={control}
            render={({ field }) => (
              <div className="my-4 mb-7">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    format="DD/MM/YYYY"
                    sx={{
                      ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                        borderRadius: "0.5rem",
                        borderWidth: 0,
                      },
                      ".css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root": {
                        height: "3rem",
                        paddingTop: "0.75rem",
                        paddingBottom: "0.75rem",
                      },
                    }}
                    className="w-full rounded-md border-0 bg-gray text-textBlack"
                    slotProps={{
                      textField: {
                        placeholder:
                          "Selecciona fecha en la que ocurrió el evento",
                      },
                    }}
                    {...field}
                  />
                </LocalizationProvider>
                <div className="h-1">
                  {errors && (
                    <p className="my-0 py-0 text-sm text-critical">
                      {errors.claimDate?.message}
                    </p>
                  )}
                </div>
              </div>
            )}
          />
          <Controller
            name="claimHour"
            control={control}
            render={({ field }) => (
              <div className="my-4 mb-7">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    sx={{
                      ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                        borderRadius: "0.5rem",
                        borderWidth: 0,
                      },
                      ".css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root": {
                        height: "3rem",
                        paddingTop: "0.75rem",
                        paddingBottom: "0.75rem",
                      },
                    }}
                    className="w-full rounded-md border-0 bg-gray text-textBlack"
                    slotProps={{
                      textField: {
                        placeholder:
                          "Selecciona hora en la que ocurrió el evento",
                      },
                    }}
                    {...field}
                  />
                </LocalizationProvider>
                <div className="h-1">
                  {errors && (
                    <p className="my-0 py-0 text-sm text-critical">
                      {errors.claimHour?.message}
                    </p>
                  )}
                </div>
              </div>
            )}
          />
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                classNameContainer="w-full mb-7"
                classNameInput="w-full"
                placeholder="Dirección de residencia"
                error={errors.address?.message}
              />
            )}
          />

          <Controller
            name="cityResidence"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                classNameContainer="w-full mb-7"
                classNameInput="w-full"
                placeholder="Ciudad de residencia"
                error={errors.cityResidence?.message}
              />
            )}
          />
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                classNameContainer="w-full mb-7"
                classNameInput="w-full"
                placeholder="País donde ocurrió el evento"
                error={errors.country?.message}
              />
            )}
          />

          <Controller
            name="imeiSecondary"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                classNameContainer="w-full mb-7"
                classNameInput="w-full"
                placeholder="Número del imei secundario"
                error={errors.imeiSecondary?.message}
              />
            )}
          />
          <Controller
            name="linePrincipal"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                classNameContainer="w-full mb-7"
                classNameInput="w-full"
                placeholder="Número de línea con la que sucedió el evento"
                error={errors.linePrincipal?.message}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextArea
                {...field}
                classNameContainer="w-full mb-7"
                classNameInput="w-full"
                placeholder="Descripción del evento"
                error={errors.description?.message}
                rows={4}
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

export default AditionalStepComponent;
