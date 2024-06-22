"use client";
import { useEduorContext } from "@/context/EduorContext";
import React, { useState } from "react";
import { toast } from "react-toastify";

const RecommendationForm = () => {
  // Assuming you have a context or some validation functions
  // const { isValidEmail } = useEduorContext(); 
  // Add isValidEmail function if you have it

  // Form state
  const [studentYear, setStudentYear] = useState("");
  const [interests, setInterests] = useState("");
  const [aspirations, setAspirations] = useState("");

  // Handle the form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add validation and toast notifications as necessary
    console.log({
      studentYear,
      interests,
      aspirations,
    });
    // Here you would typically send the data to a server or another handler
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="row">
        {/* Year of Study */}
        <div className="col-xl-12">
          <label htmlFor="studentYear">Vous êtes en :</label>
          <select 
            id="studentYear" 
            value={studentYear}
            onChange={(e) => setStudentYear(e.target.value)}
            required
          >
            {/* Populate this select with options based on your requirements */}
            <option value="S5">S5</option>
            <option value="S6">S6</option>
            <option value="S7">S7</option>
            <option value="S8">S8</option>
            <option value="S9">S9</option>
            <option value="S10">S10</option>
            <option value="cesure">Césure</option>
          </select>
        </div>

        {/* Interests */}
        <div className="col-xl-12">
          <label htmlFor="interests">Centre d'intérêt :</label>
          <input
            type="text"
            id="interests"
            placeholder="Vos intérêts académiques ou personnels"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            required
          />
        </div>

        {/* Professional Aspirations */}
        <div className="col-xl-12">
          <label htmlFor="aspirations">Aspirations professionnelles :</label>
          <input
            type="text"
            id="aspirations"
            placeholder="Vos aspirations professionnelles"
            value={aspirations}
            onChange={(e) => setAspirations(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="col-xl-12">
          <button type="submit" className="common_btn_2">
            Continuer
          </button>
        </div>
      </div>
    </form>
  );
};

export default RecommendationForm;
