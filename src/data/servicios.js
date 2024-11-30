import imagenterapia from "../assets/images/terapia_card_image.png";
import imageasesoria from "../assets/images/asesoria_card_image.png";
import imageconsultoria from "../assets/images/consultoria_card_image.png";
import imageRRHH from "../assets/images/rrhh_card_image.png";
import imagepsicotecnico from "../assets/images/psicotecnico_card_image.png";
import imageorientacionprofesional from "../assets/images/orientacionProfesional_card_image.png";

export const servicios = [
  {
    id: 1,
    src: imagenterapia,
    name: "Terapia",
    description: "Espacio de apoyo emocional para el bienestar personal.",
    link: "/terapia-psicologica",
  },
  {
    id: 2,
    src: imageasesoria,
    name: "Asesorías",
    description: "Guía experta para resolver dudas y mejorar decisiones.",
    link: "/asesoria-consultoria",
  },
  {
    id: 3,
    src: imageconsultoria,
    name: "Consultorías",
    description: "Soluciones personalizadas para tus desafíos profesionales.",
    link: "/asesoria-consultoria",
  },
  {
    id: 4,
    src: imageRRHH,
    name: "RRHH",
    description: "Gestión estratégica para optimizar el talento humano.",
    link: "/rrhh",
  },
  {
    id: 5,
    src: imagepsicotecnico,
    name: "Psicotécnico",
    description: "Evaluaciones para selección y desarrollo profesional.",
    link: "/psicotecnico-aptopsicologico",
  },
  {
    id: 6,
    src: imageorientacionprofesional,
    name: "Orientación profesional",
    description: "Ayuda para definir tu camino laboral y académico.",
    link: "/capacitaciones-entrevistas",
  },
];
