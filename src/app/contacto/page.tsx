import { defaultMessage, emailHogero, emailSubject, whatsappNumber } from '../services/variables';
import styles from '../styles/contacto.module.css';

const Contactanos = () => {
    return (
        <section className={styles.contactContainer}>
            <h1 className={styles.title}>Contáctanos</h1>
            <p className={styles.description}>
                Estamos aquí para ayudarte. Contáctanos a través de los siguientes medios:
            </p>
            <div className={styles.contactOptions}>
                <div className={styles.contactOption}>
                    <h2>WhatsApp</h2>
                    <p>Envíanos un mensaje directo a nuestro número de WhatsApp.</p>
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactLink}
                    >
                        Ir a WhatsApp
                    </a>
                </div>
                <div className={styles.contactOption}>
                    <h2>Correo Electrónico</h2>
                    <p>Envíanos un correo electrónico con tus preguntas o solicitudes.</p>
                    <a href={`mailto:${emailHogero}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(defaultMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactLink}>
                        Escribir un correo
                    </a>
                </div>
            </div>
        </section >
    );
};

export default Contactanos;
