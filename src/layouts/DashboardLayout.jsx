import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="w-full flex">
            <div className="flex flex-col w-1/5">
                <NavLink to="/dashboard" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "" : ""}>Dashboard</NavLink>
                <NavLink to="/dashboard/profile" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "underline" : ""}>Profile</NavLink>
                <NavLink to="/dashboard/edit-profile" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "underline" : ""}>Edit Profile</NavLink>
            </div>
            <div className="bg-blue-400 w-4/5 h-[400px]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;