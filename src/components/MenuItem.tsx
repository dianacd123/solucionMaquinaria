import React from 'react';

interface MenuItemProps {
    title: string;
    link?: string; // Propiedad opcional para el enlace
}

const MenuItem: React.FC<MenuItemProps> = ({ title, link }) => {
    return (
        <li className="menu-item">
            <a href={link ? link : '#'}>{title}</a>
        </li>
    );
};

export default MenuItem;