import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { useStepContext } from "../stepper.provider";
import PrimaryButton from "../../../buttons/PrimaryButton";
import { useReclamationContext } from "../../../../providers/reclamation/reclamation.provider";

type IFormInput = {
  device: string;
  plan: string;
  coverage: string;
};

const DocumentStepComponent = () => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm();
  const { setCurrentStep } = useStepContext();
  const { documents, setGlobalForm } = useReclamationContext();

  const validateSize = (id, value) => {
    if (value.target.files.length > 0 && value.target.files[0].size > 4000000) {
      setError(`${id}`, {
        message: "Excediste el tamaño permitido de 4MB",
      });
    } else {
      clearErrors(`${id}`);
    }
  };
  const onSubmit: SubmitHandler<IFormInput> = (values) => {
    setGlobalForm((prevState) => ({ ...prevState, documents: values }));
    setCurrentStep(4);
  };
  const handlePreviusStep = () => {
    setCurrentStep(2);
  };
  useEffect(() => {
    console.log(errors);
  });
  return (
    <section>
      <h2 className="mb-5 text-center text-3xl font-bold">
        3. <span className="text-blueFinance">Sube</span> tus documentos
      </h2>
      <div className="mb-10 w-full"></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {documents
          ? documents.map((doc) => (
              <>
                <div className="mb-2 ml-1">
                  <p className="text-lg font-normal">
                    {doc.nombre_documento_save}
                    {doc.required && <span className="text-critical"> *</span>}
                  </p>
                </div>
                <div className="relative inline-block w-full">
                  <label
                    className="left-1 z-10 inline-block h-10 w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-md bg-gray px-3 py-2 text-textBlack after:absolute after:right-0 after:top-0 after:block after:h-10 after:rounded-r-md after:bg-buttonBlack after:px-2 after:pt-2 after:text-center after:align-middle after:text-white after:content-['Seleccionar']"
                    htmlFor={`${doc.id}`}
                  >
                    {watch(`${doc.id}`)
                      ? watch(`${doc.id}`).length > 0 &&
                        watch(`${doc.id}`)[0].name
                      : null}
                  </label>

                  <input
                    {...register(`${doc.id}`, {
                      required: { value: doc.required, message: "* Requerido" },
                      onChange: (event) => validateSize(`${doc.id}`, event),
                    })}
                    id={`${doc.id}`}
                    type="file"
                    accept=".pdf, .jpg, .jpeg"
                    className="absolute left-0 top-0 -z-10 w-full opacity-0"
                  />
                  <div>
                    {errors[doc.id] && (
                      <p className="text-critical">
                        {String(errors[doc.id]?.message)}
                      </p>
                    )}
                    <small className="mt-1 text-sm text-textBlack">
                      Upload max size 4MB (PDF o JPG).
                    </small>
                  </div>
                </div>
              </>
            ))
          : null}
        <div className="mt-4 flex justify-between">
          <PrimaryButton
            title="Atras"
            className="rounded-2xl border px-5 text-textBlack"
            onClick={() => handlePreviusStep()}
          />
          <PrimaryButton
            type="submit"
            title="Siguiente"
            className="rounded-2xl bg-buttonBlack px-5 text-white"
          />
        </div>
      </form>
    </section>
  );
};

export default DocumentStepComponent;
