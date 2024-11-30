// Crucial
import React from "react";

// Navigation library
import { Link, NavLink } from "react-router-dom";

// Component CSS
import styles from "./Navbar.module.css";

// Bootstrap navbar
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// Logo image import
import logo from "../../../assets/images/profielUp_logo.png";

const NavigationBar = () => {
  return (
    <header className={styles.header}>
      <Navbar expand="lg" className="bg-body-tertiary p-3">
        <Link to="/" className={styles.navbar_brand}>
          <img src={logo} alt="ProfileUp logo" className={styles.logo} />
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav id="nav_links_container">
            <NavLink to="/" className={`nav-link ${styles.link_margin}`}>
              Inicio
            </NavLink>

            <NavDropdown
              title="Servicios"
              id="basic-nav-dropdown"
              className={styles.link_margin}
            >
              <NavLink to="/rrhh" className="dropdown-item">
                RRHH
              </NavLink>

              <NavLink to="/terapia-psicologica" className="dropdown-item">
                Terapia
              </NavLink>

              <NavLink to="/asesoria-consultoria" className="dropdown-item">
                Asesoria
              </NavLink>

              <NavLink
                to="/psicotecnico-aptopsicologico"
                className="dropdown-item"
              >
                Psicotécnico
              </NavLink>

              <NavLink
                to="/capacitaciones-entrevistas"
                className="dropdown-item"
              >
                Capacitaciones
              </NavLink>
            </NavDropdown>

            <NavLink to="/about" className={`nav-link ${styles.link_margin}`}>
              Sobre mí
            </NavLink>

            <NavLink
              to={"/contacto"}
              className={`nav-link ${styles.link_margin}`}
            >
              Contacto
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default NavigationBar;
