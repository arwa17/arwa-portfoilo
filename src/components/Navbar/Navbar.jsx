import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import underline from '../../assets/underline-icon.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menuOpen from '../../assets/menu-open.png';
import menuClose from '../../assets/menu-close.png';

export default function Navbar() {
    const [menu, setMenu] = useState('home');
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = '0';
    };

    const closeMenu = () => {
        menuRef.current.style.right = '-400px';
    };

    return (
        <div className="navbar">
            <img className="logo-img" src={logo} alt="" />
            <img onClick={openMenu} className="nav-mob-open" src={menuOpen} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <img onClick={closeMenu} src={menuClose} alt="" className="nav-mob-close" />
                <li>
                    <AnchorLink className="anchor-link" href="#home">
                        <p onClick={() => setMenu('home')}>Home</p>
                    </AnchorLink>
                    {menu === 'home' && <img src={underline} alt="" />}
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#about">
                        <p onClick={() => setMenu('about')}>About me</p>
                    </AnchorLink>
                    {menu === 'about' && <img src={underline} alt="" />}
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#services">
                        <p onClick={() => setMenu('services')}>Services</p>
                    </AnchorLink>
                    {menu === 'services' && <img src={underline} alt="" />}
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#portfolio">
                        <p onClick={() => setMenu('portfolio')}>Portfolio</p>
                    </AnchorLink>
                    {menu === 'portfolio' && <img src={underline} alt="" />}
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#contact">
                        <p onClick={() => setMenu('contact')}>Contact</p>
                    </AnchorLink>
                    {menu === 'contact' && <img src={underline} alt="" />}
                </li>
            </ul>
            <div className="nav-connect">
                <AnchorLink className="anchor-link" offset={50} href="#contact">
                    Connect with me
                </AnchorLink>
            </div>
        </div>
    );
}