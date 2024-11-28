import styles from "./Carrousel.module.css";
import Servicecard from "../../features/serviceCard/Servicecard";
import arrowRight from "../../../assets/icons/arrow_rigt.png";
import arrowLeft from "../../../assets/icons/arrow_left.png";

// import { useState } from "react";
import { servicios } from "../../../data/servicios";
import React, { useState, useEffect } from "react";

export default function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const totalCards = servicios.length;
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndex(isMobile ? totalCards - 1 : totalCards - 3);
    }
  };
  const handleNext = () => {
    if (isMobile) {
      if (currentIndex < totalCards - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    } else {
      if (currentIndex + 2 < totalCards - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    }
  };
  return (
    <div className={styles.carrousel}>
      {" "}
      {/* Carrousel button left */}{" "}
      <button
        onClick={handlePrev}
        className={`${styles.carrousel_button} ${styles.left}`}
      >
        {" "}
        <img src={arrowLeft} alt="arrow left" />{" "}
      </button>{" "}
      {/* Carrousel slider */}{" "}
      <div className={styles.carrousel_slider_container}>
        {" "}
        <div
          className={styles.carrousel_slider}
          style={{
            transform: `translateX(-${
              currentIndex * (isMobile ? 100 : 33.33)
            }%)`,
          }}
        >
          {" "}
          {servicios.map((card) => (
            <div style={{ width: isMobile ? "100%" : "33.33%" }} key={card.id}>
              {" "}
              <Servicecard
                title={card.name}
                description={card.description}
                src={card.src}
                link={card.link}
              />{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
      {/* Carrousel button right */}{" "}
      <button
        onClick={handleNext}
        className={`${styles.carrousel_button} ${styles.right}`}
      >
        {" "}
        <img src={arrowRight} alt="arrow right" />{" "}
      </button>{" "}
    </div>
  );
}
