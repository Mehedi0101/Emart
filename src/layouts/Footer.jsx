import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow m-4">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm  sm:text-center ">© 2023 <a href="#" className="hover:underline">Emart™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap gap-5 items-center mt-3 text-sm font-medium sm:mt-0">
                    <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "underline" : ""}>Home</NavLink>
                    <NavLink to="/products" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "underline" : ""}>Products</NavLink>
                    <NavLink to="/dashboard" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "underline" : ""}>Dashboard</NavLink>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;