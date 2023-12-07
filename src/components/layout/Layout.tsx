import {Outlet} from "react-router-dom";
import Header from "./Header.tsx";

function Layout() {
    return (
        <>
            <Header/>
            <div className={'container pt-10'}>
                <Outlet/>
            </div>
        </>
    );
}

export default Layout;