import styles from "./AboutArticle.module.css";
import React from "react";

const AboutArticle = ({ icon, title, description, image }) => {
  return (
    <article className={styles.aboutArticle}>
      <div>
        <img src={icon} alt={title} className={styles.article_icon} />
        <span>{title}</span>
        <p>{description}</p>
      </div>
      <img src={image} alt={title} />
    </article>
  );
};

export default AboutArticle;
