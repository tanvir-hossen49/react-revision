import Footer from "../Components/Footer";
import Header from "../Components/Hearder";
import { Outlet } from 'react-router';

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}