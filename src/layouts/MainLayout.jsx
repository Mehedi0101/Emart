import { Outlet, useNavigation } from "react-router-dom";
import { RotatingLines } from  'react-loader-spinner';
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {

    const navigation = useNavigation();

    return (
        <div>
            <div className="md:flex justify-between items-center text-center md:text-left mb-5">
                <h1 className="text-3xl font-bold"><span className="text-red-600">E</span>mart</h1>
                <Navbar></Navbar>
            </div>
            <div className="min-h-[72vh]">

                {
                    navigation.state === 'loading' ? <div className="flex justify-center items-center h-[72vh]"><RotatingLines
                    strokeColor="gray"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                  /></div> : <Outlet></Outlet>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;