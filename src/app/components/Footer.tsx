"use client"
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import styles from '../styles/footer.module.css'; // Importar el módulo CSS
import stylesModal from "../styles/modals.module.css";
import { defaultMessage, emailHogero, emailSubject, whatsappNumber } from '../services/variables';
import { FaCalendarAlt, FaHandsHelping } from 'react-icons/fa';
import Link from 'next/link';
import AvisoPrivacidad from './AvisoPrivacidad';
import { SiPrivateinternetaccess } from 'react-icons/si';
import { useState } from 'react';
import Modal from 'react-modal';

const Footer = () => {
    const [modalAviso, setModalAviso] = useState(false);

    const closeAviso = () => {
        setModalAviso(false);
    }

    const openAviso = () => {
        setModalAviso(true);
    }

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
                <div className={`${styles.floatingIcon}`} onClick={openAviso}>
                    < SiPrivateinternetaccess />
                </div>
            </div>
            <Modal isOpen={modalAviso} ariaHideApp={false}>
                <div className={stylesModal.bb} onClick={closeAviso}></div>
                <div onClick={e => { e.stopPropagation() }}>
                    <button onClick={closeAviso} className={stylesModal.close}>X</button>
                    <AvisoPrivacidad></AvisoPrivacidad>
                </div>
            </Modal>
        </footer>
    );
};

export default Footer;
