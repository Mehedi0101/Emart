import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold"><span className="text-red-600">E</span>mart</h1>
                <Navbar></Navbar>
            </div>
            <div className="min-h-[75vh]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;