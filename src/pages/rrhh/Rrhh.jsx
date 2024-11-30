import React from "react";

import ServicesBanner from "../../components/layout/servicesBanner/ServicesBanner";
import rrhhService from "../../assets/images/rrhhService.png";
import ServiceWrapper from "../../components/layout/wrapper/ServiceWrapper";
import Acordion from "../../components/ui/acordion/Acordion";
import Carrousel from "../../components/layout/carrousel/Carrousel";
import profIcon from "../../assets/icons/profesionalismo_icon.svg";
import ServiceIconCards from "../../components/features/serviceIconCards/serviceIconCards";

const Rrhh = () => {
  const acordeonlist = [
    {
      key: 1,
      title: "¿Cómo organizan la gestion del proceso?",
      description:
        "El proceso inicia con un contacto inicial de parte de la empresa ó particular que se encuentre en la búsqueda de personal. Se pauta una reunión para conversar sobre la vacante, relevamiento de los puntos principales del perfil y las tareas a cubrir y los aranceles de la búsqueda para iniciarla lo antes posible.",
    },
    {
      key: 2,
      title: "¿En cuánto tiempo se ven resultados?",
      description:
        "Una vez publicada la vacante se buscará filtrar los perfiles que se encuentren más cercanos al requerimiento de la empresa. Según la demanda de curriculums, podría obtenerse el resultado en 2 semanas más tardar. Se puede brindar también el servicio de psicotécnico para complementar la selección laboral.",
    },
    {
      key: 3,
      title: "¿Cómo se gestionan las entrevistas?",
      description:
        "Una vez realizado el proceso de Screening inicial de los cv´s, se pautarán las entrevistas virtuales con los candidatos y se gestionará un informe de las competencias y experiencias de los mismos. Si la empresa decide avanzar con ellos, la consultora se encargará de gestionar las entrevistas con el cliente de manera virtual o presencial según predilección de la empresa.",
    },
    {
      key: 4,
      title: "¿Qué métodos utilizan?",
      description:
        "Utilizamos servicios de posteo en redes sociales / publicación de avisos puntuales / programa de referidos y base de datos de la consultora de postulantes anteriores que han trabajado con nosotros. ",
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
              RRHH &
              <br />
              selección laboral
            </>
          }
          prop1="Otimiza tu búsqueda"
          prop2="Encuentra al profesional adecuado"
          image={rrhhService}
          link="/#"
          btnLabel="Realizar consulta"
        />
        <ServiceIconCards
          cards={iconCards}
          title="¿Qué te ofrecemos?"
          description="Seleccionar al profesional indicado, es vital para un progreso sostenido"
        />
        <Acordion acordeonlist={acordeonlist} />
      </>
      <Carrousel />
    </ServiceWrapper>
  );
};

export default Rrhh;
