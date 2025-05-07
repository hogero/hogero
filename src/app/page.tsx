import React from "react";
import styles from "./inicio.module.css";
import Link from "next/link";
import { PDFModal } from "./components/PDFModal";

const Inicio = () => {
  const EDUCACION = [
    { title: "Licenciatura en Gerontología por Universidad Estatal del Valle de Ecatepec.", pdf: "/hogero/Titulo_KIRR.pdf" },
    { title: "Diplomado en medicina geriátrica por el Instituto Nacional de Geriatría.", pdf: "/hogero/Diplomado_MedicinaGeriatrica_KIRR.pdf" },
    { title: "Diplomado en atención primaria en personas con demencia por el Instituto Nacional de Geriatría.", pdf: "/hogero/Diplomado_AtencionPrimaria_KIRR.pdf" }
  ];

  const CAPACITACIONES = [
    "Aplicación de programas individuales de actividad física multicomponente para personas mayores.",
    "Manejo Inicial de factores de riesgo de discapacidad en personas mayores.",
    "Evaluación de la capacidad funcional de personas mayores.",
    "Apoyo en la orientación alimentaria para personas mayores.",
    "Brindar apoyo de orientación a cuidadores informales de personas mayores.",
    "Aplicación de programa individual de estimulación cognitiva para personas mayores.",
    "Impartición de cursos de formación de capital humano presencial grupal."
  ];

  return (
    <div className={styles.container}>
      {/* Frase Representativa */}
      <section className={styles.frase}>
        <h1>
          Gerontología a la puerta de tu casa
        </h1>
        <p>
          En HOGERO, llevamos nuestros servicios hasta tu hogar para
          realizar planes personalizados gerontológicos que ayudarán a mejorar tu calidad de vida.
          <Link href="/servicios" className={styles.link}> Ver los servicios disponibles</Link>

        </p>
      </section>

      {/* Breve explicación */}
      <section className={styles.explicacion}>
        <h2 className={styles.title}>¿Qué es la Gerontología?</h2>
        <div className={styles.card}>
          <p>
            <strong>La gerontología</strong> es la ciencia que se dedica al estudio del envejecimiento,
            la vejez y la persona mayor en todas sus dimensiones:
            biológica, psicológica, social y cultural. A través de esta disciplina, buscamos promover el bienestar
            integral de las personas mayores, ayudándoles a vivir con dignidad, autonomía y calidad de vida.
          </p>
          <p>
            <strong>HOGERO</strong> busca a través de la gerontología promover el bienestar, la autonomía, la dignidad,
            pero sobre todo, la calidad de la vida de las personas mayores con un enfoque personalizado y
            centrado en la persona.
          </p>
        </div>
      </section>

      {/* Información del Profesional */}
      <section className={styles.profesional}>
        <h2 className={styles.title}>Sobre el Especialista</h2>
        <div className={styles.card}>
          <div className={styles.header}>
            <img
              src="/hogero/especialista.jpg"
              alt="Especialista"
              className={styles.photo}
            />
            <div>
              <h3>Karla Itzel Ramos Romero</h3>
              <p className={styles.subtext}>
                Lic. en Gerontología con tres años de experiencia.
                Estoy dedicada a proporcionar atención integral y de
                calidad a personas mayores, adaptando mis habilidades a sus
                necesidades individuales para mejorar su bienestar y calidad de
                vida
              </p>
            </div>
          </div>
          <div className={`${styles.education}`}>
            <div>
              <h4>Educación</h4>
              <ul>
                {EDUCACION.map((item, index) => (
                  <li key={index}>
                    {item.title}
                    <PDFModal link={item.pdf}/>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Capacitaciones</h4>
              <ul>
                {CAPACITACIONES.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
