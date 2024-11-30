// Crucial
import React from "react";

// Navigation library
import { Link, NavLink } from "react-router-dom";

// Logo image import
import logoLight from "../../../assets/images/profielUp_logo-light.png";

// icons social media
import linkedinIcon from "../../../assets/icons/linkedin.svg";
import instagramIcon from "../../../assets/icons/instagram.svg";
import whatsappIcon from "../../../assets/icons/whatsapp.svg";

// Footer CSS
import styles from "./Footer.module.css";
import IconText from "../../ui/iconText/IconText";

const Footer = () => {
  return (
    <footer className={`page-footer font-small blue pt-4 ${styles.footer}`}>
      <div
        className={`container-fluid text-center text-md-left ${styles.footer_main_content}`}
      >
        <div className="row">
          <div className="col-md-3 mt-md-0 mt-3">
            <div className={styles.logo_footer_container}>
              <img
                src={logoLight}
                alt="logo ProfileUp"
                className={styles.logo_footer}
              />
            </div>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3">
            <span>Servicios</span>
            <ul className="list-unstyled d-flex flex-column align-items-center gap-1">
              <li>
                <Link to="/rrhh" replace>
                  Recursos humanos
                </Link>
              </li>
              <li>
                <Link to="/terapia-psicologica" replace>
                  Terapia psicológica
                </Link>
              </li>
              <li>
                <Link to="/asesoria-consultoria" replace>
                  Asesoría
                </Link>
              </li>
              <li>
                <Link to="/psicotecnico-aptopsicologico" replace>
                  Psicotécnico
                </Link>
              </li>
              <li>
                <Link to="/capacitaciones-entrevistas" replace>
                  Capacitaciones
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-md-0 mb-3">
            <span>Contacto</span>
            <ul className="list-unstyled d-flex flex-column align-items-center gap-1">
              <li>
                <a href="mailto:profileupba@gmail.com" target="blank">
                  profileupba@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/541153332684?text=Hola!,%20Quiero%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20ProfileUp"
                  target="blank"
                >
                  (+54) 9 11 5333-2684
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3 d-flex flex-column align-items-center">
            <span>Redes sociales</span>
            <ul className="list-unstyled d-flex flex-column align-items-start gap-1">
              <li>
                <a
                  href="https://www.linkedin.com/in/mat%C3%ADasamart%C3%ADnez?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="blank"
                >
                  <IconText icon={linkedinIcon}>Linkedin</IconText>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/profileup_buenosaires/profilecard/?igsh=MWFudTRkamRkbGFsOA=="
                  target="blank"
                >
                  <IconText icon={instagramIcon}>Instagram</IconText>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/541153332684?text=Hola!,%20Quiero%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20ProfileUp"
                  target="blank"
                >
                  <IconText icon={whatsappIcon}>Whatsapp</IconText>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <div className={styles.footer_copyright}>
        Todos los derechos reservados a Matías Martínez © Copyright{" "}
        {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
