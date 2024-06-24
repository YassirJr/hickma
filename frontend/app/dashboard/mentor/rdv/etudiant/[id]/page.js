"use client"
import {axiosInstance} from "@/api/axios";
import {useEffect, useState} from "react";

export default function Page({params}) {
    const [etudiant, setEtudiant] = useState({})
    const getEtudiant = async () => {
        const response = await axiosInstance.get('/user/' + params.id)
        console.log(response.data)
        if (response.status === 200) {
            setEtudiant(response.data)
        }
    }
    useEffect(() => {
        getEtudiant()
    }, []);
    return (
        <section className="section my-5 about-section gray-bg" id="about">
            <div className="container">
                <div className="row align-items-center flex-row-reverse ">
                    <div className="col-lg-6">
                        <div className="about-text go-to">
                            <h3 className="dark-color">
                                A propos de l'étudiant
                            </h3>
                            <div className="row about-list">
                                <div className="">
                                    <div className="my-2">
                                        <label htmlFor="" className='form-label'>Nom</label>
                                        <input type="text" readOnly value={etudiant?.name} className="form-control"/>
                                    </div>

                                    <div className="my-2">
                                        <label htmlFor="" className='form-label'>Email</label>
                                        <input type="text" readOnly value={etudiant?.email} className="form-control"/>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <img className='rounded' height={100} width={100} src='https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' title="" alt=""/>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}