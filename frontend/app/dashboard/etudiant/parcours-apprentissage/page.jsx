'use client'
import {useState} from 'react';
import {Button, FormControl, Modal} from "react-bootstrap";

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [level, setLevel] = useState('');
    const [centerOfInterest, setCenterOfInterest] = useState('');

    const [showParcoursModal, setShowParcoursModal] = useState(false);
    const [showMentorsModal, setShowMentorsModal] = useState(false);
    const [showSyllabusModal, setShowSyllabusModal] = useState(false);

    const handleCloseParcoursModal = () => setShowParcoursModal(false);
    const handleShowParcoursModal = () => setShowParcoursModal(true);

    const handleCloseMentorsModal = () => setShowMentorsModal(false);
    const handleShowMentorsModal = () => setShowMentorsModal(true);

    const handleCloseSyllabusModal = () => setShowSyllabusModal(false);
    const handleShowSyllabusModal = () => setShowSyllabusModal(true);

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

    const goToSee = (card) => {
        console.log(card)
    }

    const handleSubmit = async () => {
        console.log('hello')
        // const response = await axios.post('/api/parcours-apprentissage', {
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
                                description: "Voux Trouverez des parcours qui concerne le curcus de l'ecc",
                                items: ['Centre d intérêt', 'Elects', 'Majeurs', 'Parcours', 'Mobilités', 'Césures', 'Options', 'PFE'],
                                showModal: showParcoursModal,
                                handleShow: handleShowParcoursModal,
                                handleClose: handleCloseParcoursModal,
                                modalContent: (
                                    <>
                                        <Modal.Header closeButton>
                                            <Modal.Title id="contained-modal-title-vcenter">
                                                parcours d'apprentissage suggestions
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <h4>Data Science</h4>
                                            <p>
                                                Vous pouvez suivre comme parcours à école centrale cas :
                                                <br/><br/>
                                                Majeurs : aide à la décision
                                                Électifs :
                                                Introduction au machine learning
                                                Réseaux télécome
                                                Introduction à la finance du marché
                                                Parcours :
                                                Ingénierie des systèmes complexes
                                                <br/><br/>

                                                Option : science de données et digitalisation
                                                <br/><br/>

                                                Projet pfe :
                                                Détection de Fraude dans les Transactions Financières ,
                                                Analyse de Sentiments sur les Réseaux Sociaux
                                            </p>
                                        </Modal.Body>
                                    </>
                                )
                            },
                            {
                                title: "MENTORS",
                                description: "Vous Trouverez Des Mentors Qui Vous Aiderons A Suivre  Votre Parcours D'apprentgissages  L'ecc",
                                items: ['Professeurs', 'Tuteurs', 'Lauréats', 'Coach'],
                                showModal: showMentorsModal,
                                handleShow: handleShowMentorsModal,
                                handleClose: handleCloseMentorsModal,
                                modalContent: (
                                    <>
                                        <Modal.Header closeButton>
                                            <Modal.Title id="contained-modal-title-vcenter">
                                                Mentors
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <h4>
                                                les mentors qui peuvent vous aider à suivre votre parcours d'apprentissage
                                            </h4>
                                            <p>
                                                Madame kawtar el zahrouni , ayoub el jaouahari
                                            </p>
                                        </Modal.Body>
                                    </>
                                )
                            },
                            {
                                title: "LES LIENS COURSERA",
                                description: "Vous Trouverez Des Syllabus Liés aux Parcours D'apprentissage de L'ecc",
                                items: ['Informatique', 'Electronique', 'Génie Civil', 'Chimie', 'Physique'],
                                showModal: showSyllabusModal,
                                handleShow: handleShowSyllabusModal,
                                handleClose: handleCloseSyllabusModal,
                                modalContent: (
                                    <>
                                        <Modal.Header closeButton>
                                            <Modal.Title id="contained-modal-title-vcenter-3">
                                                Les liens coursera
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <h4 className='my-3'>
                                                Vous pouvez suivre des cours en ligne sur coursera pour améliorer vos compétences
                                            </h4>
                                            <ul>


                                                <li><a
                                                    href="https://www.coursera.org/professional-certificates/ibm-data-science" target='_blank'>
                                                    IBM Data Science Certificate Professionnel | Coursera
                                                    </a></li>
                                                <li><a
                                                    href="https://www.coursera.org/professional-certificates/google-data-analytics" target='_blank'>Analyse
                                                    de données : Google Certificate Professionnel | Coursera</a></li>
                                            </ul>

                                        </Modal.Body>
                                    </>
                                )
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
                                        <Button variant="warning my-2" onClick={card.handleShow}>
                                            Go To See →
                                        </Button>
                                        <Modal
                                            show={card.showModal}
                                            onHide={card.handleClose}
                                            size="lg"
                                            aria-labelledby="contained-modal-title-vcenter"
                                            centered
                                        >
                                            {card.modalContent}
                                            <Modal.Footer>
                                                <Button onClick={card.handleClose}>Close</Button>
                                            </Modal.Footer>
                                        </Modal>
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