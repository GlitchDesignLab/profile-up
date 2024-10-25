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
            <h5>Información</h5>
            <ul className="list-unstyled d-flex flex-column align-items-center gap-1">
              <li>
                <a href="#!">contacto@mail.com</a>
              </li>
              <li>
                <a href="#!">(+54) 11 3454-4545</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-md-0 mb-3">
            <h5>Contacto</h5>
            <ul className="list-unstyled d-flex flex-column align-items-center gap-1">
              <li>
                <a href="#!">contacto@mail.com</a>
              </li>
              <li>
                <a href="#!">(+54) 11 3454-4545</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3 d-flex flex-column align-items-center">
            <h5>Redes sociales</h5>
            <ul className="list-unstyled d-flex flex-column align-items-start gap-1">
              <li>
                <a href="#!">
                  <IconText icon={linkedinIcon}>Linkedin</IconText>
                </a>
              </li>
              <li>
                <a href="#!">
                  <IconText icon={instagramIcon}>Instagram</IconText>
                </a>
              </li>
              <li>
                <a href="#!">
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
