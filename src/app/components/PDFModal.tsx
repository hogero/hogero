"use client"
import React, { useState } from "react";
import Modal from 'react-modal';
import styles from "../styles/pdfmodal.module.css";
import stylesModal from "../styles/modals.module.css";
import { URL_AX } from "../services/variables";

export const PDFModal = (props: { link: string }) => {
    const { link } = props;
    const [modalIsOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }
    function openModal() {
        setIsOpen(true);
    }

    return (<>
        <button className={styles.info} onClick={openModal}>Ver</button>
        <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
            <div className={styles.bb} onClick={closeModal}></div>
            <div onClick={e => { e.stopPropagation() }}>
                <button onClick={closeModal} className={stylesModal.close}>X</button>
                <iframe
                    src={`https://docs.google.com/gview?url=${encodeURIComponent(URL_AX + link)}&embedded=true`}
                    style={{ width: '80vw', height: '80vh' }}
                    frameBorder="0"
                ></iframe>
            </div>
        </Modal >
    </>
    );
};
