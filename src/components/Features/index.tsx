import React from "react";
import styles from "./styles.module.css";

type Item = {
  title: string;
  link: string;
  icon: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const items: Item[] = [
  {
    title: "Open Source",
    link: "/",
    icon: require("@site/static/icons/setup.svg").default,
    description: (
      <>
        As an open source company, we're passionately engaged in numerous projects,
         initiatives and standards where we represent the needs and requirements of our many customers and partners.
      </>
    ),
  },
  {
    title: "Test Everything",
    link: "/",
    icon: require("@site/static/icons/Cloud-Secure.svg").default,
    description: (
      <>
        Web, Mobile, Desktop, and API services..
      </>
    ),
  },
  {
    title: "Unified Framework API",
    link: "/",
    icon: require("@site/static/icons/Cursor-Click2.svg").default,
    description: (
      <>
        All features that we provide- use the same syntax.
        Once you learn how to write tests for the web, you can start immediately writing for mobile, desktop, or API.
      </>
    ),
  },
  {
    title: "Integrations",
    link: "/",
    icon: require("@site/static/icons/integration.svg").default,
    description: (
      <>Seamlessly integrate the framework with your existing tools and processes.
      Execute tests in the clouds, distributed and publish test results in reporting solutions.</>
    ),
  },
  {
    title: "Automatic waiting",
    link: "/",
    icon: require("@site/static/icons/Approved-Window.svg").default,
    description: (
      <>Never add waits or sleeps to your tests.
      Selcukes automatically waits for commands and assertions before moving on. No more async hell.</>
    ),
  },
  {
    title: "Debug",
    link: "/",
    icon: require("@site/static/icons/debug.svg").default,
    description: (
      <>
        Stop guessing why your tests are failing.
        Our readable errors and stack traces make debugging lightning fast..
      </>
    ),
  },
];

function Feature({ title, link, icon: Svg, description }: Item) {
  return (
    <div className={styles.feature}>
      <Svg className={styles.featureIcon} role="img" />
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
      {/* <Link className="button button--link padding-horiz--none" to={link}>
        Learn more
      </Link> */}
    </div>
  );
}

export default function Features(): JSX.Element {
  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={styles.heading}>All-in-one Framework</h2>
        <h3 className={styles.subheading}>
          Everything you need, <br className="hidden--lg" /> in one framework
        </h3>
        <div className={styles.features}>
          {items.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
