import { ICredentialsClaims } from "../../types/authorization";

export interface IUseCreateClaimService {
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

export interface IUseCreateClaimHeaders {
  headers: ICredentialsClaims;
}
