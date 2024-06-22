"use client";
import { useEduorContext } from "@/context/EduorContext";
import Link from "next/link";
import React from "react";

const FooterSection2 = ({ style, logo }) => {
  const { handleVideoShow } = useHickmaContext();
  return (
    <footer className={style}>
      <div className="container">
        <div className="tf__footer_apply">
          <div className="tf__footer_apply_overlay">
            <a className="venobox" role="button" onClick={handleVideoShow}>
              <i className="fas fa-play"></i>
            </a>
            <h3>Découvrez notre agence</h3>
            <p>
              Il existe de nombreuses variations des passages de Lorem Ipsum disponibles, mais la majorité ont subi des modifications.
            </p>
            <a className="apply_btn" href="#">
              Postuler maintenant
            </a>
          </div>
        </div>
      </div>

      <div className="tf__footer">
        <div className="tf__footer_overlay pt_225">
          <div className="container">
            <div className="tf__footer_2_content_area">
              <div className="row justify-content-between">
                <div className="col-xl-3 col-md-7 col-lg-3">
                  <div className="tf__footer_logo_area">
                    <Link className="footer_logo" href="/">
                      <img src={logo} alt="Hickma" className="img-fluid w-100" />
                    </Link>
                    <p>
                      Hickma est dédiée à offrir une éducation personnalisée et innovante pour chaque apprenant.
                    </p>
                    <ul className="d-flex flex-wrap">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-google-plus-g"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-2 col-md-5 col-lg-3">
                  <div className="tf__footer_content">
                    <h3>Liens Rapides</h3>
                    <ul>
                      <li>
                        <Link href="/courses">Nos Services</Link>
                      </li>
                      <li>
                        <Link href="/events">Événements</Link>
                      </li>
                      <li>
                        <Link href="/about">À Propos de Notre Entreprise</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact Professionnel</Link>
                      </li>
                      <li>
                        <Link href="/contact">Prendre Rendez-vous</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-md-7 col-lg-3">
                  <div className="tf__footer_content">
                    <h3>Nos Contacts</h3>
                    <p>Adresse : 27 Division St, Berakuti, NY 121102, USA</p>
                    <p>
                      <span>Téléphone : +8 1440 456 782</span>
                      <span>Fax : +8 846512 456 788</span>
                    </p>
                    <p>
                      <span>Email : example@mail.com </span>
                      <span>Site Web : yourwebsite.com</span>
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-md-5 col-lg-3">
                  <div className="tf__footer_content">
                    <h3>Newsletter</h3>
                    <p>
                      Notre approche est unique, découvrez nos méthodes et restez informé des dernières nouveautés.
                    </p>
                    <form>
                      <input type="text" placeholder="Votre email" />
                      <button>Envoyer</button>
                    </form>
                  </div>
                </div>

                <div className="col-12">
                  <div className="tf__copyright">
                    <p>Droit d'auteur © Hickma tous droits réservés.</p>
                    <ul className="d-flex flex-wrap">
                      <li>
                        <Link href="/privacy-policy">Politique de confidentialité</Link>
                      </li>
                      <li>
                        <Link href="/about">À propos</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection2;
