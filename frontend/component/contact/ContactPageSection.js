import React from "react";
import ContactForm from "../form/ContactForm";

const ContactPageSection = () => {
  return (
    <section className="tf__contact_page mt_190 xs_mt_95">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-7 col-lg-6 wow fadeInLeft">
            <div className="tf__contact_form">
              <div className="tf__heading_area tf__heading_area_left mb_25">
                <h5>Contactez-Nous</h5>
                <h2>Contactez-nous dès maintenant.</h2>
              </div>
              <p>
                Améliorez la visibilité de vos articles de blog, études de cas et annonces de produits
                avec des vidéos de marque qui fidélisent vos clients.
              </p>
              <ContactForm />
            </div>
          </div>
          <div className="col-xxl-4 col-xl-5 col-lg-6 wow fadeInRight">
            <div className="tf__contact_text">
              <div className="tf__contact_single">
                <div className="icon blue">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="text">
                  <h3>Appel</h3>
                  <a href="callto:+212254615566">+212254615566</a>
                  <a href="callto:+212542556455">+212542556455</a>
                </div>
              </div>
              <div className="tf__contact_single">
                <div className="icon orange">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="text">
                  <h3>mail</h3>
                  <a href="mailto:suppport@hickkma.com">suppport@hickkma.com</a>
                  <a href="mailto:sales@hickma.com">sales@hickma.com</a>
                </div>
              </div>
              <div className="tf__contact_single">
                <div className="icon green">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="text">
                  <h3>address</h3>
                  <p>F9JH+2RM, Ville Verte Côté Latéral Est à la forêt Boukoura, Bouskoura</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-12 wow fadeInUp">
            <div className="tf__contact_map mt_100">
              <iframe
                src="https://www.google.com/maps/place/École+centrale+Casablanca/@33.4800758,-7.6204414,15z/data=!4m6!3m5!1s0xda62dfb0bd98e83:0x6c5587c807a6f58e!8m2!3d33.4800758!4d-7.6204414!16s%2Fg%2F11b6_gwjxz?entry=ttu"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageSection;
