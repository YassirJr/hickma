"use client";
import {createContext, useContext, useState} from "react";
import {axiosInstance} from "@/api/axios";


export const UserStateContext = createContext({
    user: {},
    authenticated: false,
    setUser: () => {
    },
    logout: () => {
    },
    setAuthenticated: () => {
    },
    setToken: () => {
    },
})

export default function UserContext({children}) {
    const [user, setUser] = useState({})
    const [authenticated, _setAuthenticated] = useState('true' === window.localStorage.getItem('AUTHENTICATED'))



    const logout = async () => {
        setUser({})
        setAuthenticated(false)
        return await axiosInstance.post('/logout')
    }

    const setAuthenticated = (isAuthenticated) => {
        _setAuthenticated(isAuthenticated)
        window.localStorage.setItem('AUTHENTICATED', isAuthenticated)
    }

    const setToken = (token) => {
        window.localStorage.setItem('token', token)
    }

    return <>
        <UserStateContext.Provider value={{
            user,
            logout,
            setUser,
            authenticated,
            setAuthenticated,
            setToken
        }}>
            {children}
        </UserStateContext.Provider>
    </>
}
export const useUserContext = () => useContext(UserStateContext)
