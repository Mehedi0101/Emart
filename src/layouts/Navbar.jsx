import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="text-xl font-semibold p-6 space-x-10">
                <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "underline" : "" }>Home</NavLink>
                <NavLink to="/products" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "underline" : "" }>Products</NavLink>
                <NavLink to="/dashboard" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "underline" : "" }>Dashboard</NavLink>
        </div>
    );
};

export default Navbar;