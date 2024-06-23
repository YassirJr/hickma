"use client"
import React, {useEffect, useState} from 'react';
import {useUserContext} from "@/context/UserContext";
import {useRouter} from "next/navigation";
import {axiosInstance} from "@/api/axios";

function Page(props) {
    const [isLoading, setIsLoading] = useState()
    const {authenticated, setUser, setAuthenticated, logout} = useUserContext()
    const router = useRouter()

    const isAuthenticated = () => {
        if (authenticated === true) {
            setIsLoading(false)
            axiosInstance.get('/me').then(({data}) => {
                setUser(data)
                setAuthenticated(true)
            }).catch((reason) => {
                router.push('/sign-in')
            })
        } else {
            logout();
            router.push('/sign-in')
        }
    }

    if (isLoading) {
        return <p></p>
    }
    useEffect(() => {
        isAuthenticated()
    }, [authenticated]);
    return (
        <h1>Mentor</h1>
    )
}

export default Page;