"use client";
import React from 'react';
import {useUserContext} from "@/context/UserContext";

function Profile(props) {
    const {user} = useUserContext()
    return (
        <div className='container my-5'>
            <h3>
                Profile
            </h3>
            <div className='d-flex justify-content-center align-items-center my-4'>
                <img src="https://plus.unsplash.com/premium_photo-1664476677134-d9b4055d3adc?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  className='rounded w-50 '  alt="profile"/>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Nom</h5>
                            <p className="card-text">
                                {
                                    user?.name
                                }
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Email</h5>
                            <p className="card-text">
                                {
                                    user?.email
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;