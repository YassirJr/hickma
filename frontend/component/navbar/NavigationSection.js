"use client";
import React from "react";
import { useEduorContext } from "@/context/EduorContext";
import Navlink from "./Navlink";
import SubNavlink from "./SubNavlink";

const NavigationSection = ({ position, btnPosition, navRef }) => {
  const { isMobileNavOpen } = useEduorContext();
  return (
    <div
      ref={navRef}
      className={`collapse navbar-collapse ${isMobileNavOpen ? "show" : ""}`}
      id="navbarNav"
    >
      <ul className={`navbar-nav ${position}`}>
        <li className="nav-item">
          <Navlink href="/">Acceuil</Navlink>
        </li>

        <li className="nav-item">
          <Navlink href="/about">A Propos</Navlink>
        </li>
        <li className="nav-item">
          <Navlink href="/team">Team</Navlink>
        </li>
        
        

        <li className="nav-item">
          <Navlink href="/contact">contact</Navlink>
        </li>

        <li className="nav-item">
          <Navlink href="/sign-up">s'inscrire</Navlink>
        </li>

        {btnPosition ? null : (
          <li className="nav-item">
            <a className="nav-link common_btn" href="/sign-in">
              SE CONNECTER
            </a>
          </li>
        )}
      </ul>
      {btnPosition ? (
        <a className="common_btn_2 ms-auto" href="#">
          learn more
        </a>
      ) : null}
    </div>
  );
};

export default NavigationSection;
