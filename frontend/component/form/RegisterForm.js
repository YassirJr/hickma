"use client";
import {useEduorContext} from "@/context/EduorContext";
import React, {useState} from "react";
import {toast} from "react-toastify";
import {axiosInstance} from "@/api/axios";

const RegisterForm = () => {
    const {isValidEmail} = useEduorContext();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !password || !confirmPassword) {
            toast.error("Veuillez remplir tous les champs.", {position: "top-right"});
        } else if (!isValidEmail(email)) {
            toast.warning("Veuillez fournir une adresse e-mail valide.", {
                position: "top-right",
            });
        } else if (password !== confirmPassword) {
            toast.error("Les mots de passe ne correspondent pas.", {
                position: "top-right",
            });
        } else {
            axiosInstance.post('/register', {name, email, password}).then(res => {
                if (res.status === 200) {
                    toast.success("Inscription réussie!", {
                        position: "top-right",
                    });
                }
            }).catch(err => {
                console.log(err)
                toast.error("Erreur interne au serveur", {position: "top-right"});
            })
                .finally(() => {
                    setName("");
                    setEmail("");
                    setPassword("");
                    setConfirmPassword("");
                })
        }
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="col-xl-12">
                    <div className="tf__login_input">
                        <label>Nom</label>
                        <input
                            type="text"
                            placeholder="Nom"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="tf__login_input">
                        <label>E-mail</label>
                        <input
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="tf__login_input">
                        <label>Mot de passe</label>
                        <input
                            type="password"
                            placeholder="Mot de passe"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="tf__login_input">
                        <label>Confirmer le mot de passe</label>
                        <input
                            type="password"
                            placeholder="Confirmez le mot de passe"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="tf__login_input">
                        <button type="submit" className="common_btn">
                            S'inscrire
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default RegisterForm;
