"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/navbar.module.css";
import { LINKS } from "../services/variables";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav className={styles.navbar}>
                <div className={styles.navbarContainer}>
                    <Link href={"/"} className={styles.logo} onClick={_=>setIsOpen(false)}>
                        <img src="/hogero/LogoHogero.svg" alt="logo" />
                        HOGERO
                    </Link>
                    <button className={styles.menuToggle} onClick={toggleMenu}>
                        ☰
                    </button>
                    <ul className={`${styles.navLinks} ${isOpen ? styles.navOpen : ""}`}>
                        {LINKS.map((link, index) => (
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
