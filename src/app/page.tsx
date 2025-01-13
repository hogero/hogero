import React from "react";
import styles from "./inicio.module.css";

const Inicio = () => {
  const servicios = [
    "Licenciatura en Gerontología por Universidad Estatal del Valle de Ecatepec.",
    "Diplomado en medicina geriátrica por el Instituto Nacional de Geriatría.",
    "Diplomado en atención primaria en personas con demencia por el Instituto Nacional de Geriatría.",
  ];

  return (
    <div className={styles.container}>
      {/* Frase Representativa */}
      <section className={styles.frase}>
        <h1>
          "Cuidar del presente, es asegurar la dignidad del futuro."
        </h1>
        <p>
          La esencia de la gerontología es brindar calidad de vida en cada etapa.
        </p>
      </section>

      {/* Breve explicación */}
      <section className={styles.explicacion}>
        <h2 className={styles.title}>¿Qué es la Gerontología?</h2>
        <div className={styles.card}>
          <p>
            La gerontología es la ciencia que se dedica al estudio del envejecimiento en todas sus dimensiones:
            biológica, psicológica, social y cultural. A través de esta disciplina, buscamos promover el bienestar
            integral de las personas mayores, ayudándoles a vivir con dignidad, autonomía y calidad de vida.
          </p>
          <p>
            Con un enfoque personalizado, la gerontología puede transformar la forma en que abordamos el envejecimiento,
            tanto en el ámbito familiar como en el profesional.
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
                Lic. en Gerontología con tres años de experiencia en distintos
                ámbitos. Estoy dedicada a proporcionar atención integral y de
                calidad a personas mayores, adaptando mis habilidades a sus
                necesidades individuales para mejorar su bienestar y calidad de
                vida
              </p>
            </div>
          </div>
          <div className={styles.body}>
            <h4>Educación y Certificaciones</h4>
            <ul>
              {servicios.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
