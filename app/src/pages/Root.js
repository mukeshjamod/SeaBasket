import { Outlet } from "react-router-dom";

import HeaderPage from "./Header";

function RootLayout(){
    return(
        <>
        <HeaderPage/>
        <main>
            <Outlet/>
        </main>
        </>
    )
};

export default RootLayout;