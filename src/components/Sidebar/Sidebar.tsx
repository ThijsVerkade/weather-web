import './Sidebar.css';
import React from "react";

interface SidebarProps {
    children: React.ReactNode;
    className?: string;
}


const Sidebar: React.FC<SidebarProps> = ({ children, className }) => {
    const classNames = className ? className + " sidebar" : "sidebar";

    return (
        <div className={classNames}>
            <div className="sidebar__content">
                {children}
            </div>
        </div>
    );
};

export default Sidebar;