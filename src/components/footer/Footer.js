import React from 'react'
import './Footer.css'
import Logo from '../../img/logo.jpg'
import Facebook from '../../img/facebook.png'
import Whats from '../../img/whatsapp.png'
import Instagram from '../../img/instagram.png'


export default function Footer() {
    return (
        <div>
            <div id="footer">
                <div id="logo">
                    <img  src={Logo} alt="logotipo da Doce Amor"/>
                </div>
                <div>
                    <h2>Doce Amor</h2>
                    <p>Localizada em São Manuel - SP</p>
                    <p>Site desenvolvido por: <a href="https://www.linkedin.com/in/carlos-amorim-9a9a8aa2/">Carlos Amorim</a></p>
                </div>
                <nav id="navbar">
                    <h1>Entre em contato via:</h1>
                    <ul>
                        <li><a href="https://www.facebook.com/Doce-amor-105933260819755"><img src={Facebook} alt="facebook"/></a></li>
                        <li><a href="https://api.whatsapp.com/send?phone=5514991961016&app=facebook&entry_point=page_cta&fbclid=IwAR2vuMCgvS4IwHgX9l9EdvHpXXcfI-yE2g_OFl4rzlV93nyQC56MF3D3w7k"><img src={Whats} alt="whatsapp"/></a></li>
                        <li><a href="https://www.instagram.com/doceamor98/"><img src={Instagram} alt="Instagram"/></a></li>
                    </ul>
                </nav>
            </div>           
        </div>
    )
}
