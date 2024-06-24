import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {useUserContext} from "@/context/UserContext";

function MentorNavbar(props) {
    const {logout}  = useUserContext()
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
                            <Link className="nav-link" href="/dashboard/mentor/rdv">
                                Rendez-vous
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/dashboard/mentor/profile">profile</Link>
                        </li>
                        <button className='btn btn-warning' onClick={logout}>
                            Déconnexion
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default MentorNavbar;