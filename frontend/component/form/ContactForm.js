"use client";
import { useEduorContext } from "@/context/EduorContext";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const { isValidEmail } = useEduorContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Veuillez remplir tous les champs.", { position: "top-right" });
    } else if (!isValidEmail(email)) {
      toast.warning("Veuillez fournir une adresse e-mail valide.", {
        position: "top-right",
      });
    } else {
      // Si le formulaire est soumis avec succès, affichez un toast de succès
      toast.success("Formulaire soumis avec succès !", {
        position: "top-right",
      });
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="row">
        <div className="col-xl-6">
          <input
            type="text"
            placeholder="Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-xl-6">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-xl-12">
          <textarea
            rows={8}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className="common_btn_2">
            ENVOYER LA DEMANDE
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;