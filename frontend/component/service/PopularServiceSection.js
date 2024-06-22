import React from "react";
import Link from "next/link";

const PopularServiceSection = () => {
  return (
    <section className="tf__popular_services_2 mt_95">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-7 col-xxl-6 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area mb_15">
              <h5>Nos Services Populaires</h5>
              <h2>Découvrez nos plateformes d'apprentissage innovantes.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Assume you'd update your icons and services accordingly */}
          <div className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp">
            <div className="tf__single_services">
              <span>
                <i className="icon-customized-your-icon-class"></i> {/* Replace with appropriate icon class */}
              </span>
              <h3>Parcours Flexibles</h3>
              <p>
                Des parcours d'apprentissage sur mesure adaptés à vos besoins et à votre rythme.
              </p>
              <Link href="/flexible-paths">
                <a>
                  <i className="fa fa-long-arrow-right"></i>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp">
            <div className="tf__single_services">
              <span>
                <i className="icon-customized-your-icon-class"></i> {/* Replace with appropriate icon class */}
              </span>
              <h3>Conseillers Dédiés</h3>
              <p>
                Accès à des mentors experts pour vous guider tout au long de votre parcours éducatif.
              </p>
              <Link href="/advisors">
                <a>
                  <i className="fa fa-long-arrow-right"></i>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp">
            <div className="tf__single_services">
              <span>
                <i className="icon-customized-your-icon-class"></i> {/* Replace with appropriate icon class */}
              </span>
              <h3>Certificats en Ligne</h3>
              <p>
                Obtenez des certificats reconnus pour attester de vos compétences et de votre apprentissage.
              </p>
              <Link href="/certificates">
                <a>
                  <i className="fa fa-long-arrow-right"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularServiceSection;
