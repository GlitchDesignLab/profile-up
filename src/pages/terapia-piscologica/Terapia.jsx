import React from "react";
import ServicesBanner from "../../components/layout/servicesBanner/ServicesBanner";
import terapiaserivce from "../../assets/images/terapia.png";
import ServiceWrapper from "../../components/layout/wrapper/ServiceWrapper";
import Acordion from "../../components/ui/acordion/Acordion";

const Terapia = () => {
  const acordeonlist = [
    {
      key: 1,
      title: "¿Qué modalidad tienen las terapias?",
      description:
        "Tenemos modalidad de terapia virtual pudiendo conectarte desde cualquier parte del mundo desde un dispositivo móvil u ordenador. También podrán consultar disponibilidad para sesiones presenciales.",
    },
    {
      key: 2,
      title: "¿Cómo es el tratamiento?",
      description:
        "El tratamiento se encuentra enmarcado en la Terapia Cognitiva (TCC) enfocada en la problemática en cuestión, aplicando tanto técnicas puntuales como test psicométricos para evaluar las diferentes áreas “problema” que el consultante lleve al espacio profesional. La duración de cada sesión ronda entre los 45 minutos a la hora máximo y estos aspectos se delimitarán con el profesional.",
    },
    {
      key: 3,
      title: "¿Cuánto tiempo dura el tratamiento?",
      description:
        "No hay un tiempo determinado, ya que cada consulta y situación que los consultantes traen como motivo de consulta es variada y el proceso interno depende de cada persona. Se sugiere al menos contar con un espacio terapéutico de 3 meses con una frecuencia semanal.",
    },
    {
      key: 4,
      title: "¿Como agendo una sesión?",
      description:
        "Podes comunicarte de manera telefónica o enviar tu consulta por mail. Dejanos tu motivo de consulta como para dar una guía del tema que te gustaría abordar sin mucho detalle; horarios posibles para la sesión; modalidad que estás buscando y en caso que sea presencial indicanos zonas de facilidad de acceso.",
    },
  ];

  return (
    <ServiceWrapper>
      <>
        <ServicesBanner
          title={
            <>
              Terapia
              <br />
              psicológica
            </>
          }
          prop1="Organizá tu vida"
          prop2="Gestioná tus tiempos"
          image={terapiaserivce}
          link="/#"
          btnLabel="Agendar una sesión"
        />
        <Acordion acordeonlist={acordeonlist} />
      </>
    </ServiceWrapper>
  );
};

export default Terapia;
