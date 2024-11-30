// Crucial
import React from "react";

// Component CSS
import styles from "./Maintitle.module.css";

const Maintitle = ({ markedtext, title, description }) => {
  return (
    <div className={styles.main_title_container}>
      <span>{markedtext}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Maintitle;
