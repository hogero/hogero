import React from "react";
import styles from "../styles/planes.module.css";

const planes = [
  {
    title: "Sesión básica",
    description: "Este plan es perfecto para empezar, con todas las herramientas básicas para gestionar tu agenda.",
    features: ["1 usuario", "Acceso básico", "Soporte limitado"],
    cost: "$550.00/sesión",
  },
  {
    title: "Sesión extendida",
    description: "Ideal para pequeñas empresas que necesitan más funcionalidades y soporte premium.",
    features: ["Hasta 5 usuarios", "Acceso completo", "Soporte prioritario", "Integraciones avanzadas"],
    cost: "$700.00/sesión",
  },
];

const Planes = () => {
  return (
    <section className={styles.planesSection}>
      <h2 className={styles.title}>Nuestras Sesiones</h2>
      <div className={styles.planesContainer}>
        {planes.map((plan, index) => (
          <div className={styles.planCard} key={index}>
            <h3 className={styles.planTitle}>{plan.title}</h3>
            <p className={styles.planDescription}>{plan.description}</p>
            <ul className={styles.featuresList}>
              {plan.features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>{feature}</li>
              ))}
            </ul>
            <div className={styles.cost}>{plan.cost}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Planes;
