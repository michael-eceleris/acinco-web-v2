import React from "react";

import Img1 from "../../../assets/images/step_1_img.png";
import Img2 from "../../../assets/images/step_2_img.png";
import Img3 from "../../../assets/images/step_3_img.png";
import Img4 from "../../../assets/images/step_4_img.png";
import Img5 from "../../../assets/images/step_5_img.png";
import { useStepContext } from "./stepper.provider";
import clsx from "clsx";

const steps = [
  {
    image: Img1,
    stepNumber: 1,
    title: "",
    titleBold: "Identifícate",
  },
  {
    image: Img2,
    stepNumber: 2,
    title: "tu cobertura",
    titleBold: "Selecciona",
  },
  {
    image: Img3,
    stepNumber: 3,
    title: "tus documentos",
    titleBold: "Sube",
  },
  {
    image: Img4,
    stepNumber: 4,
    title: "adicional",
    titleBold: "Información",
  },
  {
    image: Img5,
    stepNumber: 5,
    title: "",
    titleBold: "Enviar",
  },
];

const StepperHeader = () => {
  const { currentStep } = useStepContext();

  const onCurrentStep = (step: number): string => {
    if (currentStep < step) {
      return "opacity-50";
    } else {
      return "";
    }
  };
  return (
    <section className="w-full p-2 md:p-10">
      <div className="md:px-5">
        <p className="text-center md:my-3">
          Antes de realizar tu reclamación revisa los documentos necesarios,
          revísalos aquí.
        </p>
        <div className=" hidden md:my-5 md:grid md:grid-cols-5 md:gap-4 ">
          {steps.map(({ image, title, titleBold, stepNumber }) => (
            <div
              key={stepNumber}
              className={clsx([
                "my-10 flex flex-col items-center align-middle",
                onCurrentStep(stepNumber),
              ])}
            >
              <img
                src={image}
                alt={`step_${stepNumber}_img`}
                className="img-fluid hidden bg-transparent md:block"
              />
              <h3 className="mt-2 text-center text-xl font-bold">
                {stepNumber}.{" "}
                <span className=" text-blueFinance">{titleBold}</span> {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepperHeader;
