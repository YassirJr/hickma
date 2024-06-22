import Link from "next/link";
import React from "react";

const FooterSection = () => {
  return (
    <footer className="tf__footer mt_100">
      <div className="tf__footer_overlay pt_75">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-sm-10 col-md-7 col-lg-6">
              <div className="tf__footer_logo_area">
                <Link className="footer_logo" href="/">
                  <img
                    src="/images/footer_logo.png"  // Make sure the image path is correct
                    alt="Hickma"
                    className="img-fluid w-100"
                  />
                </Link>
                <p>
                  Hickma est dédié à transformer l'expérience éducative grâce à une plateforme innovante de parcours d'apprentissage personnalisés.
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
            <div className="col-xl-2 col-sm-10 col-md-5 col-lg-5">
              <div className="tf__footer_content xs_mt_50">
                <h3>Liens Rapides</h3>
                <ul>
                 
                  <li>
                    <Link href="/about">À Propos</Link>
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
            <div className="col-xl-3 col-sm-10 col-md-7 col-lg-col-lg-6">
              <div className="tf__footer_content xs_mt_30">
                <h3>Nos Contacts</h3>
                <p>F9JH+2RM, Ville Verte Côté Latéral Est à la forêt Boukoura, Bouskoura</p>
                <p>
                  <span> Téléphone : +8 1440 456 782</span>
                  <span>Fax : +8 846512 456 788</span>
                </p>
                <p>
                  <span>Email : contact@hickma.com </span>
                  <span>Site Web : hickma.com</span>
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-sm-10 col-md-5 col-lg-4 col-lg-5">
              <div className="tf__footer_content xs_mt_45">
                <h3>Newsletter</h3>
                <p>
                  Abonnez-vous à notre newsletter pour recevoir les dernières nouvelles et mises à jour sur nos parcours d'apprentissage.
                </p>
                <form>
                  <input type="text" placeholder="Votre email" />
                  <button>Envoyer</button>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tf__copyright">
                <p>Droit d'auteur © Hickma tous droits réservés.</p>
                <ul className="d-flex flex-wrap">
                  <li>
                    <Link href="/privacy-policy">Politique de confidentialité</Link>
                  </li>
                  <li>
                    <Link href="/about">À Propos</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
