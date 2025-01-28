import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import styles from '../styles/footer.module.css'; // Importar el módulo CSS
import { defaultMessage, emailHogero, emailSubject, whatsappNumber } from '../services/variables';
import { FaCalendarAlt, FaHandsHelping } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer>
            <div className={styles.floatingIconsContainer}>
                <div className={styles.floatingIcon}>
                    <Link href="/agendas/cita">
                        <FaCalendarAlt />
                    </Link>
                </div>
                <div className={styles.floatingIcon}>
                    <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer">
                        <AiOutlineWhatsApp />
                    </a>
                </div>
                <div className={`${styles.floatingIcon}`}>
                    <a href={`mailto:${emailHogero}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(defaultMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer">
                        <AiOutlineMail />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
