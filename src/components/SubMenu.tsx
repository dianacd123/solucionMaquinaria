import React from 'react';

interface SubMenuProps {
    title: string;
    link?: string; // Propiedad opcional para el enlace del submenú principal
    children: React.ReactNode;
}

const SubMenu: React.FC<SubMenuProps> = ({ title, link, children }) => {
    return (
        <li className="submenu">
            <a href={link ? link : '#'}>{title}</a>
            <ul className="submenu-items">
                {children}
            </ul>
        </li>
    );
};

export default SubMenu;
