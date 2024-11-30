// Crucial
import React from "react";

// Bootstrap elements
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Navigation library
import { Link, NavLink } from "react-router-dom";

// Servicecard CSS
import styles from "./Servicecard.module.css";

const Servicecard = ({ title, description, src, link }) => {
  return (
    <Card style={{ width: "18rem" }} className={styles.card}>
      <img src={src} alt="" className="card-img-top" />
      <Card.Body className="d-flex flex-column justify-content-between align-items-start">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link to={link}>Obtener más info</Link>
      </Card.Body>
    </Card>
  );
};

export default Servicecard;
