import React from "react";

const AboutSection3 = ({ style }) => {
  return (
    <div className={`${style} tf__about_2_area`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 wow fadeInLeft">
            <div className="tf__about_2_img">
              {/* Assuming images/HICKMA_pto.png and images/about_2_img_2.png correctly point to the existing images */}
              <div className="tf__about_small">
                <img
                  src="images/HICKMA_pto.png"
                  alt="à propos de nous"
                  className="img-fluid w-100"
                />
              </div>
              <div className="tf__about_large">
                <img
                  src="images/about_2_img_2.png"
                  alt="à propos de nous"
                  className="img-fluid w-100"
                />
              </div>
              <p>
                <span>24+</span> ans d'expérience
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 wow fadeInRight">
            <div className="tf__about_2_text">
              <div className="tf__heading_area tf__heading_area_left mb_25">
                <h5>À propos de Hickma</h5>
                <h2>Élargissez vos horizons avec notre formation universitaire.</h2>
              </div>
              <p>
                Hickma offre une approche d'apprentissage sur mesure, intégrant une plateforme technologique avancée et un accompagnement personnalisé pour chaque étudiant.
              </p>
              <ul>
                <li>
                  {/* Icons should be updated to reflect actual services */}
                  <div className="icon">
                    <img
                      src="images/about_2_icon_1.jpg"
                      alt="formation"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>Apprentissage innovant</h4>
                    <p>
                      Des méthodes d'enseignement avant-gardistes adaptées à l'ère numérique.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img
                      src="images/about_2_icon_2.jpg"
                      alt="croissance"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>Accompagnement personnalisé</h4>
                    <p>
                      Un soutien constant pour assurer la réussite et la progression de chaque étudiant.
                    </p>
                  </div>
                </li>
                {/* ... Additional list items ... */}
              </ul>
            </div>
          </div>
          <div className="col-12 mt_110 xs_mt_100 wow fadeInUp">
            <div className="tf__about_us_counter d-flex flex-wrap align-items-center">
              <p>
                <span className="counter">27,000</span> étudiants et plus bénéficiant de notre plateforme d'apprentissage.
              </p>
              {/* The "Exporter tout" link should lead to a relevant action or be removed if not necessary */}
              <a href="#">Exporter tout</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection3;
