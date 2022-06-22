import Link from "@docusaurus/Link";
import React from "react";
import styles from "./styles.module.css";

type Item = {
  name: string;
  link: string;
  icon: React.ComponentType<React.ComponentProps<"svg">>;
};

const items: Item[] = [
  {
    name: "Chrome",
    link: "/docs/guides",
    icon: require("@site/static/browsers/chrome.svg").default,
  },
  {
    name: "Firefox",
    link: "/docs/guides",
    icon: require("@site/static/browsers/firefox.svg").default,
  },
  {
    name: "Edge",
    link: "/docs/guides",
    icon: require("@site/static/browsers/edge.svg").default,
  },
  {
    name: "IE",
    link: "/docs/guides",
    icon: require("@site/static/browsers/ie.svg").default,
  },
  {
    name: "Android",
    link: "/docs/guides",
    icon: require("@site/static/browsers/android.svg").default,
  },
  {
    name: "Desktop",
    link: "/docs/guides",
    icon: require("@site/static/browsers/desktop.svg").default,
  },
];

function Language({ name, link, icon: Svg }: Item) {
  return (
    <Link className={styles.language} to={link}>
      <Svg className={styles.languageIcon} role="img" />
      <h3 className={styles.languageName}>{name}</h3>
    </Link>
  );
}

export default function Languages(): JSX.Element {
  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={styles.heading}>Supported Devices</h2>
        <div className={styles.languages}>
          {items.map((props, idx) => (
            <Language key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
