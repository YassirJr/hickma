'use client'
import {useState} from 'react';

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [level, setLevel] = useState('');
    const [centerOfInterest, setCenterOfInterest] = useState('');

    const levels = ['S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'césure'];
    const options = ['Parcours d apprentissage', 'Mentors', 'Syllabus'];

    const handleLevelSelect = (selectedLevel) => {
        setLevel(selectedLevel);
        setStep(2);
    };

    const handleCenterOfInterestSubmit = (e) => {
        e.preventDefault();
        setStep(3);
    };

    const handleSubmit = () => {
        alert(`Level: ${level}\nCenter of Interest: ${centerOfInterest}`);
    };

    return (
        <div className="container mt-5">
            {step === 1 && (
                <div>
                    <h2 className="mb-4">Vous étre en:</h2>
                    <div className="row row-cols-2 g-4">
                        {levels.map((l) => (
                            <div key={l} className="col">
                                <button
                                    className="btn btn-outline-warning w-100"
                                    onClick={() => handleLevelSelect(l)}
                                >
                                    {l} →
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {step === 2 && (
                <form onSubmit={handleCenterOfInterestSubmit}
                      className='w-75 d-flex flex-column justify-content-center m-auto mt-5'>
                    <h2 className="mb-4">Centre d'intérét:</h2>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            value={centerOfInterest}
                            onChange={(e) => setCenterOfInterest(e.target.value)}
                            required
                        />
                    </div>
                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn mt-4 "
                                style={{background: 'hsl(29, 82%, 41%)', color: 'white'}}>Continuer
                        </button>
                    </div>
                </form>
            )}


            {step === 3 && (
                <div className="container-fluid">
                    <div className="row g-3">
                        <div className="col-md-3">
                            {['Prendre des RDV avec les mentors', 'Entrer en communication avec les mentors', 'Obtenir des témoignages'].map((item, index) => (
                                <div key={index} className="card mb-3  text-white"
                                     style={{background: 'hsl(29, 82%, 41%)'}}>
                                    <div className="card-body">
                                        <p className="card-text">{item}</p>
                                        <button className="btn btn-light btn-sm">Go To See →</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {[
                            {
                                title: "PARCOURS D'APPRENTISSAGE",
                                description: 'VouxTrouverez des parcours qui concerne le curcus de l’ecc',
                                items: ['Centre d intérêt', 'Elects', 'Majeurs', 'Parcours', 'Mobilités', 'Césures', 'Options', 'PFE']
                            },
                            {
                                title: "MENTORS",
                                description: 'Vous Trouverez Des Mentors Qui Vous Aiderons A Suivre  Votre Parcours D’apprentgissages  L’ecc',

                                items: ['Professeurs', 'Tuteurs', 'Lauréats', 'Coach']
                            },
                            {
                                title: "SYLLABUS",
                                description: 'Vous Trouverez Des Syllabus Liés aux Parcours D’apprentissage  de L’ecc',

                                items: ['Contenus de cours', 'Résumés de cours', 'Exercices', 'de préparation pour mieux assimiler le cours']
                            }
                        ].map((card, index) => (
                            <div key={index} className="col">
                                <div className="card h-100  text-white" style={{background: 'hsl(29, 82%, 41%)'}}>
                                    <div className=" card-body d-flex flex-column">
                                        <h5 className="card-title">{card.title}</h5>
                                        <p className='my-3'>{card.description}</p>
                                        <ul className="list-unstyled flex-grow-1 ps-2">
                                            {card.items.map((item, i) => (
                                                <li key={i}>✓ {item}</li>
                                            ))}
                                        </ul>
                                        <button
                                            className="btn btn-light mt-auto align-self-center w-75 font-weight-bold">Go
                                            To See →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
};

export default MultiStepForm;