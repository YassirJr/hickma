import React from "react";
import RecommendationForm from "../form/RecommendationForm"; // This component needs to be created

const RecommendationPageSection = () => {
  return (
    <section className="tf__recommendation_page mt_190 xs_mt_95">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-7 col-lg-6 wow fadeInLeft">
            <div className="tf__recommendation_form">
              <div className="tf__heading_area tf__heading_area_left mb_25">
                <h5>Recommandations</h5>
                <h2>Partagez vos recommandations et témoignages.</h2>
              </div>
              <p>
                Votre retour est précieux pour notre communauté. Aidez les autres à découvrir les meilleures opportunités et expériences sur Hickma.
              </p>
              <RecommendationForm />
            </div>
          </div>
          {/* Optionally keep the contact information if it makes sense for the recommendation page */}
          <div className="col-xxl-4 col-xl-5 col-lg-6 wow fadeInRight">
            <div className="tf__contact_text">
              {/* Contact info goes here if needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendationPageSection;
