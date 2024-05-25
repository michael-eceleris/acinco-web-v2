export interface IClientInsurrance {
  id: number;
  name: string;
  second_name: string;
  email: string;
  birthday: string;
  identification_number: string;
  identification_type: IIdentificationTypeInsurrance;
  gender: IGenderInsurrance;
  phone_number: string;
  address: string;
  identification_expedition_date: string;
}

export interface IGenderInsurrance {
  id: number;
  name: string;
}

export interface IIdentificationTypeInsurrance {
  name: string;
}

export interface IDeviceUserInsurrance {
  id: number;
  imei_uno: string | null;
  imei_dos: string | null;
  linea_uno: string | null;
  linea_dos: string | null;
  policy: IPolicyDeviceUserInsurrance[];
  dispositivo: IDeviceInsurrance;
}

export interface IDeviceInsurrance {
  id: number;
  nombre: string;
  size: string;
  fabricante: IDeviceManufactureInsurrance;
}

export interface IDeviceManufactureInsurrance {
  nombre: string;
}

export interface IPolicyDeviceUserInsurrance {
  id: number;
  fecha_activacion: string;
  fechan_renovacion: string | null;
  fecha_vinculacion: string;
  valor_asegurado: number;
  plan: IPlanDeviceUserInsurrance;
}

export interface IPlanDeviceUserInsurrance {
  id: number;
  nombre: string;
  sponsor: IPlanDeviceUserSponsor;
  coverages: ICoveragePlanDeviceUserInsurrance[];
}

export interface IPlanDeviceUserSponsor {
  nombre: string;
  logo_url: string;
}

export interface ICoveragePlanDeviceUserInsurrance {
  mes_agrega: number;
  mes_duracion: number;
  nombre: string;
  tipos_cobertura_cobertura: ICoverageDevicePlanUser[];
}

export interface ICoverageDevicePlanUser {
  id: number;
  nombre: string;
}

export interface IDocumentsCoveragesInsurrance {
  id: number;
  nombre_documento_save: string;
  required: boolean;
  file: File[];
}

export interface ICitiesInsurrance {
  id: number;
  nombre: string;
  departamento: IDepartmentCityInsurrance;
}

export interface IDepartmentCityInsurrance {
  nombre: string;
}

export interface ICreateInsurrance {
  cliente_id: number | undefined;
  imei_dispositivo_one: string | null | undefined;
  plan_id: number | undefined;
  tipo_cobertura_cobertura_id: number | undefined;
  tipo_ticket_id: 1;
  mensaje_ticket: string | null;
  linea_siniestro_one: string | null;
  fecha_siniestro: string;
  genero_reclamante_id: number | undefined;
  ciudad_id: number | undefined;
}
