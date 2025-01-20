import { PlanesInt } from "./interfaces";

const isProduction = process.env.NODE_ENV === "production";
export const API_GEN = isProduction
  ? "https://hogeroserver-production.up.railway.app"
  : "http://localhost:4000";
export const whatsappNumber = "+527297512152";
export const defaultMessage = "Hola, quiero más información sobre los servicios.";
export const emailSubject = "Consulta sobre servicios de gerontología";
export const emailHogero = "hogerohome@gmail.com";
export const URL_GP = isProduction
  ? "https://hogero.github.io/hogero"
  : "http://localhost:3000";
export const PLANES: PlanesInt[] = [
  {
    id: 1,
    title: "Evaluación Inicial",
    description: "Sesión inicial para evaluar necesidades y factores de riesgo del adulto mayor. Recomendada como primera sesión, ya que, es indispensable conocer al paciente.",
    features: ["2 horas", "Entrevista inicial e historia de vida", "Evaluación cognitiva, física y psicosocial", "Plan personalizado de atención"],
    cost: "$850.00/sesión",
    duration: 2,
  },
  {
    id: 2,
    title: "Estimulación Cognitiva",
    description: "Diseño para mantener tu cerebro activo mejorando múltiples dominios.",
    features: ["1 hora", "Evaluación cognitiva exhaustiva", "Ejercicios de memoria", "Actividades de resolución de problemas", "Ejercicios de atención y concentración"],
    cost: "$550.00/sesión",
    duration: 1,
  },
  {
    id: 3,
    title: "Activación Física",
    description: "Plan enfocado en mantener y mejorar la movilidad y condición física.",
    features: ["2 horas", "Rutinas de movilidad articular", "Ejercicios de fuerza y equilibrio", "Técnicas de respiración y relajación", "Asesoría en ergonomía", "Monitoreo personalizado"],
    cost: "$750.00/sesión",
    duration: 2,
  },
  {
    id: 3,
    title: "Activación Física en grupos",
    description: "Plan enfocado en mantener y mejorar la movilidad y condición física.",
    features: ["2 horas", "Rutinas de movilidad articular", "Ejercicios de fuerza y equilibrio", "Técnicas de respiración y relajación", "Asesoría en ergonomía", "Monitoreo personalizado"],
    cost: "$1000.00/sesión",
    duration: 2,
  },
  {
    id: 4,
    title: "Cuidado Integral Avanzado",
    description: "Un enfoque completo para la estimulación física y cognitiva en profundidad.",
    features: ["3 horas", "Plan de estimulación cognitiva avanzado", "Rutinas físicas adaptadas", "Técnicas de relajación mental", "Monitoreo y ajustes en tiempo real", "Revisión mensual de progreso"],
    cost: "$1,000.00/sesión",
    duration: 3,
  },
  {
    id: 5,
    title: "Educación y Sensibilización a Familiares",
    description: "Sesión breve para orientar y capacitar a familiares en el cuidado del adulto mayor.",
    features: ["1 hora", "Técnicas básicas de cuidado", "Gestión del estrés familiar", "Reconocimiento de señales de alarma", "Comunicación efectiva", "Recomendaciones prácticas"],
    cost: "$550.00/sesión",
    duration: 1,
  }
];