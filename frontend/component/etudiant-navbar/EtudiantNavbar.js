import React from 'react';
import Image from "next/image";
import Link from "next/link";

function EtudiantNavbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <span className="navbar-brand">
                    <Image src='/images/logo.png' width={100} height={100} alt=""/>
                </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" href="/dashboard/etudiant/parcours-apprentissage">
                                parcours d’apprentissage
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link  className="nav-link" href="/dashboard/etudiant/rdv">gestion des rendez-vous</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/dashboard/etudiant/profile">profile</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default EtudiantNavbar;