"use client";
import React from "react";
import ActivitySlider from "../slider/ActivitySlider";

const ActivitySection2 = ({ style }) => {
  return (
    <div className={style}>
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-6 col-xxl-5 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area mb_15">
              <h5>NOS MEILLEURES ACTIVITÉS</h5>
              <h2>Épanouissez-vous avec nos activités éducatives.</h2>
            </div>
          </div>
        </div>
        <ActivitySlider />
      </div>
    </div>
  );
};

export default ActivitySection2;
