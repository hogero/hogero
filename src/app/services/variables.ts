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

export const PLANES: PlanesInt[] = [
  {
    id: 1,
    title: "Evaluación Inicial",
    description: "Diseñada para evaluar necesidades y factores de riesgo de la persona mayor como el motivo de consulta. Imperativa como primera sesión para conocer al paciente.",
    features: ["2 horas", "Entrevista inicial e historia de vida", "Evaluación integral", "Detección de factores de riesgo"],
    cost: "$700.00/sesión",
    duration: 2,
  },
  {
    id: 2,
    title: "Estimulación Cognitiva",
    description: "Diseñada para mantener tu cerebro activo mejorando múltiples dominios cognitivos(memoria, orientación, atención, concentración, etc).",
    features: ["1 hora", "Actividades de memoria", "Actividades de resolución de problemas", "Actividades de atención y concentración", "Actividades recreativas"],
    cost: "$550.00/sesión",
    duration: 1,
  },
  {
    id: 3,
    title: "Actividad Física",
    description: "Diseñada en mantener y mejorar la capacidad física de la persona mayor.",
    features: ["1 hora", "Técnicas de respiración y relajación", "Ejercicios de fuerza, equilibrio, flexibilidad y coordinación", "Terapia ocupacional", "Actividades lúdicas"],
    cost: "$550.00/sesión",
    duration: 1,
  },
  {
    id: 4,
    title: "Apoyo a cuidadores y familiares",
    description: "Diseñada para el autocuidado de las personas que cuidan a la persona mayor promoviendo un entorno equilibrado y saludable para todos.",
    features: ["2 horas", "Entrevista con el cuidador/familiar", "Evaluación de sobrecarga", "Evaluación de ansiedad y depresión", "Comunicación asertiva", "Reconocimiento de señales de alarma"],
    cost: "$700.00/sesión",
    duration: 2,
  },
  {
    id: 5,
    title: "Educación y Sensibilización",
    description: "Diseñada para profundizar en el conocimiento sobre gerontología, envejecimiento, vejez y el cuidado integral de las personas mayores.",
    features: ["1 hora", "Aspectos generales del envejecimiento", "Derechos de las personas mayores", "Edadismo: Prejuicios y estereotipos", "Promoción a la salud"],
    cost: "$550.00/sesión",
    duration: 1,
  },
  {
    id: 6,
    title: "Dementia Friends",
    description: "Iniciativa global por la Alzheimer Society, tiene como objetivo principal eliminar el estigma asociado a la demencia y cambiar la percepción de la sociedad hacia esta enfermedad.",
    features: ["2 horas", "Consulta por llamada télefonica para agendar una cita", "Via remota o presencial", "Mínimo 10 personas"],
    cost: "Gratis",
    duration: 2,
    noAgenda: true,
  }
];