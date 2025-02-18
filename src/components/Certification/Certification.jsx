import React from "react";

import certifications from "../../data/certifications.json";

import styles from "./Certification.module.css";
import { getImageUrl } from "../../utils";

export const Certification = () => {
  return (
    <section className={styles.container} id="certifications">
      <h2 className={styles.title}>Certifications</h2>
      <ul className={styles.certification}>
        {certifications.map((certification, id) => {
          return (
            <li key={id} className={styles.certificationItem}>
              <img
                className={styles.certificationImage}
                src={getImageUrl(certification.imageSrc)}
                alt={`${certification.title} Logo`}
              />
              <p>{certification.title}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
