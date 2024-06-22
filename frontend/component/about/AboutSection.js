import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <section className="tf__about mt_250 xs_mt_195">
      <div className="container">
        <div className="tf__about_top wow fadeInUp">
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="tf__about_top_img">
                {/* Envisagez de mettre à jour l'image pour quelque chose de plus pertinent pour votre projet */}
                <img
                  src="images/hickma_about_img.png"
                  alt="À propos de Hickma"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="tf__about_top_text">
                <div className="tf__about_top_text_center">
                  <h4>Révolutionner l'éducation en ingénierie</h4>
                  <p>
                    Hickma tire parti des technologies de pointe et de l'expérience de mentors chevronnés pour offrir des parcours d'apprentissage sur mesure aux étudiants en ingénierie. Notre objectif est d'améliorer les résultats éducatifs et de préparer les étudiants aux défis du monde réel.
                  </p>
                </div>
                {/* Mettre à jour le lien pour diriger vers une page about plus détaillée ou le supprimer si nécessaire */}
                <a href="/about" className="common_btn">
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-6 col-md-9 col-lg-6 wow fadeInLeft">
            <div className="tf__about_text">
              <div className="tf__heading_area tf__heading_area_left mb_25">
                <h5>À propos de Hickma</h5>
                <h2>Parcours d'apprentissage personnalisés</h2>
              </div>
              <p>
                Hickma propose une plateforme unique qui personnalise le contenu éducatif en fonction des besoins individuels et des aspirations professionnelles de chaque étudiant. En intégrant des recommandations basées sur des données et un encadrement humain, nous assurons que chaque étudiant dispose des outils nécessaires pour réussir.
              </p>
              <ul>
                <li>Parcours éducatifs basés sur des données.</li>
                <li>Mentorat par des experts du secteur.</li>
                <li>Adaptation en temps réel aux retours des étudiants.</li>
                <li>Environnement d'apprentissage piloté par la communauté.</li>
              </ul>
              <Link href="/about" className="common_btn">
                Découvrir
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-sm-9 col-md-8 col-lg-6 wow fadeInRight">
            <div className="tf__about_img">
              {/* Mettre à jour cette image pour présenter votre plateforme ou un diagramme pertinent */}
              <img
                src="images/hickma_interactive.jpg"
                alt="Apprentissage interactif"
                className="img-fluid w-100"
              />
              <div className="text">
                <i className="far fa-check-circle"></i>
                <h3>20k+</h3>
                <p>Étudiants engagés</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
