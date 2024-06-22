import React from "react";
import Link from "next/link";

const CategorySection = () => {
  return (
    <section className="tf__categories mt_95">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-8 col-lg-6 m-auto wow fadeInUp">
            <div className="tf__heading_area mb_15">
              <h5>NOS CATÉGORIES DE COURS</h5>
              <h2>Explorer des parcours d'apprentissage variés pour une formation réussie.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Engineering Category */}
          <div className="col-xl-4 col-md-6 wow fadeInUp">
            <div className="tf__single_category light_blue">
              <div className="tf__single_category_icon">
                <i className="fa fa-cogs"></i>
              </div>
              <div className="tf__single_category_text">
                <h3>Génie et Technologie</h3>
                <p>Découvrez des cours qui allient théorie et pratique en génie et technologie.</p>
              </div>
            </div>
          </div>
          {/* Computer Science Category */}
          <div className="col-xl-4 col-md-6 wow fadeInUp">
            <div className="tf__single_category blue">
              <div className="tf__single_category_icon">
                <i className="fa fa-laptop-code"></i>
              </div>
              <div className="tf__single_category_text">
                <h3>Informatique et Codage</h3>
                <p>Apprenez les langages de programmation les plus demandés et les dernières tendances technologiques.</p>
              </div>
            </div>
          </div>
          {/* Business and Management Category */}
          <div className="col-xl-4 col-md-6 wow fadeInUp">
            <div className="tf__single_category green">
              <div className="tf__single_category_icon">
                <i className="fa fa-chart-line"></i>
              </div>
              <div className="tf__single_category_text">
                <h3>Gestion et Business</h3>
                <p>Maîtrisez les stratégies de gestion d'entreprise pour devenir un leader dans le monde des affaires.</p>
              </div>
            </div>
          </div>
          {/* Additional categories can be added here */}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
