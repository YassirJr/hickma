import Link from "next/link";
import React from "react";

const HeaderSection = () => {
  return (
    <header className="tf__header d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tf__header_text">
              <Link href="/">
                <img
                  src="images/logo_hickma.png"  // Assurez-vous que le chemin de l'image est correct
                  alt="Hickma"
                  className="img-fluid w-100"
                />
              </Link>
              <ul>
                <li>
                  <div className="icon">
                    <i className="fa fa-phone-alt"></i>
                  </div>
                  <div className="text">
                    <h4>+(212) 612 345 678</h4>
                    <p>Demander un appel :</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fa fa-clock"></i>
                  </div>
                  <div className="text">
                    <h4>09h - 20h</h4>
                    <p>Du dimanche au vendredi</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="text">
                    <h4>Email</h4>
                    <p>info@hickma.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
