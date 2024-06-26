import React from 'react'

const TopbarSection = ({style}) => {
  return (
    <section className={style}>
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-md-6 d-none d-md-block">
                    <div className="tf__topbar_left d-flex flex-wrap align-items-center">
                        <p>Visiter notre social media:</p>
                        <ul className="d-flex flex-wrap">
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-6 col-md-6">
                    <div className="tf__topbar_right">
                        <ul className="d-flex flex-wrap">
                            <li><a href="#">S'inscrire</a></li>
                            <li><a href="#">Aide</a></li>
                            <li>
                                <a href="#"><img src="images/language_3.jpg" alt="language"/> english</a>
                                <ul className="tf__other_language">
                                    <li><a href="#"><img src="images/language_2.jpg" alt="language"/> japanese </a></li>
                                    <li><a href="#"><img src="images/language_1.jpg" alt="language"/> chinese</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TopbarSection