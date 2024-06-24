"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/public/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "@/public/css/style.css";
import {toast} from "react-toastify";
import  {useUserContext} from "@/context/UserContext";
import {useEffect} from "react";
import {axiosInstance} from "@/api/axios";
import {useRouter} from "next/navigation";
import MentorNavbar from "@/component/mentor-navbar/MentorNavbar";

export default function RootLayout({children}) {
    const { setUser} = useUserContext();
    const router = useRouter()

    useEffect(() => {
            axiosInstance.get('/me').then(({data}) => {
                console.log(data)
                localStorage.setItem('user', JSON.stringify(data));
                setUser(data)
            }).catch((reason) => {
                toast.error("Veuillez vous connecter pour continuer.", {position: "top-right"});
                router.push('/sign-in')
            })

    }, []);
    return (
        <div>
            <MentorNavbar/>
            {children}
        </div>
    );
}
