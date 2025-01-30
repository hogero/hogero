"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/navbar.module.css";
import { LINKS } from "../services/variables";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); // Obtiene la ruta actual

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <header>
            <nav className={styles.navbar}>
                <div className={styles.navbarContainer}>
                    <Link href={"/"} className={styles.logo} onClick={_ => setIsOpen(false)}>
                        <img src="/hogero/LogoHogeroWh.png" alt="logo" />
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
