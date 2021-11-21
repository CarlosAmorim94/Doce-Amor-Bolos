import React from 'react'
import './Footer.css'
import Logo from '../../img/logo.jpg'

export default function Footer() {
    return (
        <div>
            <div id="footer">
                <div id="logo">
                    <img  src={Logo} alt="logotipo da Doce Amor"/>
                </div>
                <div id="text">
                    <p>Doce Amor&copy; - Todos os direitos reservados</p>
                    <p>Site desenvolvido por: <a href="https://www.linkedin.com/in/carlos-amorim-9a9a8aa2/">Carlos Amorim</a></p>
                </div>
            </div>           
        </div>
    )
}
