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
          <img src={onlineIcon} alt="online icon" />
          <span>Online</span>
        </div>
        <h1>{title}</h1>
        <ul>
          <li><h3>{prop1}</h3></li>
          <li><h3>{prop2}</h3></li>
        </ul>
        <a href={link}>{btnLabel}</a>
      </div>
      <img src={image} alt={title} />
    </div>
  );
}
