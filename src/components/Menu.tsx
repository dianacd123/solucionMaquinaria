import React, { useState } from 'react';
import SubMenu from './SubMenu';
import MenuItem from './MenuItem';

const Menu: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <ul className={`menu-horizontal ${menuOpen ? 'active' : ''}`}>
                <MenuItem title="Home" link="/" />
                <SubMenu title="Renta" link="/renta">
                    <MenuItem title="Team" link="/renta/team" />
                    <MenuItem title="Company" link="/renta/company" />
                </SubMenu>
                <SubMenu title="Venta" link="/venta">
                    <MenuItem title="Web Development" link="/venta/web" />
                    <MenuItem title="App Development" link="/venta/app" />
                </SubMenu>
                <MenuItem title="Solucion" link="/solucion" />
            </ul>
        </nav>
    );
};

export default Menu;
