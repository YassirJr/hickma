"use client";
import { useEduorContext } from "@/context/EduorContext";
import React, { useState } from "react";
import { toast } from "react-toastify";

const LoginForm = () => {
  const { isValidEmail } = useEduorContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!password || !email) {
      toast.error("Veuillez remplir tous les champs.", { position: "top-right" });
    } else if (!isValidEmail(email)) {
      toast.warning("Veuillez fournir une adresse e-mail valide.", {
        position: "top-right",
      });
    } else {
      // If the form is successfully submitted, show a success toast
      toast.success("Connexion réussie !", {
        position: "top-right",
      });
      setPassword("");
      setEmail("");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="row">
        <div className="col-xl-12">
          <div className="tf__login_imput">
            <label>e-mail</label>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="col-xl-12">
          <div className="tf__login_imput">
            <label>mot de passe</label>
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="col-xl-12">
          <div className="tf__login_imput tf__login_check_area">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Se souvenir de moi
              </label>
            </div>
            <a href="#">Mot de passe oublié ?</a>
          </div>
        </div>
        <div className="col-xl-12">
          <div className="tf__login_imput">
            <button type="submit" className="common_btn">
              Connexion
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;