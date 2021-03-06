import React from 'react'
import './Header.css'
import Logo from '../../img/logo.jpg'
import Facebook from '../../img/facebook.png'
import Whats from '../../img/whatsapp.png'
import Instagram from '../../img/instagram.png'

export default function Header() {
    return (
        <header>
            <div id="header">
                <div id="logo">
                    <img  src={Logo} alt="logotipo da Doce Amor"/>
                </div>
                <nav id="navbar">
                    <ul>
                        <li><a href="https://www.facebook.com/Doce-amor-105933260819755"><img src={Facebook} alt="facebook"/></a></li>
                        <li><a href="https://api.whatsapp.com/send?phone=5514991961016&app=facebook&entry_point=page_cta&fbclid=IwAR2vuMCgvS4IwHgX9l9EdvHpXXcfI-yE2g_OFl4rzlV93nyQC56MF3D3w7k"><img src={Whats} alt="whatsapp"/></a></li>
                        <li><a href="https://www.instagram.com/doceamor98/"><img src={Instagram} alt="Instagram"/></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
