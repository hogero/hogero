"use client"
import React, { useEffect, useState } from "react";
import styles from "../styles/planes.module.css";
import Link from "next/link";
import { LoadingData, PlanesInt } from "../services/interfaces";
import { DataService } from "../services/getData.services";
import { API_GEN, whatsappNumber } from "../services/variables";
import { Spinner } from "../components/Spinner";

const Servicios = () => {
  const dataService = new DataService();
  const [loading, setLoading] = useState<LoadingData>({ loading: false });
  const [planes, setPlanes] = useState<PlanesInt[]>([]);

  useEffect(() => {
    const dataFetch = async () => {
      setLoading({ loading: true, message: "Obteniendo servicios disponibles" });
      setPlanes(await dataService.getPlanes());
      setLoading({ loading: false });
    }
    dataFetch();
  }, []);


  return (
    <section className={styles.planesSection}>
      <h2 className={styles.title}>Nuestros Servicios</h2>
      <p>Agenda seleccionando alguno de nuestros servicios</p>
      {loading.loading ?
        <Spinner message={loading.message} /> :
        <div className={styles.planesContainer}>
          {planes.map((plan, index) => (
            <Link key={index} href={!plan.noAgenda ? `/agendas/cita?sesionId=${plan.id}` : `tel:${whatsappNumber}`} style={{ textDecoration: "none" }}>
              <div className={styles.planCard} >
                <h3 className={styles.planTitle}>{plan.title}</h3>
                <p className={styles.planDescription}>{plan.description}</p>
                <ul className={styles.featuresList}>
                  {plan.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>{feature}</li>
                  ))}
                </ul>
                <div className={styles.cost}>${plan.cost.toFixed(2)}</div>
              </div>
            </Link>
          ))}
        </div>}
    </section>
  );
};

export default Servicios;
