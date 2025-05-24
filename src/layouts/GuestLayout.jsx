
// import Footer from "../components/Footer";
// import PageHeader from "../components/PageHeader";
import { Outlet } from "react-router-dom";
import Navebar from "../components/Quiz/Navbar";
import Futer from "../components/Quiz/Futer";

export default function GuestLayout() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Navebar />
            {/* <PageHeader /> */}
            <div className="flex-1 p-4">
                <Outlet />
            </div>
            <Futer />
        </div>
    );
}