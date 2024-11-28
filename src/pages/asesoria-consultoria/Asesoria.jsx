import React from "react";
import ServicesBanner from "../../components/layout/servicesBanner/ServicesBanner";
import asesoriaservice from "../../assets/images/asesoria_banner.png";
import ServiceWrapper from "../../components/layout/wrapper/ServiceWrapper";
import Acordion from "../../components/ui/acordion/Acordion";
import Carrousel from "../../components/layout/carrousel/Carrousel";
import ServiceIconCards from "../../components/features/serviceIconCards/serviceIconCards";
import profIcon from "../../assets/icons/profesionalismo_icon.svg";

const Asesoria = () => {
  const acordeonlist = [
    {
      key: 1,
      title: "¿Cómo se gestionan los procesos de asesoría?",
      description:
        "Iniciamos el recorrido desde el momento cero de la consulta haciendo una reunión o llamada telefónica para poder conocernos. Una vez que tenemos en cuenta el motivo particular de la consulta se sugiere hacer una visita presencial al emprendimiento/empresa para conocer un poco de su cultura de trabajo y la dinámica laboral.Desde ese momento buscaremos brindar herramientas diagnósticas y un relevamiento holístico de la organización, para el cual necesitaremos el acompañamiento y la información certera para dar un correcto acercamiento. Luego evaluar de manera objetiva el proceso actual de la empresa y luego de la intervención continua en el tiempo, aspecto necesario para una transformación cultural, se realizaría una nueva medición.El proceso puede servir también para brindar herramientas y couchear a líderes para mejorar en sus Soft Skills en el manejo del personal, brindando asesoramiento personalizado y cercano en todo momento del proceso.",
    },
    {
      key: 2,
      title: "¿Cuáles son los beneficios?",
      description:
        "El principal beneficio será un cambio en la manera de ver y hacer en la organización, si bien estos aprendizajes particulares pueden trasladarse a los ámbitos personales si se logra una adecuada gestión de las herramientas. Estos aspectos deberían poder mejorar la dinámica organizacional, sus interacciones interpersonales; disminuir la rotación y mejorar el clima de trabajo cotidiano.",
    },
    {
      key: 3,
      title: "¿Qué metodologías utilizan?",
      description:
        "Medición de clima laboral y aspectos de liderazgo; análisis FODA; implementación de manuales de procedimientos; transformación cultural mediante calendario de comunicación interna y re-branding; análisis de métricas y KPI´s; procedimientos de 5S´s, entre otros.",
    },
  ];
  const iconCards = [
    {
      id: 1,
      title: "Profesionalismo",
      // description: "Lorem impsum asdkjaslkd sadkjslkadj sadj.",
      src: profIcon,
    },
    {
      id: 2,
      title: "Análisis de competencias",
      // description: "Lorem impsum asdkjaslkd sadkjslkadj sadj.",
      src: profIcon,
    },
    {
      id: 3,
      title: "Efectividad",
      // description: "Lorem impsum asdkjaslkd sadkjslkadj sadj.",
      src: profIcon,
    },
    {
      id: 4,
      title: "Análisis de casos",
      // description: "Lorem impsum asdkjaslkd sadkjslkadj sadj.",
      src: profIcon,
    },
    {
      id: 5,
      title: "Eficiencia",
      // description: "Lorem impsum asdkjaslkd sadkjslkadj sadj.",
      src: profIcon,
    },
  ];

  return (
    <ServiceWrapper>
      <>
        <ServicesBanner
          title={
            <>
              Asesoría y
              <br />
              consultoría
            </>
          }
          prop1="Mejora el desempeño de tu equipo"
          prop2="Estate al tanto de las nuevas tendencias en el área"
          image={asesoriaservice}
          link="/#"
          btnLabel="Realizar consulta"
        />
        <ServiceIconCards
          cards={iconCards}
          title="¿Cómo te ayudamos?"
          description="Poder estar al pendiente de las tendencias puede ser desafiante, por eso es vital actualizarse"
        />
        <Acordion acordeonlist={acordeonlist} />
      </>
      <Carrousel />
    </ServiceWrapper>
  );
};

export default Asesoria;
