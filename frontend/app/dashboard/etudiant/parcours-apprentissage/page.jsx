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
                                                Je suis ravi de savoir que tu t'intéresses à la data science, un
                                                domaine passionnant et en pleine croissance. Pour maximiser ton
                                                potentiel et t'assurer une solide fondation, il est essentiel de te
                                                concentrer sur certaines matières clés. Voici quelques suggestions
                                                pour t'aider dans cette voie :
                                                <br/><br/>

                                                Mathématiques et Statistiques : Une compréhension approfondie des
                                                concepts mathématiques et statistiques est cruciale. Cela inclut les
                                                probabilités, l'algèbre linéaire, et l'inférence statistique.
                                                <br/><br/>

                                                Programmation : Maîtrise des langages de programmation tels que
                                                Python et R. Ces outils sont indispensables pour manipuler les
                                                données et implémenter des algorithmes.
                                                <br/><br/>

                                                Bases de Données : Apprends à gérer et interroger des bases de
                                                données avec SQL. Comprendre comment structurer et accéder aux
                                                données efficacement est essentiel.
                                                <br/><br/>

                                                Apprentissage Automatique : Familiarise-toi avec les concepts et
                                                techniques de l'apprentissage automatique (machine learning). Les
                                                bibliothèques comme scikit-learn, TensorFlow et PyTorch sont des
                                                incontournables.
                                                <br/><br/>

                                                Visualisation de Données : Savoir comment visualiser les données
                                                pour en tirer des insights est une compétence précieuse. Utilise des
                                                outils comme Matplotlib, Seaborn et Tableau.
                                                <br/><br/>

                                                Projets Pratiques : Mets en pratique tes connaissances à travers des
                                                projets concrets. Cela te permettra de développer des compétences
                                                pratiques et de créer un portfolio qui démontrera tes capacités.
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
                                            <h4>Professeurs</h4>
                                            <p>
                                                Les professeurs sont des experts dans leur domaine et peuvent
                                                t'apporter des connaissances approfondies sur des sujets spécifiques.
                                                N'hésite pas à les consulter pour des conseils académiques et des
                                                orientations de carrière.
                                                <br/><br/>

                                                Tuteurs : Les tuteurs sont là pour t'aider à surmonter les
                                                difficultés académiques et à améliorer tes compétences. Ils peuvent
                                                te fournir un soutien personnalisé et des ressources supplémentaires
                                                pour t'aider à réussir.
                                                <br/><br/>

                                                Lauréats : Les anciens élèves qui ont réussi dans leur parcours
                                                d'apprentissage peuvent te donner des conseils pratiques et des
                                                perspectives uniques. Ils peuvent partager leur expérience et te
                                                guider dans tes choix.
                                                <br/><br/>

                                                Coach : Les coachs sont des professionnels de l'accompagnement qui
                                                peuvent t'aider à développer tes compétences, à atteindre tes
                                                objectifs et à surmonter les obstacles. Ils peuvent t'apporter un
                                                soutien moral et te motiver à donner le meilleur de toi-même.
                                            </p>
                                        </Modal.Body>
                                    </>
                                )
                            },
                            {
                                title: "SYLLABUS",
                                description: "Vous Trouverez Des Syllabus Liés aux Parcours D'apprentissage de L'ecc",
                                items: ['Informatique', 'Electronique', 'Génie Civil', 'Chimie', 'Physique'],
                                showModal: showSyllabusModal,
                                handleShow: handleShowSyllabusModal,
                                handleClose: handleCloseSyllabusModal,
                                modalContent: (
                                    <>
                                        <Modal.Header closeButton>
                                            <Modal.Title id="contained-modal-title-vcenter-3">
                                                Syllabus
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <h4>Informatique</h4>
                                            <ul>
                                                <li><a href="https://www.coursera.org/learn/programmation-orientee-objet-java">Programmation Orientée Objet avec Java | Coursera</a></li>
                                                <li><a href="https://www.coursera.org/learn/programmation-python">Programmation pour tous (initié) en Python | Coursera</a></li>
                                                <li><a href="https://www.coursera.org/learn/administation-systeme-reseaux-infrastructure-informatiques">Administration système et réseaux d'infrastructures informatiques | Coursera</a></li>
                                                <li><a href="https://www.coursera.org/professional-certificates/google-it-support">Google IT Support Certificate (Professional Certificate) | Coursera</a></li>
                                                <li><a href="https://www.coursera.org/learn/securite-informatique-dangers-numerique">Sécurité informatique et dangers du numérique | Coursera</a></li>
                                                <li><a href="https://www.coursera.org/learn/systemes-information-geographique">Systèmes d'Information Géographique - SIG | Coursera</a></li>
                                                <li><a href="https://www.coursera.org/learn/intro-cybersecurite">Les bases de la cybersécurité pour tous | Coursera</a></li>
                                                <li><a href="https://www.coursera.org/professional-certificates/google-data-analytics-fr">Analyse de données : Google Certificate Professionnel | Coursera</a></li>
                                                <li><a href="https://www.coursera.org/learn/linux-systemes-exploitation">Les systèmes d'exploitation Linux : Devenir un utilisateur performant | Coursera</a></li>
                                                <li><a href="https://www.coursera.org/learn/administation-systeme-reseaux-infrastructure-informatiques">Administration système et services d'infrastructure informatique | Coursera</a></li>
                                            </ul>

                                            <h4>Electronique</h4>
                                            <ul>
                                                <li><a href="https://www.coursera.org/learn/electronique-analogique">Initiation à l'électronique analogique : des concepts aux applications | Coursera</a></li>
                                                <li><a href="https://www.coursera.org/learn/digital-systems">Digital Systems: From Logic Gates to Processors | Coursera</a></li>
                                            </ul>

                                            <h4>Génie Civil</h4>
                                            <ul>
                                                <li><a href="https://www.coursera.org/learn/mechanics-1">Mécanique des matériaux 1 : Concepts fondamentaux de la contrainte et de la déformation et de la charge axiale | Coursera</a></li>
                                                <li><a href="https://www.coursera.org/learn/centrale-thermique-vapeur">Fonctionnement d'une centrale thermique à vapeur | Coursera</a></li>
                                                <li><a href="https://www.coursera.org/learn/resistancedesmateriauxessentiel">Résistance des matériaux : l'essentiel | Coursera</a></li>
                                                <li><a href="https://www.coursera.org/learn/solid-waste-management">Solid Waste Management</a></li>
                                                <li><a href="https://www.coursera.org/learn/water-treatment">Water Treatment</a></li>
                                            </ul>

                                            <h4>Chimie</h4>
                                            <ul>
                                                <li><a href="https://www.coursera.org/learn/thermodynamique-applications">Thermodynamique : applications | Coursera</a></li>
                                                <li><a href="https://www.coursera.org/learn/physical-chemistry">Introduction to Physical Chemistry</a></li>
                                            </ul>

                                            <h4>Physique</h4>
                                            <ul>
                                                <li><a href="https://www.coursera.org/learn/physique-particules">Physique des particules : une introduction | Coursera</a></li>
                                                <li><a href="https://www.coursera.org/learn/thermodynamique-fondements">Thermodynamique : fondements | Coursera</a></li>
                                                <li><a href="https://www.coursera.org/learn/mecanique-quantique">Mécanique quantique | Coursera</a></li>
                                                <li><a href="https://www.coursera.org/learn/elements-mecanique">Éléments de Mécanique | Coursera</a></li>
                                                <li><a href="https://www.coursera.org/learn/vibrations-ondes">Vibrations et ondes mécaniques : fondements et applications | Coursera</a></li>
                                                <li><a href="https://www.coursera.org/learn/dynamique-fluides-numerique">Dynamique des fluides numériques appliquée | Coursera</a></li>
                                                <li><a href="https://www.coursera.org/learn/methodes-numeriques">Méthodes numériques | Coursera</a></li>
                                                <li><a href="https://www.coursera.org/learn/thermodynamique-applications">Thermodynamique : applications | Coursera</a></li>
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