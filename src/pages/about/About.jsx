import React from "react";

// styles
import styles from "./About.module.css";

// Profile image
import profileImage from "../../assets/images/profile_image.png";
// Main title import
import Maintitle from "../../components/layout/home/mainTitle/Maintitle";
import AboutArticle from "../../components/layout/about/AboutArticle/AboutArticle";

// Articles images && icons
import quienesSomosIcon from "../../assets/icons/about_quienes_somos_icon.svg";
import sobreMiIcon from "../../assets/icons/about_sobre_mi.svg";
import miTrabajoIcon from "../../assets/icons/about_mi_trabajo_actual.svg";
import quienesSomosImage from "../../assets/images/about_quienes_somos.png";
import sobreMiImage from "../../assets/images/about_sobre_mi.png";
import miTrabajoImage from "../../assets/images/about_mi_trabajo_actual.png";

const aboutData = [
  {
    id: 1,
    icon: quienesSomosIcon,
    title: "Quienes somos",
    description:
      "Somos ProfileUp BA, una consultora comprometida con la búsqueda y selección de personal, motivados en brindar a nuestros clientes una experiencia que se adapte a las necesidades de sus organizaciones. Nos dedicamos a la detección de oportunidades de mejora con un seguimiento cercano, fomentando la marca empleadora y la atracción del talento.",
    image: quienesSomosImage,
  },
  {
    id: 2,
    icon: sobreMiIcon,
    title: "Sobre mí",
    description:
      "Mi nombre es Matías Martinez, soy Licenciado en Psicología y Magíster en Psicología Organizacional con Orientación Gerencial por la UAI. Inicié mi recorrido en el área de Recursos Humanos en una cátedra de Técnicas de Evaluación Diagnóstica en la Universidad de Buenos Aires, participando como alumno desde el año 2016 hasta ocupar mi cargo docente desde marzo 2020 hasta febrero 2022.",
    image: sobreMiImage,
  },
  {
    id: 3,
    icon: miTrabajoIcon,
    title: "Mi trabajo actual",
    description:
      "Actualmente, continúo mi labor como Talent Acquisition en la empresa donde trabajo, además de ofrecer nuestros servicios a diversos clientes que requieran de nuestra experiencia.",
    image: miTrabajoImage,
  },
];

const About = () => {
  return (
    <div>
      <section className={styles.about_banner}>
        <div className={styles.about_banner_wrapper}>
          <Maintitle
            markedtext="MATÍAS MARTÍNEZ"
            title="Sobre mí, y mi carrera"
            description="Compartiré mi trayectoria, valores y pasiones, para que descubras cómo aplico mis habilidades en el ámbito profesional y conozcas mi lado más humano."
          ></Maintitle>

          <div className={styles.profile_image}>
            <img src={profileImage} alt="profile" />
          </div>
        </div>
      </section>

      <div className={styles.about_article_banner}>
        {aboutData.map((item) => (
          <AboutArticle
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
