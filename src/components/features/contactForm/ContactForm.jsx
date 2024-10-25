import styles from "./ContactForm.module.css";
import ContactFormField from "../../ui/contactFormField/ContactFormField";
import Toast from "../../ui/toast/Toast";
import { useState } from "react";
import { validateContact } from "./contact.validator";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errorForm, setErrorForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [toast, setToast] = useState({
    visible: false,
    message: "",
    type: "",
  });

  const showToast = (message, type) => {
    setToast({ visible: true, message, type });
    setTimeout(() => {
      setToast({ visible: false, message: "", type: "" });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorForm({ ...errorForm, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateContact(formData);
    setErrorForm(errors);

    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) {
      return;
    }
    setIsLoading(true);
    // TODO => send data to server
    // Simulando una llamada a una API
    setTimeout(() => {
      try {
        throw new Error("Error sending data");
        showToast("Se enviaron los datos correctamente", "success");
      } catch (error) {
        console.log(error.message);
        showToast("Error al enviar los datos", "error");
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <ContactFormField
          id="contact-name"
          label="Nombre"
          name="name"
          placeholder="Juan Perez"
          value={formData.name}
          handleChange={handleChange}
          error={errorForm.name}
        />
        <ContactFormField
          id="contact-phone"
          label="Teléfono"
          name="phone"
          placeholder="XXXXXXXXXX"
          value={formData.phone}
          handleChange={handleChange}
          error={errorForm.phone}
        />
        <ContactFormField
          id="contact-email"
          label="Email"
          name="email"
          placeholder="abc@de.com"
          value={formData.email}
          handleChange={handleChange}
          error={errorForm.email}
        />
        <ContactFormField
          id="contact-message"
          label="Mensaje"
          name="message"
          placeholder="Escriba su consulta..."
          value={formData.message}
          handleChange={handleChange}
          textarea
          error={errorForm.message}
        />
        <button type="submit" disabled={isLoading}>
          Enviar mensaje
        </button>
      </form>
      <Toast
        message={toast.message}
        type={toast.type}
        visible={toast.visible}
      />
    </>
  );
}
