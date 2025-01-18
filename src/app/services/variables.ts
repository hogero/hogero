import { PlanesInt } from "./interfaces";

export const API_GEN = "https://hogeroserver-production.up.railway.app";
export const whatsappNumber = "+527297512152";
export const defaultMessage = "Hola, quiero más información sobre los servicios.";
export const emailSubject = "Consulta sobre servicios de gerontología";
export const emailHogero = "hogerohome@gmail.com";
export const URL_GP = "https://hogero.github.io/hogero"
export const PLANES: PlanesInt[] = [
  {
    id: 1,
    title: "Evaluación y Diagnóstico",
    description: "Sesión inicial para evaluar las necesidades y capacidades del adulto mayor. Altamente recomendada como primer sesión.",
    features: ["2 horas", "Entrevista inicial y análisis de historial", "Evaluación cognitiva", "Diagnóstico físico y motriz", "Reporte detallado con observaciones", "Recomendaciones personalizadas"],
    cost: "$900.00/sesión",
    duration: 2,
  },
  {
    id: 2,
    title: "Estímulo Cognitivo Básico",
    description: "Sesión diseñada para fortalecer habilidades cognitivas esenciales.",
    features: ["1 hora", "Ejercicios de memoria", "Actividades de resolución de problemas", "Estimulación sensorial", "Ejercicios de atención y concentración", "Guía profesional personalizada"],
    cost: "$550.00/sesión",
    duration: 1,
  },
  {
    id: 3,
    title: "Activación Física Guiada",
    description: "Plan enfocado en mantener y mejorar la movilidad y condición física.",
    features: ["2 horas", "Rutinas de movilidad articular", "Ejercicios de fuerza y equilibrio", "Técnicas de respiración y relajación", "Asesoría en ergonomía", "Monitoreo personalizado"],
    cost: "$750.00/sesión",
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
    title: "Cuidados Paliativos Personalizados",
    description: "Atención enfocada en mejorar la calidad de vida en situaciones críticas.",
    features: ["4 horas", "Acompañamiento emocional", "Asistencia en actividades básicas", "Supervisión de medicamentos", "Apoyo psicológico para el adulto mayor", "Guía para familiares"],
    cost: "$1,200.00/sesión",
    duration: 4,
  },
  {
    id: 6,
    title: "Educación y Sensibilización a Familiares",
    description: "Sesión breve para orientar y capacitar a familiares en el cuidado del adulto mayor.",
    features: ["1 hora", "Técnicas básicas de cuidado", "Gestión del estrés familiar", "Reconocimiento de señales de alarma", "Comunicación efectiva", "Recomendaciones prácticas"],
    cost: "$550.00/sesión",
    duration: 1,
  },
  {
    id: 7,
    title: "Programa de Prevención",
    description: "Sesión dedicada a fomentar hábitos y actividades preventivas para el bienestar general.",
    features: ["2 horas", "Evaluación inicial", "Diseño de rutinas personalizadas", "Recomendaciones alimenticias", "Actividades de socialización", "Monitoreo de progreso"],
    cost: "$850.00/sesión",
    duration: 2,
  },
  {
    id: 8,
    title: "Terapia Integral Extendida",
    description: "Sesión completa para trabajar múltiples aspectos del bienestar físico y emocional.",
    features: ["6 horas", "Plan integral físico y cognitivo", "Técnicas avanzadas de relajación", "Actividades recreativas personalizadas", "Supervisión médica", "Reporte detallado"],
    cost: "$1,500.00/sesión",
    duration: 6,
  },
];