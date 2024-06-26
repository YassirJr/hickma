import {EduorProvider} from "@/context/EduorContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/public/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "@/public/css/style.css";
import {ToastContainer} from "react-toastify";
import UserContext from "@/context/UserContext";

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <EduorProvider>
            <UserContext>
                <body>
                {children}
                <ToastContainer/>
                </body>
            </UserContext>
        </EduorProvider>
        </html>
    );
}
