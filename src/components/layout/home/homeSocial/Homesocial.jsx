// Crucial
import React from "react";

// Homesocial CSS
import styles from "./Homesocial.module.css";

// Image
import phoneguy from "../../../../assets/images/phone_guy_home.png";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Homesocial = () => {
  return (
    <div className={styles.homeSocial_container}>
      <img src={phoneguy} alt="joven hablando por teléfono" />

      <div className={styles.homeSocial_container_text}>
        <p className={styles.homeSocial_container_text_span}>
          Mantente al Día con Nosotros
        </p>

        <h2>Conéctate con Nuestro Talento</h2>

        <p>
          En ProfileUp, nos apasiona conectar talento y oportunidades. Síguenos
          en nuestras redes sociales para estar al tanto de las últimas
          novedades en el mundo de los recursos humanos, acceder a consejos
          profesionales, y descubrir cómo fomentamos el crecimiento personal y
          profesional de nuestros colaboradores. Únete a nuestra comunidad y sé
          parte de una red que valora el desarrollo y la innovación.
        </p>

        <ul className={styles.homeSocial_icons_container}>
          <li>
            <a
              href="https://www.instagram.com/profileup_buenosaires/profilecard/?igsh=MWFudTRkamRkbGFsOA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/mat%C3%ADasamart%C3%ADnez?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </a>
          </li>

          <li>
            <a
              href="https://wa.me/541153332684?text=Hola!,%20Quiero%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20ProfileUp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Homesocial;
