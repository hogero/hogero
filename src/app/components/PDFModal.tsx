"use client"
import React, { useState } from "react";
import Modal from 'react-modal';
import styles from "../styles/pdfmodal.module.css";

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
            <div onClick={e => { e.stopPropagation()}}>
                <button onClick={closeModal} className={styles.close}>X</button>
                <embed src={link} className={styles.embed} />
            </div>
        </Modal >
    </>
    );
};
