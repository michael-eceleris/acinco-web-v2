export interface IClientClaim {
  id: number;
  name: string;
  second_name: string;
  email: string;
  birthday: string;
  identification_number: string;
  identification_type: IIdentificationTypeClaim;
  gender: IGenderClaim;
  phone_number: string;
  address: string;
  identification_expedition_date: string;
}

export interface IGenderClaim {
  id: number;
  name: string;
}

export interface IIdentificationTypeClaim {
  name: string;
}

export interface IDeviceUserClaim {
  id: number;
  imei_uno: string | null;
  imei_dos: string | null;
  linea_uno: string | null;
  linea_dos: string | null;
  policy: IPolicyDeviceUserClaim[];
  dispositivo: IDeviceClaim;
}

export interface IDeviceClaim {
  id: number;
  nombre: string;
  size: string;
  fabricante: IDeviceManufactureClaim;
}

export interface IDeviceManufactureClaim {
  nombre: string;
}

export interface IPolicyDeviceUserClaim {
  id: number;
  fecha_activacion: string;
  fechan_renovacion: string | null;
  fecha_vinculacion: string;
  valor_asegurado: number;
  plan: IPlanDeviceUserClaim;
}

export interface IPlanDeviceUserClaim {
  id: number;
  nombre: string;
  sponsor: IPlanDeviceUserSponsor;
  coverages: ICoveragePlanDeviceUserClaim[];
}

export interface IPlanDeviceUserSponsor {
  nombre: string;
  logo_url: string;
}

export interface ICoveragePlanDeviceUserClaim {
  mes_agrega: number;
  mes_duracion: number;
  nombre: string;
  tipos_cobertura_cobertura: ICoverageDevicePlanUser[];
}

export interface ICoverageDevicePlanUser {
  id: number;
  nombre: string;
}

export interface IDocumentsCoveragesClaim {
  id: number;
  nombre_documento_save: string;
  required: boolean;
  file: File[];
}

export interface ICitiesClaim {
  id: number;
  nombre: string;
  departamento: IDepartmentCityClaim;
}

export interface IDepartmentCityClaim {
  nombre: string;
}

export interface ICreateClaim {
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
