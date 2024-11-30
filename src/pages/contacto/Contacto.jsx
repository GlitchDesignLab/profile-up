import styles from "./Contacto.module.css";
import React from "react";
import ContactForm from "../../components/features/contactForm/ContactForm";

const Contacto = () => {
  return (
    <div className={styles.contact}>
      <div>
        <h1>Ponete en contacto con nosotros</h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contacto;
