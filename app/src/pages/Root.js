import { Outlet } from "react-router-dom";

import HeaderPage from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar";

function RootLayout(){
    return(
        <>
        <HeaderPage/>
        <NavBar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>

        </>
    )
};

export default RootLayout;