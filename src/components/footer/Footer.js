import React from 'react'
import './Footer.css'
import Logo from '../../img/logo.jpg'

export default function Footer() {
    return (
        <footer>
            <section id="footer">
                <div id="logo">
                    <img  src={Logo} alt="logotipo da Doce Amor"/>
                </div>
                <div id="text">
                    <p>Doce Amor&copy; - Todos os direitos reservados</p>
                    <p>Site desenvolvido por: <a href="https://www.linkedin.com/in/carlosamorim94/">Carlos Amorim</a></p>
                </div>
            </section>           
        </footer>
    )
}
