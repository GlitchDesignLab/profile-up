import styles from "./HomeForm.module.css";
import FormField from "../../ui/formField/FormField";
import { useState } from "react";
// import Checkbox from "../../ui/checkbox/Checkbox";
import Toast from "../../ui/toast/Toast";

export default function HomeForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    conditions: false,
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
  };
  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, conditions: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    await fetch("https://formspree.io/f/mwpkrrwy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        conditions: formData.conditions,
      }),
    })
      .then((response) => {
        if (response.ok) {
          showToast("Mensaje enviado correctamente", "success");
          setFormData({
            name: "",
            email: "",
            message: "",
            conditions: false,
          });
        }
      })
      .catch((error) => {
        showToast("Error al enviar el mensaje", "error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
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
        {/* <Checkbox
          id="home_conditions"
          name="conditions"
          label="Acepto los terminos y condiciones"
          handleChange={handleChange}
          value={formData.conditions}
        /> */}
        <button type="submit" className={styles.button} disabled={loading}>
          Consultar
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
