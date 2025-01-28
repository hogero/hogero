import React from "react";
import styles from "../styles/planes.module.css";
import { PLANES } from "../services/variables";
import Link from "next/link";

const Servicios = () => {
  return (

    <section className={styles.planesSection}>
      <h2 className={styles.title}>Nuestros Servicios</h2>
      <p>Agenda seleccionando alguno de nuestros servicios</p>
      <div className={styles.planesContainer}>
        {PLANES.map((plan, index) => (
          <Link key={index} href={!plan.noAgenda ? `/agendas/cita?sesionId=${plan.id}` : `/servicios`} style={{ textDecoration: "none" }}>
            <div className={styles.planCard} >
              <h3 className={styles.planTitle}>{plan.title}</h3>
              <p className={styles.planDescription}>{plan.description}</p>
              <ul className={styles.featuresList}>
                {plan.features.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>{feature}</li>
                ))}
              </ul>
              <div className={styles.cost}>{plan.cost}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Servicios;
