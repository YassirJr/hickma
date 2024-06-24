"use client";
import {axiosInstance} from "@/api/axios";
import {toast} from "react-toastify";
import {mentors} from "@/data/mentors";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {useUserContext} from "@/context/UserContext";
import {useEffect, useState} from "react";
import {Button, Modal, FormControl} from "react-bootstrap";


const ListeRendezVous = () => {
    const [show, setShow] = useState(false);
    const [link, setLink] = useState('')
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {user, setUser} = useUserContext()
    const {reservations} = user


    const changeRdvState = async (accept, id) => {
        if (link.length < 0 && accept) {
            toast.error('entrez un lien valide', {position: "top-right"});
            return
        }
        const response = await axiosInstance.post(`/update_status/${id}`, {
            status: accept ? 'accepted' : 'refused',
            link
        })
        if (response.status === 200) {
            toast.success('Réservation mise à jour avec succès', {position: "top-right"});
            setUser({
                ...user,
                reservations: [
                    ...user.reservations.map(e => e.id === id ? {
                        ...e,
                        status: accept ? 'accepted' : 'refused',
                        link : accept ? link : 'Pas de lien'
                    } : e)
                ]
            })
            setShow(false)
        } else {
            toast.error('Une erreur s’est produite lors de la mise à jour de la réservation', {position: "top-right"});
        }
    }


    return (
        <div className="container mt-5">
            <h3>
                Liste des rendez-vous
            </h3>
            {
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Status</th>
                        <th scope="col">Time</th>
                        <th>Meeting Link</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        reservations?.length > 0 ? (
                                reservations?.map((rdv, index) => (
                                    <tr key={index}>
                                        <th scope="row">{rdv?.id}</th>
                                        <td className={
                                            rdv?.status === 'pending' ? 'text-warning' : rdv?.status === 'accepted' ? 'text-success' : 'text-danger'
                                        }>
                                            {rdv?.status}
                                        </td>
                                        <td>{
                                            new Date(rdv?.hour).toLocaleDateString() + ' ' + new Date(rdv?.hour).toLocaleTimeString()
                                        }</td>
                                        <td>
                                            {
                                                !!rdv.link && rdv.link !== 'Pas de lien' ?
                                                    <a href={rdv.link} target="_blank">Meeting Link</a> : 'Pas de lien'
                                            }
                                        </td>
                                        <td>
                                            <Button variant="primary" onClick={handleShow}>
                                                Accepter
                                            </Button>

                                            <Modal show={show} onHide={handleClose} className='p-5'>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Ajouter le lien de meeting</Modal.Title>
                                                </Modal.Header>
                                                <FormControl onChange={(e) => setLink(e.target.value)} type='text'
                                                             className='m-4 w-75' placeholder='Lien de meeting'/>
                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={handleClose}>
                                                        Cancel
                                                    </Button>
                                                    <Button variant="primary"
                                                            onClick={() => changeRdvState(true, rdv?.id)}>
                                                        Envoyer
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>

                                            <button className='btn btn-danger mx-1'
                                                    onClick={() => changeRdvState(false, rdv?.id)}>
                                                Refuser
                                            </button>
                                            <Link href={'/dashboard/mentor/rdv/etudiant/' + rdv?.user_id}
                                                  className='btn btn-warning mx-1'>
                                                Afficher les informations d'étudiant
                                            </Link>
                                        </td>
                                    </tr>
                                ))) :
                            <td colSpan={6} className='text-center p-4 my-4'>Aucune réservation trouvée</td>
                    }
                    </tbody>
                </table>

            }

        </div>
    );
};

export default ListeRendezVous;