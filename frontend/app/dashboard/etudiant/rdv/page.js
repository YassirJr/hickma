"use client";
import {axiosInstance} from "@/api/axios";
import {toast} from "react-toastify";
import Link from "next/link";
import {useUserContext} from "@/context/UserContext";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

const ListeRendezVous = () => {

    const {user: {reservations}, setUser} = useUserContext()
    const [mentors, setMentors] = useState()
    const router = useRouter()

    const getMentors = async () => {
        try {
            const response = await axiosInstance.get('/mentors');
            if (response.status === 200) {
                setMentors(response?.data)
            }
        } catch (error) {
            toast.error('Une erreur s’est produite lors de la récupération des mentors', {position: "top-right"});
        }
    }

    const getMentorById =  (id) => {
        return mentors?.find(e => e.id.toString() === id.toString()) || {}
    }



    useEffect(() => {

        axiosInstance.get('/me').then(({data}) => {
            localStorage.setItem('user', JSON.stringify(data));
            setUser(data)
        }).catch((reason) => {
            toast.error("Veuillez vous connecter pour continuer.", {position: "top-right"});
            router.push('/sign-in')
        })

        getMentors();


    }, []);

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
                                        <td
                                            className={`text-${rdv?.status === 'accepted' ? 'success' : rdv?.status === 'refused' ? 'danger' : 'warning'}`}
                                        >
                                            {rdv?.status}
                                        </td>
                                        <td>
                                            {
                                                new Date(rdv?.hour).toLocaleDateString() + ' ' + new Date(rdv?.hour).toLocaleTimeString()
                                            }
                                        </td>
                                        <td>
                                            {
                                                !!rdv.link ?
                                                    <a href={rdv.link} target="_blank">Meeting Link</a> : 'Pas de lien'
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