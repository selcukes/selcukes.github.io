import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

export default function Hero(): JSX.Element {
  return (
    <section className={styles.root}>
      <div className={clsx("container", styles.wrapper)}>
        <div>
          <p className={styles.supheading}>What is </p>
          <h1 className={styles.heading}>
            Selcukes ?<br />
          </h1>
          <h2 className={styles.subheading}>
            One stop automation solution for Web, Desktop, Mobile and API.
          </h2>
          <div className={styles.buttons}>
            <Link className="button button--lg button--primary" to="/docs">
              Get Started
            </Link>
            <Link
              className="button button--lg button--secondary button--outline margin-left--md"
              href="/"
            >
              Book Demo
            </Link>
          </div>
        </div>
        <div className={styles.panelImage}>
          <Link
            href="https://selcukes.github.io/"
            target="_blank"
          >
            <img src="/img/programmer.png" />
          </Link>
        </div>
      </div>
    </section>
  );
}
