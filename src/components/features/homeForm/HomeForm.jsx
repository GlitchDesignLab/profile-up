import styles from "./HomeForm.module.css";
import FormField from "../../ui/formField/FormField";
import { useState } from "react";
import Checkbox from "../../ui/checkbox/Checkbox";

export default function HomeForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    conditions: false,
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, conditions: e.target.checked });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://formspree.io/f/mwpkrrwy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        conditions: formData.conditions,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error); // Aquí puedes manejar el error
      });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <span className={styles.title}>¿Querés obtener más información?</span>
      <FormField
        id="home_name"
        name="name"
        label="Nombre:"
        type="text"
        placeholder="Juan Perez"
        value={formData.name}
        handleChange={handleChange}
        required
      />
      <FormField
        id="home_email"
        name="email"
        label="Email:"
        type="email"
        placeholder="example@ex.com"
        value={formData.email}
        handleChange={handleChange}
        required
      />
      <FormField
        id="home_message"
        name="message"
        label="Mensaje:"
        type="text"
        placeholder="Tu mensaje..."
        textarea
        value={formData.message}
        handleChange={handleChange}
        required
      />
      <Checkbox
        id="home_conditions"
        name="conditions"
        label="Acepto los terminos y condiciones"
        handleChange={handleChange}
        value={formData.conditions}
      />
      <button type="submit" className={styles.button}>
        Consultar
      </button>
    </form>
  );
}
