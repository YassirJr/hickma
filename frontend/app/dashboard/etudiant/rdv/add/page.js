"use client";
import {useState, useEffect} from 'react';
import {axiosInstance} from "@/api/axios";
import {toast} from "react-toastify";
import {mentors} from "@/data/mentors";
import {useRouter} from "next/navigation";
import {useUserContext} from "@/context/UserContext";


const CreateRendezVous = () => {
    const router = useRouter()

    const [formData, setFormData] = useState({
        mentor_id: '',
        description: '',
        hour: '',
    });

    const {user} = useUserContext();


    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const rendezVousData = {
            user_id: parseInt(user?.id),
            ...formData , mentor_id : parseInt(formData.mentor_id),
        };

        try {
            const response = await axiosInstance.post('/reservations', rendezVousData);

            if (response.status === 200) {
                toast.success('Rendez-vous créé avec succès!' , {position: "top-right"});
                router.push('/dashboard/etudiant/rdv');
                // Reset form or redirect
            } else {
                toast.error('Échec de création de rendez-vous' , {position: "top-right"});
            }
        } catch (error) {
            toast.error('Une erreur s’est produite lors de la création du rendez-vous' , {position: "top-right"});
        }
    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit}>
                <h2 className="mb-4">Créer un rendez-vous</h2>

                <div className="mb-3">
                    <label htmlFor="mentor_id" className="form-label">Mentor:</label>
                    <select
                        id="mentor_id"
                        name="mentor_id"
                        className="form-select"
                        value={formData.mentor_id}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a mentor</option>
                        {mentors.map((mentor) => (
                            <option key={mentor.id} value={mentor.id}>
                                {mentor.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        className="form-control"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="hour" className="form-label">Date:</label>
                    <input
                        type="datetime-local"
                        id="hour"
                        name="hour"
                        className="form-control"
                        value={formData.hour}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">Ajouter</button>
            </form>
        </div>
    );
};

export default CreateRendezVous;