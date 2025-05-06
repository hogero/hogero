import { PlanesInt } from "./interfaces";

export const isProduction = process.env.NODE_ENV === "production";
export const API_GEN = isProduction
  ? "https://hogeroserver-production.up.railway.app"
  : "http://localhost:4000";
export const whatsappNumber = "+527297512152";
export const whatsappNumber2 = "7297512152";
export const defaultMessage = "Hola, quiero más información sobre los servicios.";
export const emailSubject = "Consulta sobre servicios de gerontología";
export const emailHogero = "hogerohome@gmail.com";
export const URL_GP = isProduction
  ? "https://hogero.github.io/hogero"
  : "http://localhost:3000";

export const LINKS = [
  {
    name: "Inicio",
    href: "/",
    icon: ""
  },
  {
    name: "Servicios",
    href: "/servicios",
    icon: ""
  },
  {
    name: "Agendar cita",
    href: "/agendas/cita",
    icon: ""
  },
  {
    name: "Consultar cita",
    href: "/agendas",
    icon: ""
  },
  {
    name: "Contactanos",
    href: "/contacto",
    icon: ""
  }
];
