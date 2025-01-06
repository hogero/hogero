"use client"

import style from "../styles.module.css";
import Link from "next/link";
import { useEffect } from "react";

const links = [
    {
        name: "Inicio",
        href: "/",
        icon: ""
    },
    {
        name: "Planes",
        href: "/planes",
        icon: ""
    },
    {
        name: "Agendar cita",
        href: "/agendas",
        icon: ""
    }
]

export default function Navbar() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.js")
    }, [])
    return (
        <nav className={`${style.navbar} navbar navbar-expand-lg`}>
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">HOGERO</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {links.map(l => {
                            return <Link href={l.href} key={l.name} className="nav-link">{l.name}</Link>
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
}
