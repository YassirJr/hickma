"use client";
import {axiosInstance} from "@/api/axios";
import {toast} from "react-toastify";
import {mentors} from "@/data/mentors";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {useUserContext} from "@/context/UserContext";


const ListeRendezVous = () => {

    const {user: {reservations}} = useUserContext()
    const getMentorById = (id) => {
        return mentors.find(e => e.id.toString() === id.toString())
    }
    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between my-3">
                <h3>
                    Liste des rendez-vous
                </h3>
                <Link href="/dashboard/etudiant/rdv/add" className='btn btn-primary'>
                    Ajouter Rendez-Vous
                </Link>
            </div>
            {
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Mentor</th>
                        <th scope="col">Status</th>
                        <th scope="col">Time</th>
                        <th>Meeting Link</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        reservations?.length > 0 ? (
                                reservations?.map((rdv, index) => (
                                    <tr key={index}>
                                        <th scope="row">{rdv?.id}</th>
                                        <td>{getMentorById(rdv?.mentor_id)?.name}</td>
                                        <td>{rdv?.status}</td>
                                        <td>{rdv?.hour}</td>
                                        <td>
                                            {
                                                !!rdv.link ? <a href={rdv.link} target="_blank">Meeting Link</a> : 'Pas de lien'
                                            }
                                        </td>
                                    </tr>
                                ))) :
                            <td colSpan={4} className='text-center p-4 my-4'>Aucune réservation trouvée</td>
                    }
                    </tbody>
                </table>

            }
        </div>
    );
};

export default ListeRendezVous;