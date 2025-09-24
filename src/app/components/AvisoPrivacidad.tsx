"use client"
import React, { useState, useEffect } from "react";
import styles from "../styles/AvisoPrivacidad.module.css";
import { emailHogero, URL_GP } from "../services/variables";


export default function AvisoPrivacidad() {
    const [fecha, setFecha] = useState("");
    const [aceptado, setAceptado] = useState(false);

    useEffect(() => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const yyyy = today.getFullYear();
        setFecha(`${dd}/${mm}/${yyyy}`);
    }, []);

    return (

        <section id="aviso-privacidad" className={styles.wrapper}>
            <header className={styles.header}>
                <div>
                    <h2>Aviso de Privacidad y Confidencialidad</h2>
                    <div className={styles.meta}>
                        HOGERO • Última actualización: {fecha}
                    </div>
                </div>
                <div className={styles.badge}>Protección de Datos</div>
            </header>

                <section className={styles.content}>
                    <p>
                        <strong>HOGERO</strong>, informa que los datos personales
                        recabados a través de este sitio serán tratados conforme a la Ley
                        Federal de Protección de Datos Personales en Posesión de los
                        Particulares (LFPDPPP) y su Reglamento.
                    </p>

                    <h3>1. Datos personales que se recaban</h3>
                    <ul>
                        <li>Nombre completo</li>
                        <li>Dirección de correo electrónico</li>
                        <li>Número telefónico</li>
                        <li>Información de facturación y/o pago</li>
                        <li>Datos proporcionados voluntariamente en formularios</li>
                    </ul>

                    <h3>2. Finalidades del tratamiento de datos</h3>
                    <p>
                        Los datos personales que recabamos serán utilizados para: proveer
                        los servicios y productos solicitados; informar sobre cambios o
                        actualizaciones en los mismos; enviar comunicaciones y
                        promociones (si el usuario lo autoriza); dar cumplimiento a
                        obligaciones legales y contractuales; y mantener la seguridad y
                        confidencialidad de la información.
                    </p>

                    <h3>3. Confidencialidad y protección de la información</h3>
                    <p>
                        La información personal proporcionada será tratada con estricta
                        confidencialidad. Se implementarán medidas administrativas,
                        técnicas y físicas para proteger sus datos contra daño, pérdida,
                        alteración, destrucción, uso indebido, acceso o divulgación no
                        autorizados. No compartiremos sus datos personales con terceros,
                        salvo en los casos legalmente permitidos.
                    </p>

                    <h3>4. Derechos ARCO</h3>
                    <p>
                        Usted tiene derecho a acceder, rectificar, cancelar u oponerse al
                        uso de sus datos personales. Para ejercer cualquiera de estos
                        derechos, puede enviar una solicitud al correo electrónico:
                        <a href={`mailto:[${emailHogero}]`}>[{emailHogero}]</a>
                    </p>

                    <h3>5. Uso de cookies y tecnologías similares</h3>
                    <p>
                        Nuestra página web utiliza cookies y tecnologías similares para
                        mejorar la experiencia de navegación del usuario. Usted puede
                        deshabilitar las cookies desde la configuración de su navegador.
                    </p>

                    <h3>6. Cambios al aviso de privacidad</h3>
                    <p>
                        Nos reservamos el derecho de modificar o actualizar este Aviso de
                        Privacidad en cualquier momento. Dichas modificaciones se harán
                        públicas a través de nuestra página web:
                        <a href={`${URL_GP}/hogero`}>[{URL_GP}/hogero]</a>.
                    </p>

                    <p className={styles.note}>
                        Al proporcionar sus datos personales a través de nuestro sitio
                        web, usted acepta los términos de este Aviso de Privacidad y
                        Confidencialidad.
                    </p>
                </section>
        </section>
    );
}

