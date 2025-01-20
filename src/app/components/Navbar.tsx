"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/navbar.module.css";
import Image from "next/image";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        {
            name: "Inicio",
            href: "/",
            icon: ""
        },
        {
            name: "Servicios",
            href: "/servicios",
            icon: ""
        },
        {
            name: "Consultar cita",
            href: "/agendas",
            icon: ""
        },
        {
            name: "Agendar cita",
            href: "/agendas/cita",
            icon: ""
        },
        {
            name: "Contactanos",
            href: "/contacto",
            icon: ""
        }
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav className={styles.navbar}>
                <div className={styles.navbarContainer}>
                    <Link href={"/"} className={styles.logo} onClick={toggleMenu}>
                        <img src="/hogero/LogoHogero.svg" alt="logo" />
                        HOGERO
                    </Link>
                    <button className={styles.menuToggle} onClick={toggleMenu}>
                        ☰
                    </button>
                    <ul className={`${styles.navLinks} ${isOpen ? styles.navOpen : ""}`}>
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link href={link.href} onClick={toggleMenu}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
