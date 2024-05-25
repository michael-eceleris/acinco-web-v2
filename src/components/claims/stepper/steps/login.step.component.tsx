import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Input from "../../../inputs/Input";
import PrimaryButton from "../../../buttons/PrimaryButton";
import { useStepContext } from "../stepper.provider";

type IFormInput = {
  username: string;
  password: string;
};

const schemaLogin = yup
  .object({
    username: yup
      .string()
      .matches(/^\d+$/, { message: "* Requerido" })
      .required("* Requerido"),
    password: yup.string().email().required("* Requerido"),
  })
  .required();

const LoginStepComponent = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  const { setCurrentStep } = useStepContext();

  const onSubmit: SubmitHandler<IFormInput> = (val) => {
    setCurrentStep(2);
  };
  return (
    <section className="w-full">
      <h2 className="mb-5 text-center text-3xl font-bold">
        1. <span className="text-blueFinance">Identifícate</span>
      </h2>
      <div className="mb-10 w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                classNameContainer="w-full mb-7"
                classNameInput="w-full"
                placeholder="Número de identificación"
                error={errors.username?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                classNameContainer="w-full my-2"
                classNameInput="w-full"
                placeholder="Email"
                error={errors.password?.message}
              />
            )}
          />
          <PrimaryButton
            title="INICIAR SESIÓN"
            className="mt-5 rounded-3xl bg-buttonBlack px-5 py-1 text-sm font-normal text-whiteSoft"
          />
        </form>
      </div>
    </section>
  );
};

export default LoginStepComponent;