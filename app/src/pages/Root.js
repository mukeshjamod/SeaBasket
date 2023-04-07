import { Outlet } from "react-router-dom";

import HeaderPage from "./Header";
import Footer from "./Footer";

function RootLayout(){
    return(
        <>
        <HeaderPage/>
        <main>
            <Outlet/>
        </main>
        <Footer/>

        </>
    )
};

export default RootLayout;