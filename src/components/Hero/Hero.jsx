import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Emna</h1>
        <p className={styles.description}>
          I'm a full-stack developer with a strong background in web and
          software development.
          <br />I specialize in building scalable and efficient applications .
          With experience in both front-end and back-end development, I enjoy
          designing seamless user experiences.
          <br />
          Passionate about clean code and best practices, I'm always eager to
          learn and take on new challenges.
          <br /> Let's build something great together!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
