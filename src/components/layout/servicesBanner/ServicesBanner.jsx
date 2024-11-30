import styles from "./ServicesBanner.module.css";
import onlineIcon from "../../../assets/icons/online.svg";

export default function ServicesBanner({
  title,
  prop1,
  prop2,
  image,
  link,
  btnLabel,
}) {
  return (
    <div className={styles.servicesBanner}>
      <div className={styles.servicesBanner_text}>
        <div className={styles.online}>
          <img
            src={onlineIcon}
            alt="online icon"
            className={styles.servicesBanner_icon}
          />
          <span>Online</span>
        </div>
        <h1>{title}</h1>
        <ul>
          <li>{prop1}</li>
          <li>{prop2}</li>
        </ul>
        <a href={link} target="blank">
          {btnLabel}
        </a>
      </div>
      <img src={image} alt={title} className={styles.ServicesBanner_mainImg} />
    </div>
  );
}
