import React from "react";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Dropdown from "../../../inputs/Dropdown";
import PrimaryButton from "../../../buttons/PrimaryButton";
import { useStepContext } from "../stepper.provider";

const deviceList = [
  {
    id: 189654,
    linea_uno: "3222297372",
    linea_dos: null,
    imei_uno: "353912112268239",
    imei_dos: null,
    dispositivo: {
      nombre: "SAMSUNG GALAXY S20+ PLUS ",
      fabricante: {
        nombre: "Samsung",
      },
      id: 4481,
      size: "128.0",
      id_system: "SAMSUNG_GALAXY_S20+_PLUS_128GB",
    },
    policy: [],
  },
  {
    id: 189655,
    linea_uno: "3222297372",
    linea_dos: null,
    imei_uno: "352906113855490",
    imei_dos: null,
    dispositivo: {
      nombre: "IPHONE 11 ",
      fabricante: {
        nombre: "Apple",
      },
      id: 3994,
      size: "64.0",
      id_system: "IPHONE_11_64GB",
    },
    policy: [],
  },
  {
    id: 189656,
    linea_uno: "3222297372",
    linea_dos: null,
    imei_uno: "352906115751564",
    imei_dos: null,
    dispositivo: {
      nombre: "IPHONE 11 ",
      fabricante: {
        nombre: "Apple",
      },
      id: 3994,
      size: "64.0",
      id_system: "IPHONE_11_64GB",
    },
    policy: [],
  },
  {
    id: 189678,
    linea_uno: "3222297372",
    linea_dos: null,
    imei_uno: "352906114903356",
    imei_dos: null,
    dispositivo: {
      nombre: "IPHONE 11 ",
      fabricante: {
        nombre: "Apple",
      },
      id: 3994,
      size: "64.0",
      id_system: "IPHONE_11_64GB",
    },
    policy: [],
  },
  {
    id: 189679,
    linea_uno: "3222297372",
    linea_dos: null,
    imei_uno: "352906112961471",
    imei_dos: null,
    dispositivo: {
      nombre: "IPHONE 11 ",
      fabricante: {
        nombre: "Apple",
      },
      id: 3994,
      size: "64.0",
      id_system: "IPHONE_11_64GB",
    },
    policy: [],
  },
  {
    id: 189680,
    linea_uno: "3222297372",
    linea_dos: null,
    imei_uno: "352906116918899",
    imei_dos: null,
    dispositivo: {
      nombre: "IPHONE 11 ",
      fabricante: {
        nombre: "Apple",
      },
      id: 3994,
      size: "64.0",
      id_system: "IPHONE_11_64GB",
    },
    policy: [],
  },
  {
    id: 190014,
    linea_uno: "1231231231",
    linea_dos: null,
    imei_uno: "357883423764933",
    imei_dos: null,
    dispositivo: {
      nombre: "IPHONE 12 ",
      fabricante: {
        nombre: "Apple",
      },
      id: 4011,
      size: "64.0",
      id_system: "IPHONE_12_64GB",
    },
    policy: [
      {
        id: 190019,
        plan: {
          id: 59,
          nombre: "MotoEdge Asistencia Fractura de Pantalla",
          sponsor: {
            nombre: "Motorola Care",
          },
          allow_renewal: false,
          coverages: [
            {
              nombre: "Cobertura 1",
              mes_agrega: 0,
              mes_duracion: 0,
              tipos_cobertura_cobertura: [
                {
                  nombre: "Fractura Pantalla",
                  id_system: "FRACTURAPANTALLA",
                },
              ],
            },
          ],
        },
        fecha_vinculacion: "2022-10-12",
        valor_asegurado: 999999,
        fecha_activacion: "2022-10-12",
        fecha_cancelacion: "2023-08-18",
        end_date: "2023-10-12",
        is_active: false,
        cancelation_reason: "Prueba de la cancelacion",
        validity: 1,
        fecha_renovacion: null,
      },
    ],
  },
  {
    id: 190015,
    linea_uno: "1231231231",
    linea_dos: null,
    imei_uno: "357883422949212",
    imei_dos: null,
    dispositivo: {
      nombre: "IPHONE 12 ",
      fabricante: {
        nombre: "Apple",
      },
      id: 4011,
      size: "64.0",
      id_system: "IPHONE_12_64GB",
    },
    policy: [
      {
        id: 190020,
        plan: {
          id: 59,
          nombre: "MotoEdge Asistencia Fractura de Pantalla",
          sponsor: {
            nombre: "Motorola Care",
          },
          allow_renewal: false,
          coverages: [
            {
              nombre: "Cobertura 1",
              mes_agrega: 0,
              mes_duracion: 0,
              tipos_cobertura_cobertura: [
                {
                  nombre: "Fractura Pantalla",
                  id_system: "FRACTURAPANTALLA",
                },
              ],
            },
          ],
        },
        fecha_vinculacion: "2022-10-02",
        valor_asegurado: 999999,
        fecha_activacion: "2022-10-02",
        fecha_cancelacion: "2023-06-11",
        end_date: "2023-10-02",
        is_active: false,
        cancelation_reason: "Prueba de la cancelacion",
        validity: 1,
        fecha_renovacion: null,
      },
    ],
  },
  {
    id: 190035,
    linea_uno: "1234567890",
    linea_dos: "",
    imei_uno: "234567890987654",
    imei_dos: "",
    dispositivo: {
      nombre: "Samsung Galaxy Z Fold 4",
      fabricante: {
        nombre: "Samsung",
      },
      id: 5226,
      size: "512",
      id_system: "SAMSUNG_GALAXY_Z_FOLD_4_512GB",
    },
    policy: [
      {
        id: 190040,
        plan: {
          id: 60,
          nombre: "Plan Basico 12 Meses",
          sponsor: {
            nombre: "Samsung Electronics Colombia",
          },
          allow_renewal: false,
          coverages: [
            {
              nombre: "Cobertura 1",
              mes_agrega: 0,
              mes_duracion: 0,
              tipos_cobertura_cobertura: [
                {
                  nombre: "Daño Total Accidental",
                  id_system: "DAÑOTOTALACCIDENTAL",
                },
                {
                  nombre: "Falla Mecánica-Eléctrica",
                  id_system: "FALLA",
                },
                {
                  nombre: "Cambio Bateria",
                  id_system: "CAMBIOBATERIA",
                },
                {
                  nombre: "Garantia Extendida",
                  id_system: "GARANTIAEXTENDIDA",
                },
                {
                  nombre: "Daño Parcial",
                  id_system: "DAÑOPARCIAL",
                },
              ],
            },
          ],
        },
        fecha_vinculacion: "2022-11-04",
        valor_asegurado: 8399900,
        fecha_activacion: "2022-11-04",
        fecha_cancelacion: null,
        end_date: "2022-11-04",
        is_active: false,
        cancelation_reason: null,
        validity: 1,
        fecha_renovacion: null,
      },
    ],
  },
  {
    id: 190037,
    linea_uno: "1234567890",
    linea_dos: "",
    imei_uno: "234567890987653",
    imei_dos: "",
    dispositivo: {
      nombre: "Samsung Galaxy Z Fold 4",
      fabricante: {
        nombre: "Samsung",
      },
      id: 5226,
      size: "512",
      id_system: "SAMSUNG_GALAXY_Z_FOLD_4_512GB",
    },
    policy: [
      {
        id: 190042,
        plan: {
          id: 60,
          nombre: "Plan Basico 12 Meses",
          sponsor: {
            nombre: "Samsung Electronics Colombia",
          },
          allow_renewal: false,
          coverages: [
            {
              nombre: "Cobertura 1",
              mes_agrega: 0,
              mes_duracion: 0,
              tipos_cobertura_cobertura: [
                {
                  nombre: "Daño Total Accidental",
                  id_system: "DAÑOTOTALACCIDENTAL",
                },
                {
                  nombre: "Falla Mecánica-Eléctrica",
                  id_system: "FALLA",
                },
                {
                  nombre: "Cambio Bateria",
                  id_system: "CAMBIOBATERIA",
                },
                {
                  nombre: "Garantia Extendida",
                  id_system: "GARANTIAEXTENDIDA",
                },
                {
                  nombre: "Daño Parcial",
                  id_system: "DAÑOPARCIAL",
                },
              ],
            },
          ],
        },
        fecha_vinculacion: "2022-11-04",
        valor_asegurado: 8399900,
        fecha_activacion: "2022-11-04",
        fecha_cancelacion: null,
        end_date: "2022-11-04",
        is_active: false,
        cancelation_reason: null,
        validity: 1,
        fecha_renovacion: null,
      },
    ],
  },
  {
    id: 190069,
    linea_uno: "1231231231",
    linea_dos: null,
    imei_uno: "322123212112121",
    imei_dos: "",
    dispositivo: {
      nombre: "IPHONE 11 ",
      fabricante: {
        nombre: "Apple",
      },
      id: 3994,
      size: "64.0",
      id_system: "IPHONE_11_64GB",
    },
    policy: [
      {
        id: 190074,
        plan: {
          id: 19,
          nombre: "Itaú 35",
          sponsor: {
            nombre: "Itaú",
          },
          allow_renewal: false,
          coverages: [
            {
              nombre: "Itau",
              mes_agrega: 0,
              mes_duracion: 12,
              tipos_cobertura_cobertura: [
                {
                  nombre: "Hurto Simple",
                  id_system: "HURTOSIMPLE",
                },
                {
                  nombre: "Fractura Pantalla",
                  id_system: "FRACTURAPANTALLA",
                },
                {
                  nombre: "Hurto Calificado",
                  id_system: "HURTOCALIFICADO",
                },
                {
                  nombre: "Daño Total Accidental",
                  id_system: "DAÑOTOTALACCIDENTAL",
                },
              ],
            },
          ],
        },
        fecha_vinculacion: "2022-12-28",
        valor_asegurado: 2600000,
        fecha_activacion: "2022-12-28",
        fecha_cancelacion: "2023-06-11",
        end_date: "2023-12-28",
        is_active: false,
        cancelation_reason: "Prueba de cancelacion",
        validity: 1,
        fecha_renovacion: null,
      },
    ],
  },
  {
    id: 190417,
    linea_uno: "1231232323",
    linea_dos: "",
    imei_uno: "867903030262577",
    imei_dos: "",
    dispositivo: {
      nombre: "HUAWEI P20 LITE DUOS ",
      fabricante: {
        nombre: "Huawei",
      },
      id: 4037,
      size: "64.0",
      id_system: "HUAWEI_P20_LITE_DUOS_64GB",
    },
    policy: [
      {
        id: 190421,
        plan: {
          id: 34,
          nombre: "Plan 1 Daviplata",
          sponsor: {
            nombre: "Daviplata",
          },
          allow_renewal: false,
          coverages: [
            {
              nombre: "Cobertura 1",
              mes_agrega: 0,
              mes_duracion: 0,
              tipos_cobertura_cobertura: [
                {
                  nombre: "Hurto Calificado",
                  id_system: "HURTOCALIFICADO",
                },
                {
                  nombre: "Hurto Simple",
                  id_system: "HURTOSIMPLE",
                },
                {
                  nombre: "Daño Total Accidental",
                  id_system: "DAÑOTOTALACCIDENTAL",
                },
                {
                  nombre: "Fractura Pantalla",
                  id_system: "FRACTURAPANTALLA",
                },
              ],
            },
          ],
        },
        fecha_vinculacion: "2023-12-14",
        valor_asegurado: 399900,
        fecha_activacion: "2023-12-14",
        fecha_cancelacion: null,
        end_date: "2024-07-14",
        is_active: true,
        cancelation_reason: null,
        validity: 1,
        fecha_renovacion: null,
      },
    ],
  },
  {
    id: 191095,
    linea_uno: "1322312312",
    linea_dos: "",
    imei_uno: "351843260231897",
    imei_dos: "",
    dispositivo: {
      nombre: "Samsung Galaxy Z Fold 4",
      fabricante: {
        nombre: "Samsung",
      },
      id: 5225,
      size: "256",
      id_system: "SAMSUNG_GALAXY_Z_FOLD_4_256GB",
    },
    policy: [
      {
        id: 191098,
        plan: {
          id: 105,
          nombre: "Plan Basico 24 Meses",
          sponsor: {
            nombre: "Samsung Electronics Colombia",
          },
          allow_renewal: false,
          coverages: [
            {
              nombre: "BASICO24M",
              mes_agrega: 0,
              mes_duracion: 0,
              tipos_cobertura_cobertura: [
                {
                  nombre: "Daño Total Accidental",
                  id_system: "DAÑOTOTALACCIDENTAL",
                },
                {
                  nombre: "Falla Mecánica-Eléctrica",
                  id_system: "FALLA",
                },
                {
                  nombre: "Cambio Bateria",
                  id_system: "CAMBIOBATERIA",
                },
                {
                  nombre: "Garantia Extendida",
                  id_system: "GARANTIAEXTENDIDA",
                },
                {
                  nombre: "Daño Parcial",
                  id_system: "DAÑOPARCIAL",
                },
              ],
            },
          ],
        },
        fecha_vinculacion: "2024-03-01",
        valor_asegurado: 8399900,
        fecha_activacion: "2024-03-01",
        fecha_cancelacion: null,
        end_date: "2026-03-01",
        is_active: true,
        cancelation_reason: null,
        validity: 1,
        fecha_renovacion: null,
      },
    ],
  },
];

const planList = [
  {
    id: 191098,
    plan: {
      id: 105,
      nombre: "Plan Basico 24 Meses",
      sponsor: {
        nombre: "Samsung Electronics Colombia",
        logo_url: null,
      },
      allow_renewal: false,
    },
    fecha_vinculacion: "2024-03-01",
    valor_asegurado: 8399900,
    fecha_activacion: "2024-03-01",
    fecha_cancelacion: null,
    end_date: null,
    is_active: false,
    cancelation_reason: null,
    validity: 1,
  },
];

const coverageList = [
  {
    id: 312,
    nombre: "Daño Total Accidental",
  },
  {
    id: 313,
    nombre: "Falla Mecánica-Eléctrica",
  },
  {
    id: 314,
    nombre: "Cambio Bateria",
  },
  {
    id: 315,
    nombre: "Garantia Extendida",
  },
  {
    id: 318,
    nombre: "Daño Parcial",
  },
];

type IFormInput = {
  device: string;
  plan: string;
  coverage: string;
};

const schemaDevice = yup
  .object({
    device: yup.object().required("* Requerido"),
    plan: yup.object().required("* Requerido"),
    coverage: yup.object().required("* Requerido"),
  })
  .required();

const PlanStepComponent = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaDevice),
  });
  const { setCurrentStep } = useStepContext();

  const onSubmit: SubmitHandler<IFormInput> = (val) => {
    setCurrentStep(3);
  };

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
                options={deviceList}
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
                options={planList}
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
                options={coverageList}
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
